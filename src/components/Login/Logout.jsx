import React from 'react';
import { GoogleLogout } from 'react-google-login';

function Logout() {
    const logout=()=>{
        console.log("successful logout")
    }
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
