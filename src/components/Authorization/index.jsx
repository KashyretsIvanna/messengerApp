import React from 'react';
import { initializeApp } from 'firebase/app';
import styles from '../Authorization/index.module.css';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from 'firebase/auth';
import * as actions from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Authorization() {
  const navigate = useNavigate();
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
  const providerGoogle = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();
  const providerTwiter = new TwitterAuthProvider();

  const signInWihGoogle = providerType => {
    signInWithPopup(auth, providerType)
      .then(results => {
        dispatch(actions.setUser(results));
        navigate('/contacts');
      })
      .catch(err => console.log(err));
  };
  const signInWithFacebook = providerType => {
    signInWithPopup(auth, providerType)
      .then(results => {
        dispatch(actions.setUser(results));
      })
      .catch(err => console.log(err));
  };
  return (
    <div className={styles.authorization}>
      <button
        className={styles.btn + ' ' + styles.google_btn}
        onClick={() => signInWihGoogle(providerGoogle)}
      >
        Sign in with Google
      </button>
      <button
        className={styles.btn + ' ' + styles.facebook_btn}
        onClick={() => signInWithFacebook(providerFacebook)}
      >
        Sign in with Facebook
      </button>
      <button
        className={styles.btn + ' ' + styles.twitter_btn}
        onClick={() => signInWihGoogle(providerTwiter)}
      >
        Sign in with Twitter
      </button>
    </div>
  );
}

export default Authorization;
