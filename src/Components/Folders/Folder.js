import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolder, faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import {NavLink, Redirect, Route, useHistory} from "react-router-dom";
import classes from './Folders.module.css'
import Bin from "../Bin/Bin";
import {useCallback, useEffect} from "react";

const Folder = ({active, name, folderId, del, DeleteFolder, SelectFolder}) => {
    const history = useHistory()
    const url = parseInt(history.location.pathname.split('/').pop())
    const folderHandler = () => {
        SelectFolder(folderId)
    }

    const DeleteFolderHandler = () => {
        DeleteFolder(folderId)
        if (folderId === url) {
            history.push('/tasks/1')
        }
    }
    return (
        <div className={`m-2 ${classes.Folder}`} onClick={folderHandler}>
            <NavLink to={`/tasks/${folderId}`}>
                {active ? <FontAwesomeIcon size="lg" icon={faFolderOpen}/>
                    : <FontAwesomeIcon size="lg" icon={faFolder}/>}
                <span className="m-2">{name}</span>
            </NavLink>
            {del && folderId !== 1 && <span onClick={DeleteFolderHandler}><Bin/></span>}
        </div>
    )
}
export default Folder