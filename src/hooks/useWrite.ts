import {useCallback} from 'react'

import {useDispatch} from "react-redux";
import writeSlice from "../stores/slices/writes"

interface WritenType{
    show: boolean;
    title: string;
    content: string;
    category: any[] | null;
    somthing: boolean;
    picture: string | null;
}

function useWrite(){
    const dispatch = useDispatch();
    
    const Write=useCallback((statc:WritenType)=>{
        dispatch(
            writeSlice.actions.createWriten(statc)
        )
    },[dispatch]);

    const delect=useCallback((test:any)=>{
        dispatch(writeSlice.actions.deleteWriten(test))
    },[dispatch])
    return {
        Write,
        delect
    }

}

export default useWrite;