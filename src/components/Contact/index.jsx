import { Link } from 'react-router-dom';
import styles from '../Contact/index.module.scss';
import PropTypes from "prop-types"
const Contact = ({ user }) => {
  return (
    <Link
      style={{ color: 'black', textDecoration: 'none' }}
      to={'/contacts/' + user.id}
      state={{ from: user.id, user: user }}
    >
      <div className={styles.user_cart}>
        <img className={styles.avatar} src={user.avatar} alt="" />
        <div className={styles.text}>
          <p className={styles.name}>
            <b>{user.name}</b>
          </p>
          <p className={styles.user_message}>
            {user.messeges[user.messeges.length - 1].messege}
          </p>
        </div>
        <p className={styles.time}>
          {user.messeges[user.messeges.length - 1].time}
        </p>
      </div>
    </Link>
  );
};
Contact.propTypes={
  user:PropTypes.object.isRequired

}



export default Contact;
