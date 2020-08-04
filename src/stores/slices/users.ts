import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface userSlice {
    id: string;
    password: string;
    email: string;
    nickname: string;
    nowlogin: boolean;
}

const initialState: Array<userSlice> = [];

const userSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        siginUp(state, action:PayloadAction<{id:string;password:string;nickname:string;email:string;}>) {
            const {id,password,nickname,email} =action.payload
            state.push({id:id,password:password,nickname:nickname,email:email,nowlogin:false});
        },
        siginInOut(state, action:PayloadAction<{id:string;password:string;}>){
            state.find(data=>data.id == action.payload.id && data.password == action.payload.password ? data.nowlogin=!data.nowlogin : "")
        },
    }
})

export default userSlice;