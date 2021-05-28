import {
    CLEAR_ALL,
    COMPLETE_TASK,
    CREATE_FOLDER,
    CREATE_NEW_TASK,
    DELETE_FOLDER, DELETE_TASK, FOLDER_SELECT, LOAD_ALL_FOLDERS,
    LOAD_ALL_TASKS
} from "./ActionTypes";

export const CreateTaskAC = (task, time, FolderId, id) => ({
    type: CREATE_NEW_TASK,
    task,
    time,
    FolderId,
    id
})
export const ClearAllAC = () => ({
    type: CLEAR_ALL
})
export const CompleteTaskAC = (id) => ({
    type: COMPLETE_TASK,
    id
})
export const CreateFolderAC = (folderId, name) => ({
    type: CREATE_FOLDER,
    folderId,
    name
})
export const DeleteFolderAC = (folderId) => ({
    type: DELETE_FOLDER,
    folderId
})
export const LoadTasksAC = tasks => ({
    type: LOAD_ALL_TASKS,
    tasks
})
export const LoadFoldersAC = folders => ({
    type: LOAD_ALL_FOLDERS,
    folders
})
export const SelectFolderAC = folderID => ({
    type: FOLDER_SELECT,
    folderID
})
export const DeleteTaskAC = id => ({
    type: DELETE_TASK,
    id
})