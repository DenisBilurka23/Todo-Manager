import {
    CLEAR_ALL,
    COMPLETE_TASK,
    CREATE_FOLDER,
    CREATE_NEW_TASK,
    DELETE_FOLDER, DELETE_TASK, FOLDER_SELECT, LOAD_ALL_FOLDERS,
    LOAD_ALL_TASKS
} from "./ActionTypes";

const initialState = {
    tasks: [
        // {
        //     task: null,
        //     time: null,
        //     isCompleted: null,
        //     isShown: null,
        //     id: null,
        //     FolderId: null
        // }
    ],
    folders: [
        {
            name: 'Main',
            folderId: 1,
            active: true
        }
    ]
}


const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_TASK: {
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        task: action.task,
                        time: action.time,
                        isCompleted: false,
                        isShown: true,
                        FolderId: action.FolderId,
                        id: action.id
                    }
                ]
            }
        }
        case LOAD_ALL_TASKS: {
            return {
                ...state,
                tasks: action.tasks
            }
        }
        case CLEAR_ALL: {
            return {
                ...state,
                tasks: []
            }
        }

        case COMPLETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.id) return {...task, isCompleted: !task.isCompleted}
                    else return {...task}
                })
            }
        }
        case CREATE_FOLDER: {
            return {
                ...state,
                folders: [
                    ...state.folders,
                    {
                        name: action.name,
                        folderId: action.folderId
                    }
                ]
            }
        }
        case LOAD_ALL_FOLDERS: {
            return {
                ...state,
                folders: action.folders
            }
        }
        case DELETE_FOLDER: {
            return {
                ...state,
                folders: state.folders.filter(item => {
                    return item.folderId !== action.folderId || item.folderId === 1
                }),
                tasks: state.tasks.filter(task => {
                    return task.FolderId !== action.folderId
                })
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        }
        case FOLDER_SELECT: {
            return {
                ...state,
                folders: state.folders.map(folder => folder.folderId === action.folderID ?
                    {...folder, active: true} : {...folder, active: false}
                )
            }
        }
        default:
            return state
    }
}
export default UserReducer