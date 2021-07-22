import { reducers } from './rootReducers'
import { createStore } from 'redux'

export const store = createStore(reducers)