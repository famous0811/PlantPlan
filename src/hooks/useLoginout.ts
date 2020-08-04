import {useCallback} from 'react'
import { useDispatch, useSelector } from "react-redux"
import userSlice from "../stores/slices/users"

function useComponent(){
    const dispatch=useDispatch();

    const login=useCallback((id:string,password:string)=>{
        dispatch(userSlice.actions.siginInOut({
            id,password
        }))
    },[dispatch])
    const logout=useCallback((id:string,password:string)=>{
        dispatch(userSlice.actions.siginInOut({
            id,password
        }))
    },[dispatch])

    return{
        login,logout
    }
}

export default useComponent;