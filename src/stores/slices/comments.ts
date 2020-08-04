import { createSlice,PayloadAction } from "@reduxjs/toolkit"

// let Id=0;

interface CommentType {
    writeId: number;
    who: string;
    text: string;
}

const initialState: Array<CommentType> = [];

const commentslice = createSlice({
    name: "commentSlice",
    initialState,
    reducers: {
        createComment(state, action: PayloadAction<{writeid:number,who:string,text:string}>){
            const {writeid,who,text} = action.payload      
            state.push({writeId:writeid,who:who,text:text})
            
        }
    }
})

export default commentslice;