import { fork } from 'redux-saga/effects'
import likeSaga from './like'
import flagSaga from './flag'

export default function* rootSaga(){
  yield fork(likeSaga)
  yield fork(flagSaga)
}