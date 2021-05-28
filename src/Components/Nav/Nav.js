import {connect} from "react-redux";
import Folders from "../Folders/Foders";
import {CreateFolderAC, DeleteFolderAC, LoadFoldersAC, SelectFolderAC} from "../../redux/ActionCreators";

const Nav = ({folders, CreateFolderAC, DeleteFolderAC, LoadFoldersAC, SelectFolderAC}) => {
    return (
        <div className="mt-5 h-100 flex-column">
            <div className="flex-grow-1">
            <Folders DeleteFolder={DeleteFolderAC}
                     folders={folders}
                     createFolder={CreateFolderAC}
                     LoadFolders={LoadFoldersAC}
                     SelectFolder={SelectFolderAC}
            />
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    folders: state.ListReducer.folders
})
export default connect(mapStateToProps,
    {CreateFolderAC, DeleteFolderAC, LoadFoldersAC, SelectFolderAC})(Nav)