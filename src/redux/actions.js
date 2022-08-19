import { createAction } from '@reduxjs/toolkit';

export const sentMessage = createAction('contacts/sentmessage');
export const filterContacts = createAction('contacts/filterContacts');
export const changeAuthor =createAction('contacts/changeAuthor')

