import {useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux";
import writeSlice from "../stores/slices/writes";

function useRead() {
    const dispatch=useDispatch();

    const Read=useCallback((somthing:boolean) =>{
        dispatch(
            writeSlice.actions.allshowWriten(somthing)
        );
    },[dispatch]);

    const Find=useCallback((findtext:string,somthing:boolean)=>{
        dispatch(
            writeSlice.actions.findWriten({
                select:findtext,
                somthing:somthing,   
            })
        );
    },[dispatch])

    return{
        Read,
        Find,
    };
}

export default useRead;