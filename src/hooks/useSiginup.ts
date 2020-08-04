import {useCallback} from 'react'
import { useDispatch, useSelector } from "react-redux"
import userSlice from "../stores/slices/users"

function useComponent(){
    const dispatch=useDispatch();

    const siginUp=useCallback((id:string,password:string,nickname:string,email:string)=>{
        dispatch(
            userSlice.actions.siginUp({
                id,password,nickname,email})
        )
    },[dispatch])

    return {
        siginUp
    }
}

export default useComponent;