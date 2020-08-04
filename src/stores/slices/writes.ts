import { createAsyncThunk, createSlice,PayloadAction} from "@reduxjs/toolkit"

interface WritenType {
    id:number;
    show: boolean;
    title: string;
    content: string;
    category: any[] | null;
    somthing: boolean;
    picture: string | null;
}

let Id=0;
// something true=> plant일지 false => 질문
const initialState:Array<WritenType> =[];

export type Write= WritenType;

const WriteSlice=createSlice({
    name: "WriteSlice",
    initialState,
    reducers:{
        createWriten(state,action:PayloadAction<{title:string;show:boolean;content:string;category:any[] | null;somthing:boolean;picture: string | null}>) {
            const {title,show,content,category,somthing,picture} = action.payload
            state.push({id:Id++,show:show,title:title,content:content,category:category,somthing:somthing,picture:picture})
        },
        deleteWriten(state,action:PayloadAction<any>){
            const index = state.indexOf(action.payload);
            if (index > -1) {
                state.splice(index, 1);
            }
        },
        findWriten(state,action:PayloadAction<{select:string,somthing: boolean}>){
            const {select,somthing} = action.payload;
            state.map(index => {
                index.title.includes(select) && index.somthing==somthing  ? index.show=true : index.show=false;
            }) 
        },
        allshowWriten(state,action:PayloadAction<boolean>){
            state.map(index => {
                index.somthing==action.payload ? index.show=true : index.show=false;
            }); 
        }
        // ReviseWriten(state,action){
            
        // }
    }
})

export default WriteSlice;