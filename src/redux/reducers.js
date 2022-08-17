import * as actions from '../redux/actions';
import { createReducer } from '@reduxjs/toolkit';

const INITIALSTATE = {
  contacts: [
    {
      id: '566876',
      name: 'Andrej',
      avatar:
        'https://i.pinimg.com/564x/4b/fd/cc/4bfdcce76bdf2435971572ec6aa895ca.jpg',
      messeges: [
        { id: 'A456', messege: 'Hello', time: 'time', proprety: 'friend' },
        {
          id: 'A457',
          messege: 'I was glad to see you',
          time: 'time',
          proprety: 'my',
        },
      ],
    },
    {
      id: '56676',
      name: 'Ann',
      avatar:
        'https://i.pinimg.com/564x/51/db/15/51db15d2d1bd03ecbcc0f1dfcac98bf3.jpg',

      messeges: [
        { id: 'A456', messege: 'Hello', time: 'time', proprety: 'friend' },
        { id: 'A457', messege: 'I am happy', time: 'time', proprety: 'my' },
      ],
    },
    {
      id: '56687',
      name: 'Vikki',
      avatar:
        'https://i.pinimg.com/564x/6b/7a/5c/6b7a5cf25640c59c06df69632376a44e.jpg',

      messeges: [
        { id: 'A456', messege: 'Hello', time: 'time', proprety: 'friend' },
        { id: 'A457', messege: 'How are you?', time: 'time', proprety: 'my' },
      ],
    },
  ],
  filtered: [],
};

const contactReducer = createReducer(INITIALSTATE, {
  [actions.filterContacts.type]: (state, action) => ({
    ...state,
    filtered: [
      ...state.contacts.filter(el =>
        el.name.toLowerCase().includes(action.payload.toLowerCase())
      ),
    ],
  }),
  [actions.sentMessage.type]: (state, action) => ({
    ...state,
    contacts: [
      {
        ...state.contacts.filter(el => el.id === action.payload.id)[0],
        messeges: [
          ...state.contacts.filter(el => el.id === action.payload.id)[0]
            .messeges,
          action.payload.mess,
        ],
      },
      ...state.contacts.filter(el => el.id !== action.payload.id),
    ],
  }),
});

export default contactReducer;
