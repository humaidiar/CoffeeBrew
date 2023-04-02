import { combineReducers } from 'redux'
import coffeeReducer from './allCoffee'
import errorState from './errorMessage'

// import stuff from './stuff'

export default combineReducers({
  coffeeReducer,
  errorState,
  // stuff
})
