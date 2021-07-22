import { cardlistReducer } from './cardlistReducer'
import { dataModalReducer } from './dataModalReducer'
import { filterReducer } from './filterReducer'
import { modeReducer } from './modeReducer'
import { showReducer } from './showReducer'

import { combineReducers } from 'redux'

export const reducers = combineReducers({
    cardlistReducer: cardlistReducer,
    dataModalReducer: dataModalReducer,
    filterReducer: filterReducer,
    modeReducer: modeReducer,
    showReducer: showReducer
})