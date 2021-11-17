import {combineReducers} from "redux"
import { StudentReducer } from "./student.reducer"

const reducers = combineReducers({
    student:StudentReducer
})

export default reducers
