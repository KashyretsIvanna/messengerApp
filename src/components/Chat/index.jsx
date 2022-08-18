import styles from '../Chat/index.module.scss';
import { useLocation } from 'react-router-dom';
import Message from 'components/Messege';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

const Chat = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const objDiv = document.querySelector(styles.body);
  console.log(objDiv)

  let users = useSelector(state => state.contactReducer.filtered);
  let myavatar =
    'https://i.pinimg.com/564x/87/7e/47/877e4704f794b9537f116ad97a8df9b3.jpg';
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    let time = () => new Date();
    let day = time().getDay().toString();
    let year = time().getFullYear().toString();
    let now = time().toLocaleDateString('en-us', { month: 'short' });

    dispatch(
      actions.sentMessage({
        id: location.state.user.id,
        mess: {
          id: nanoid(),
          messege: input,
          time: day + ' ' + now + ' ,' + year,
          hours: time().toLocaleDateString('en-us', {
            hour: 'numeric',
            minute: 'numeric',
          }),
          proprety: 'my',
        },
      })
    );
    // objDiv.scrollTop = objDiv.scrollHeight;

    console.log(objDiv);

    dispatch(actions.filterContacts(''));
    setInput('');

    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(item => {
        setTimeout(() => {
          dispatch(
            actions.sentMessage({
              id: location.state.user.id,
              mess: {
                id: nanoid(),
                messege: item.value,
                time: day + ' ' + now + ' ,' + year,
                hours: time().toLocaleDateString('en-us', {
                  hour: 'numeric',
                  minute: 'numeric',
                }),
                proprety: 'friend',
              },
            })
          );
          dispatch(actions.filterContacts(''));
        }, 10000);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          {location.state && (
            <img
              className={styles.logo}
              alt=""
              src={location.state.user.avatar}
            ></img>
          )}
          {location.state && location.state.user.name}
        </div>
        <div className={styles.body}>
          {location.state &&
            users
              .filter(el => el.id === location.state.user.id)[0]
              .messeges.map(el => (
                <Message
                  avatar={location.state && location.state.user.avatar}
                  key={el.id}
                  myavatar={myavatar}
                  messages={el}
                />
              ))}
        </div>
        <form
          className={styles.footer}
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          {location.state && (
            <>
              <input
                value={input}
                placeholder="Type your message"
                className={styles.sent}
                type="text"
                onChange={e => setInput(e.target.value)}
              />
              <button className={styles.sent_btn}></button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Chat;
