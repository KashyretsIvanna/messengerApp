import Contacts from './Contacts';
import Chat from './Chat';
import Authorization from './Authorization';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const App = () => {
  const author = useSelector(state => state.persistedReducer.user);
  let getWidth = () => window.innerWidth;
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
        {Object.keys(author).length !== 0 && (
          <Route
            path="/contacts"
            element={
              <>
                {getWidth() < 900 ? (
                  <Contacts />
                ) : (
                  <>
                    <Contacts />
                    <Chat />
                  </>
                )}
              </>
            }
          />
        )}
        <Route path="/authorization" element={<Authorization />} />

        <Route
          path="/contacts/:id"
          element={
            <>
              {getWidth() < 900 ? (
                <Chat />
              ) : (
                <>
                  <Contacts />
                  <Chat />
                </>
              )}
            </>
          }
        />

        <Route path="*" element={<Authorization />} />
      </Routes>
    </div>
  );
};
