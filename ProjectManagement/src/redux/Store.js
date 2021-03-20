import MyReducer from './reducer/root-reducer'
import { createStore } from 'redux'

const store = createStore(MyReducer)

export default store