import * as actions from '../redux/actions';
import { createReducer } from '@reduxjs/toolkit';

const INITIALSTATE = {
  user: null,
  contacts: [
    {
      id: '56676',
      name: 'Ann',
      avatar:
        'https://i.pinimg.com/564x/51/db/15/51db15d2d1bd03ecbcc0f1dfcac98bf3.jpg',

      messeges: [
        {
          id: '1',
          messege: 'Hello , how are you today?',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'my',
        },
        {
          id: '2',
          messege:
            'I was relly glad to see you the last time! I am excited!How are you?',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'friend',
        },
        {
          id: '3',
          messege: 'I am to!',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'my',
        },
        {
          id: '4',
          messege: 'I am looking forward to hearing from you',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'my',
        },
      ],
    },
    {
      id: '56687',
      name: 'Vikki',
      avatar:
        'https://i.pinimg.com/564x/6b/7a/5c/6b7a5cf25640c59c06df69632376a44e.jpg',

      messeges: [
        {
          id: '1',
          messege: 'Hello , how are you today?',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'my',
        },
        {
          id: '2',
          messege:
            'I was relly glad to see you the last time! I am excited!How are you?',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'friend',
        },
        {
          id: '3',
          messege: 'I am to!',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'my',
        },
        {
          id: '4',
          messege: 'I am looking forward to hearing from you',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'my',
        },
      ],
    },
    {
      id: '56djjkl687',
      name: 'Lily',
      avatar:
        'https://i.pinimg.com/564x/b3/0d/f7/b30df7ffc3e4c04232325bdf20ab96d5.jpg',

      messeges: [
        {
          id: '10',
          messege: 'Hello , how are you today?',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'my',
        },
        {
          id: '11',
          messege:
            'I was relly glad to see you the last time! I am excited!How are you?',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'friend',
        },
        {
          id: '12',
          messege: 'I am to!',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'my',
        },
        {
          id: '13',
          messege: 'I am looking forward to hearing from you',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'my',
        },
      ],
    },
    {
      id: 'kllllllf',
      name: 'Mark',
      avatar:
        'https://i.pinimg.com/564x/b0/53/0e/b0530e4c59ec35885038be6915185501.jpg',
      messeges: [
        {
          id: '21',
          messege: 'Hello , how are you today?',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'my',
        },
        {
          id: '22',
          messege:
            'I was relly glad to see you the last time! I am excited!How are you?',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'friend',
        },
        {
          id: '23',
          messege: 'I am to!',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'my',
        },
        {
          id: '24',
          messege: 'I am looking forward to hearing from you',
          time: '24 Feb, 2022',
          hours: '01:01 PM',
          proprety: 'my',
        },
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
  [actions.setUser.type]: (state, action) => ({
    ...state,
    user: { ...action.payload.user },
  }),
});

export default contactReducer;
