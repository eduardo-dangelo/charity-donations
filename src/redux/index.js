import { combineReducers } from 'redux'
import { reducer as charity } from './CharityReducer'


const rootReducer = combineReducers({
  charity,
})

export default rootReducer
