import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import classes from './Bin.module.css'

const Bin = () => (
    <span className={`${classes.bin}`}>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
    </span>
)
export default Bin