import * as actions from '../redux/actions';
import { createReducer } from '@reduxjs/toolkit';

const INITIALSTATE = [
  {
    name: 'Andrej',
    messages: [{ message: 'Hello', time: 'time', proprety: 'own' }],
  },
  {
    name: 'Ann',
    messages: [{ message: 'Hello', time: 'time', proprety: 'own' }],
  },
  {
    name: 'Vikki',
    messages: [{ message: 'Hello', time: 'time', proprety: 'own' }],
  },
];

const contactReducer = createReducer(INITIALSTATE, {
  [actions.sentMessage.type]: (state, action) => [...state, action.payload],
});

export default contactReducer;
