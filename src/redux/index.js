import { combineReducers } from 'redux'
import { reducer as charityDonations } from './CharityReducer'


const rootReducer = combineReducers({
  charityDonations,
})

export default rootReducer
