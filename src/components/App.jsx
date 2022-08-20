import Contacts from './Contacts';
import Chat from './Chat';
import Authorization from './Authorization';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const App = () => {
  const author = useSelector(state => state.persistedReducer.user);
  console.log('au:', Object.keys(author).length);
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
      <Routes>
        <Route
          path="/contacts"
          element={
            <>
              <Contacts />
              <Chat />
            </>
          }
        />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </div>
  );
};
