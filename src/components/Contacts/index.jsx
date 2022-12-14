import styles from '../Contacts/index.module.scss';
import { useSelector } from 'react-redux';
import Contact from 'components/Contact';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import * as actions from '../../redux/actions';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  let contacts = useSelector(state => state.persistedReducer.filtered);
  const author = useSelector(state => state.persistedReducer.user);
  console.log(author);

  useEffect(() => {
    dispatch(actions.filterContacts(input));
  }, [input, dispatch]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.author}>
          <img className={styles.profile} src={author.photoURL} alt="" />

          <Link
            onClick={() => {
              dispatch(actions.setUser({ user: {} }));
            }}
            className={styles.change}
            to="/authorization"
          ></Link>
          <div>{author.displayName}</div>
        </div>
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
