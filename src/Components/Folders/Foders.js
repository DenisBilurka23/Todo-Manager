import Folder from "./Folder"
import classes from "./Folders.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolderMinus, faFolderPlus} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

const Folders = ({folders, createFolder, DeleteFolder, LoadFolders, SelectFolder}) => {
    const [folderId, setFolderId] = useState(1)
    const [activeInput, setActiveInput] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [del, setDel] = useState(false)
    useEffect(() => setFolderId(prevState => prevState + 1), [folders.length])
    useEffect(() => LoadFolders(JSON.parse(localStorage.getItem('folders'))), [])
    useEffect(() => localStorage.setItem('folders', JSON.stringify(folders)), [folders])

    const folderGenerator = folders.map(item => {
        return <Folder DeleteFolder={DeleteFolder}
                       del={del}
                       name={item.name}
                       active={item.active}
                       folderId={item.folderId}
                       SelectFolder={SelectFolder}
                       key={Math.random() + item.name}
        />
    })
    const createFolderHandler = event => {
        event.target.value && createFolder(folderId ,event.target.value)
        setActiveInput(prev => !prev)
        setInputValue('')
    }
    const handleKeyUp = event => event.key === 'Enter' && createFolderHandler(event)
    return <div>
        {folderGenerator}
        {activeInput && <input
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            placeholder="Enter folder name"
            onBlur={createFolderHandler}
            onKeyUp={handleKeyUp}
            type="text"
        />}
        <div className="editFolders mt-4">
            <div className={`m-2 ${classes.AddFolder}`}
                 onClick={() => setActiveInput(prev => !prev)
            }>
                <FontAwesomeIcon icon={faFolderPlus} size='lg'/>
                <span className="m-2">Add folder</span>
            </div>
            <div className={`m-2 ${classes.RemoveFolder} ${del && classes.active}`}
                 onClick={() => setDel(prev => !prev)}
            >
                <FontAwesomeIcon icon={faFolderMinus} size='lg'/>
                <span className="m-2">Remove folder</span>
            </div>
        </div>
    </div>
}

export default Folders