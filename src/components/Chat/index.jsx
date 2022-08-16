import styles from '../Chat/index.module.scss';
import { useLocation } from 'react-router-dom';
import Message from 'components/Messege';

const Chat = () => {
  let myavatar =
    'https://i.pinimg.com/564x/87/7e/47/877e4704f794b9537f116ad97a8df9b3.jpg';
  const location = useLocation();
  let user = location.state.user;
  console.log(user);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logo} alt="" src={user.avatar}></img>
        {user.name}
      </div>
      <div className={styles.body}>
        {user.messeges.map(el => (
          <Message
            avatar={user.avatar}
            key={el.id}
            myavatar={myavatar}
            messages={el}
          />
        ))}
      </div>
      <form className={styles.footer}>
        <input
          placeholder="Type your message"
          className={styles.sent}
          type="text"
        />
        <button className={styles.sent_btn}></button>
      </form>
    </div>
  );
};

export default Chat;
