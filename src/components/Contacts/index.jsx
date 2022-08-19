import styles from '../Contacts/index.module.scss';
import { useSelector } from 'react-redux';
import Contact from 'components/Contact';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import * as actions from '../../redux/actions';
import React from 'react';
import { useEffect } from 'react';

const Contacts = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  let contacts = useSelector(state => state.persistedReducer.filtered);
  console.log(contacts)

  useEffect(() => {
    dispatch(actions.filterContacts(input));
  }, [input, dispatch]);

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
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
          type="text"
        />
      </div>
      <div className={styles.chats}>
        Chats
        {contacts.map(el => (
          <Contact key={el.id} user={el} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
