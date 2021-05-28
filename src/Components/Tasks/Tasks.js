import {connect} from "react-redux";
import Task from "./Task";
import {ClearAllAC, CompleteTaskAC, CreateTaskAC, DeleteTaskAC, LoadTasksAC} from "../../redux/ActionCreators";
import {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import classes from './Task.module.css'


const Tasks = ({tasks, CreateTaskAC, ClearAllAC, CompleteTaskAC, LoadTasksAC, DeleteTaskAC}) => {
    const [id, setId] = useState(1)
    const [active, setActive] = useState(false)
    const [search, setSearch] = useState('')
    const folderId = parseInt(useHistory().location.pathname.split('/').pop())
    useEffect(() => setId(prevState => prevState + 1), [tasks.length])
    useEffect(() => LoadTasksAC(JSON.parse(localStorage.getItem('tasks'))), [])
    useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks])
    const taskGenerator = (items) => items.map(item => {
        if(item.task && item.FolderId === folderId) return <Task
            id={item.id}
            CompleteTaskAC={CompleteTaskAC}
            key={Math.random()}
            date={item.time}
            task={item.task}
            isCompleted={item.isCompleted}
            DeleteTask={DeleteTaskAC}
        />
    })

    const filteredTaskGenerator = () => {
        if (search) {
            const searchedTasks = tasks.filter(searched => {
                return searched.task.indexOf(search) === 0
            })
            return taskGenerator(searchedTasks)
        }
        return taskGenerator(tasks)
    }

    const createTask = (event) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']
        const months = ['January', 'February', 'March', 'April ', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December']
        const time = new Date()
        let day = time.getDay()
        const year = time.getFullYear()
        const dayNum = time.getDate()
        const month = time.getMonth()
        const hours = time.getHours()
        const minutes = () => {
            const min = time.getMinutes()
            if (min.toString().length === 1) {
                return '0' + min
            }
            return min
        }
        event.target.value && CreateTaskAC(event.target.value,
            `${hours}:${minutes()} ${days[day]}, ${dayNum} ${months[month]} ${year}`, folderId, id)
        setActive(prev => !prev)
        event.target.value = ''
    }
    const handleKeyUp = event => event.key === 'Enter' && createTask(event)

    return (
        <div>
            <h3 className={'text-center mt-4'}>ALL TASKS</h3>
            <hr/>
            {id > 1 && <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder='Search'
                className={classes.Search}
            />}
            <div className={`d-flex flex-column justify-content-around `}>
                {filteredTaskGenerator()}
            </div>
            {active && <div>
                <input type="text"
                       placeholder='Enter task'
                       onBlur={createTask}
                       onKeyUp={handleKeyUp}
                       className={classes.inptTask}
                />
            </div>}
            <div>
                <div className="row m-0 mb-5">
                    <button className={`col-xs-12 col-6 ${classes.btnAdd}`} onClick={() => setActive(prev => !prev)}>
                        Add new
                    </button>
                    <button className={`col-xs-12 col-6 ${classes.btnClear}`} onClick={ClearAllAC}>Clear all</button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    tasks: state.ListReducer.tasks
})
export default connect(mapStateToProps,
    {CreateTaskAC, ClearAllAC, CompleteTaskAC, LoadTasksAC, DeleteTaskAC})(Tasks)