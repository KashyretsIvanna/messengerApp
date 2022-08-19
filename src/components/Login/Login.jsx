import React from 'react';
import GoogleLogin from 'react-google-login';


function Login() {
    const responseGoogle=(response)=>{
        console.log(response)
    }
  return (
    <div>
      <GoogleLogin
        clientId="643525001877-5ncne9jumg4180ucmvo061nn9am22443.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Login;
