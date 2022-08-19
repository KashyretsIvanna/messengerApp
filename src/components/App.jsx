import Contacts from './Contacts';
import Chat from './Chat';
// import { useEffect } from 'react';
// import jwt_decode from 'jwt-decode';
// import { gapi } from 'gapi-script';

export const App = () => {
  
  // function handleCredentialResponse(response) {
  //   console.log(jwt_decode(response.credential));
  // }

  // useEffect(() => {
  //   console.log(gapi);

  //   gapi.accounts.id.initialize({
  //     client_id:
  //       '643525001877-5ncne9jumg4180ucmvo061nn9am22443.apps.googleusercontent.com',
  //     callback: handleCredentialResponse,
  //   });
  //   gapi.accounts.id.renderButton(document.getElementById('signin'), {
  //     theme: 'outline',
  //     size: 'large',
  //   });
  //   gapi.accounts.id.propmpt();
  // }, []);


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
      <div id="signin"></div>

      <Contacts />
      <Chat />
    </div>
  );
};
