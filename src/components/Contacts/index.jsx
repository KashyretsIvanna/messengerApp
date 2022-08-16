import styles from "../Contacts/index.module.scss"
import { useSelector } from "react-redux"
// import { useDispatch } from "react-redux"


const Contacts=()=>{
    
let contacts=useSelector(state=>state.contactReducer)
console.log(contacts)

    return(<div className={styles.sidebar}>
        <div className={styles.header}>
            <img src="" alt=""/>
            <button className={styles.search_btn}></button>
            <input className={styles.filter} type="text"/>
        </div>
        <div className={styles.chats}>
            Chats
        </div>

    </div>)
}

export default Contacts