import Contacts from './Contacts';
import Chat from './Chat';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export const App = () => {
  function handleCallbackResponse(response) {
    console.log(jwt_decode(response.credential));
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        '71848933982-fg672e4995svgotpfiko6moelsbjooc7.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signin'), {
      theme: 'outline',
      size: 'large',
    });
    // google.accounts.id.propmpt();
  }, []);
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {' '}
      <div id="signin"></div>
      <Contacts />
      <Chat />
    </div>
  );
};
