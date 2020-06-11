import GeneralReducer from './generalReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
    general: GeneralReducer
})