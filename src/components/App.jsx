import Contacts from './Contacts';
import Chat from './Chat';
import { useSelector } from 'react-redux';

export const App = () => {
  const state=useSelector(state=>state)
  console.log(state)

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
