import { createSlice,PayloadAction } from "@reduxjs/toolkit"

// let Id=0;

interface CommentType {
    writeId: number | null;
    who: string | null;
    text: string | null;
}

const initialState: Array<CommentType> = []

const commentslice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        createComment(state, action: PayloadAction<{ writeid: number,who:string,text:string}>){
            const {writeid,who,text} = action.payload
            state.push({writeId:writeid,who,text})
        }
    }
})

export default commentslice;