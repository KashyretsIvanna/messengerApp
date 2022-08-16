import styles from '../Contacts/index.module.scss';
import { useSelector } from 'react-redux';
// import { useDispatch } from "react-redux"
import { Routes, Route } from 'react-router-dom';
import Contact from 'components/Contact';


const Contacts = () => {
  let contacts = useSelector(state => state.contactReducer);

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <img
          className={styles.profile}
          src="https://i.pinimg.com/564x/1b/d6/9d/1bd69de67d1889d471bad439f30ed369.jpg"
          alt=""
        />
        <input
          placeholder="Search or start new chat"
          className={styles.filter}
          type="text"
        />
      </div>
      <div className={styles.chats}>
        Chats
        {/* {contacts.forEach(el=>console.log(el))} */}
        {contacts.map(el=><Contact key={el.id} user={el}/>)}
      </div>
    </div>
  );
};

export default Contacts;
