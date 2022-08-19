import React from 'react';
import { GoogleLogout } from 'react-google-login';
// import { useDispatch } from 'react-redux';
// import * as actions from '../../redux/actions';

function Logout({getResponse}) {
//   const dispatch = useDispatch();
  const logout = () => {
    console.log('successful logout');
    // dispatch(actions.changeAuthor(null));
    getResponse(null);

  };
  return (
    <div>
      <GoogleLogout
        clientId="643525001877-5ncne9jumg4180ucmvo061nn9am22443.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
