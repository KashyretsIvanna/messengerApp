import Contacts from './Contacts';
import Chat from './Chat';
import Login from './Login/Login';
import Logout from './Login/Logout';
import { Fragment } from 'react';
import '../components/App.css';
import GoogleLogin from 'react-google-login';


export const App = () => {
  return (
    <Fragment>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <Contacts />
      <Chat /> */}
      </div>
      <div className="login">
        <Login />
        <Logout />
      </div>
    </Fragment>
  );
};
