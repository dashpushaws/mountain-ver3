import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api/flag'

function* addFlag(action) {
    console.log(action);
    // action.payload.id = 1;
    yield call(api.post, action.payload)
    yield put({ type: "ADD_FLAG_SUCCEEDED", payload: action.payload });
    // try{
    //   yield call(api.post, action.payload)
    //   yield put({type:"ADD_TASK_SUCCEEDED", payload: action.payload});  
    // } catch (error) {
    //   yield put({type:"SHOW_ALERT", msg:error.message});  
    // }  
}

function* fetchFlags(action) {
    console.log(action);
    const result = yield call(api.list);
    console.log(result.data);
    yield put({ type: 'FETCH_FLAGS_SUCCEEDED', payload: result.data })
}

function* removeFlag(action) {
    yield call(api.delete, action.payload)
    yield put({ type: 'REMOVE_FLAG_SUCCEEDED', payload: action.payload })
}

function* likeSaga() {
    yield takeEvery("ADD_FLAG", addFlag)
    yield takeLatest("FETCH_FLAGS", fetchFlags);
    yield takeEvery("REMOVE_FLAG", removeFlag);
}

export default likeSaga