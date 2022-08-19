import React from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import * as actions from '../../redux/actions';

function Login({getResponse}) {
//   const dispatch = useDispatch();
  const clientId =
    '643525001877-5ncne9jumg4180ucmvo061nn9am22443.apps.googleusercontent.com';

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);

  const responseGoogle = response => {
    // dispatch(actions.changeAuthor({ ...response }));
    getResponse(response);
  };

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
