import {combineReducers} from "redux";
import WriteSlice from "./slices/writes"
import usersSlice from "./slices/users"
import commentsSlice from "./slices/comments"

const reducers = combineReducers({
    [WriteSlice.name]:WriteSlice.reducer,
    [usersSlice.name]:usersSlice.reducer,
    [commentsSlice.name]:commentsSlice.reducer,
})

export type ReduxState = ReturnType<typeof reducers>;

//reducer 타입을 매게변수로 받아오는거 설정

export default reducers;
