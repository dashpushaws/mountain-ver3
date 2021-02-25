import { combineReducers } from 'redux'
import likes from './reducer-like'
import flag from './reducer-flag'

const rootReducer = combineReducers({
  likes, flag
})
export default rootReducer;