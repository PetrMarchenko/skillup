import axios from 'axios';
import { call } from 'redux-saga/effects';

export default function* request(requestOptions = {}) {
  requestOptions.headers = {
    'Content-Type'               : 'application/json',
    'Access-Control-Allow-Origin': '*',
    ...requestOptions.headers
  };

  try {
    return yield call(axios, requestOptions);
  } catch (error) {
    throw error;
  }
}