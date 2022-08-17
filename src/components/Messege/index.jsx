import styles from '../Messege/index.module.scss';

const Message = ({ messages, avatar }) => {
  let message = messages.messege;
  let time = messages.hours;
  let property = messages.proprety;

  return (
    <div className={styles.message_cart}>
      {property === 'friend' && (
        <>
          <div className={styles.message_body}>
            <img src={avatar} alt="" />
            <div className={styles.message}>{message}</div>
          </div>
          <div className={styles.date}>{time}</div>
        </>
      )}
      {property === 'my' && (
        <>
          <div className={styles.message_body_my}>
            <div className={styles.message_my}>{message}</div>
            <img src={avatar} alt="" />
          </div>
          <div className={styles.message_cart_my}>
            <div className={styles.date_my}>{time}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
