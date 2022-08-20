import Contacts from './Contacts';
import Chat from './Chat';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import * as actions from '../redux/actions';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const firebaseConfig = {
    apiKey: 'AIzaSyD_2I0rOe795m0l9nXPk3HX5xlvy9GO1Hc',
    authDomain: 'messanger-5dbc4.firebaseapp.com',
    projectId: 'messanger-5dbc4',
    storageBucket: 'messanger-5dbc4.appspot.com',
    messagingSenderId: '601028869999',
    appId: '1:601028869999:web:a56b16f40c7aad2370f29a',
    measurementId: 'G-90BLT3FE4E',
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signInWihGoogle = () => {
    signInWithPopup(auth, provider)
      .then(results => {
        dispatch(actions.setUser(results));

        console.log(results);
      })
      .catch(err => console.log(err));
  };

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
      <button onClick={() => signInWihGoogle()}>Sign</button>
    </div>
  );
};
