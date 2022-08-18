import Contacts from './Contacts';
import Chat from './Chat';

export const App = () => {
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

      
      <Contacts />
      <Chat/>
    </div>
  );
};
