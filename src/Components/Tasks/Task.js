import classes from './Task.module.css'
import Bin from "../Bin/Bin";

const Task = ({task, date, CompleteTaskAC, isCompleted, id, DeleteTask}) => {
    return (
        <div
            onClick={() => CompleteTaskAC(id)}
            className={` ${classes.Task} ${isCompleted && classes.Completed}`}
        >
            <div className="row justify-content-between">
                <div className="col-auto p-0">{task}</div>
                <div className="col-auto p-0">
                    <span>{date}</span>
                    <span onClick={() => DeleteTask(id)} className="m-2"><Bin/></span>
                </div>
            </div>
        </div>
    )
}
export default Task