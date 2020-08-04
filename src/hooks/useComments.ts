import {useCallback} from 'react'
import { useDispatch, useSelector } from "react-redux"
import commentsSlice from "../stores/slices/comments"

function useComponent(){
    const dispatch=useDispatch();

    const comments=useCallback((writeid: number,who:string,text:string)=>{
        dispatch(commentsSlice.actions.createComment({
            writeid,who,text
        }))
    },[dispatch])

    return {comments};
}

export default useComponent;