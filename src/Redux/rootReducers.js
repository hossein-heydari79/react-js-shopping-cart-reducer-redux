import { cardlistReducer } from './cardlistReducer'
import { dataModalReducer } from './dataModalReducer'
import { filterReducer } from './filterReducer'
import { modeReducer } from './modeReducer'
import { showReducer } from './showReducer'

import { combineReducers } from 'redux'

export const reducers = combineReducers({
    cardlist: cardlistReducer,
    dataModal: dataModalReducer,
    filter: filterReducer,
    mode: modeReducer,
    show: showReducer
})