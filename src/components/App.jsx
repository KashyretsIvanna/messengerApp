import Contacts from './Contacts';
import Chat from './Chat';
import Login from './Login/Login';
import Logout from './Login/Logout';
import { Fragment } from 'react';
import '../components/App.css';
import { useState } from 'react';

export const App = () => {
  // const author = useSelector(state => state.persistedReducer.author);
  // console.log(author)
  const [author, setAuthor] = useState(null);
  const getResponse = response => {
    setAuthor(response);
  };
  console.log(author);

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
        {author !== null && (
          <>
            <Contacts />
            <Chat />
          </>
        )}
      </div>
      {!author && (
        <div className="login">
          <Login getResponse={getResponse} />
        </div>
      )}
      {author && <Logout getResponse={getResponse} />}
    </Fragment>
  );
};
