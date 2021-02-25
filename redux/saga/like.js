import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api/likes'

function* addLike(action) {
  console.log(action);
  // action.payload.id = 1;
  yield call(api.post, action.payload)
  yield put({ type: "ADD_LIKE_SUCCEEDED", payload: action.payload });
  // try{
  //   yield call(api.post, action.payload)
  //   yield put({type:"ADD_TASK_SUCCEEDED", payload: action.payload});  
  // } catch (error) {
  //   yield put({type:"SHOW_ALERT", msg:error.message});  
  // }  
}

function* fetchLikes(action) {
  console.log(action);
  const result = yield call(api.list);
  console.log(result.data);
  yield put({ type: 'FETCH_LIKES_SUCCEEDED', payload: result.data })
}

function* removeLike(action) {
  yield call(api.delete, action.payload)
  yield put({ type: 'REMOVE_LIKE_SUCCEEDED', payload: action.payload })
}

function* likeSaga() {
  yield takeEvery("ADD_LIKE", addLike)
  yield takeLatest("FETCH_LIKES", fetchLikes);
  yield takeEvery("REMOVE_LIKE", removeLike);
}

export default likeSaga