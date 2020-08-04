import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Input from "../../Form/Input"
import {useHistory} from "react-router-dom";
import Categori from "../categori";
import useWrite from "../../../hooks/useWrite";

let len=1;

export interface categoryType{
    id:number;
    text:string;
}

function QuestionWrite() {
    const history =useHistory();
    const Writed = useWrite()

    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [mainimg,SetMainImg]=useState("");
    const [visible,SetVisible]=useState(false);//공유창 나오게 하기
    const [categories,setCategories]=useState<categoryType[]>();
    
    function myImage() {
        const image: HTMLInputElement = document.getElementById("bin") as HTMLInputElement
        //input tag
        const image_section: HTMLImageElement = document.getElementById("image_plan") as HTMLImageElement
        //img tag
        if (image.files![0]) {
          const reader = new FileReader()
          reader.onload = function(e?: any) {
            image_section.src = e.target.result
            SetMainImg(e.target.result);
          }
          reader.readAsDataURL(image.files![0])
        }
      }
    
      //공유버튼
    function save() {
        Writed.Write({show:true,title,content,category:categories ? categories : null,somthing:false,picture:mainimg})
        history.push("/")
    }

    function CategoriEnter(e:any) {
        if(e.key=="Enter" && e.target.value){
            if(e.target.value[0]!="#")
                e.target.value="#"+e.target.value

            setCategories(categories ? categories.concat({id:len++,text:e.target.value}) : [{id:len++,text:e.target.value}])
            e.target.value=""
        }
    }

    return (
        <>
            <Wrap>
                <div>
                    <Title>질문있어요!</Title>
                    <label style={{width: "100%",textAlign: "end"}}>
                        <text style={{cursor:"pointer"}}>사진첨부</text>
                        <input
                            type="file"//파일 가져오기
                            id="bin"
                            accept="image/gif,image/jpeg,image/png"//파일 형식 지정
                            onChange={e => {
                                myImage()
                            }}
                            style={{ display: "none" }}/>
                    </label>
                    <Input type="text" placeholder="제목(4~20)" value={title} onChange={e=>{setTitle(e.target.value)}}></Input>
                    <EditorTag>
                        <Input type="text" placeholder="카테고리 추가" onKeyPress={CategoriEnter}></Input>
                        <Categori category={categories ? categories : null}/>
                    </EditorTag>
                    
                    <MainContent>
                        <TitleImg mainimg={mainimg!=""} alt="식물상태" style={{ borderRadius: "20px", objectFit: "cover"}} id="image_plan" />
                        <Contents placeholder="내용"></Contents>
                    </MainContent>
                </div>
                <Button style={{marginBottom:"10%"}} onClick={save}>질문하기!</Button>
            </Wrap>
        </>
    );
}

const Wrap = styled.div`
    padding: 0px 10%;
    margin: 0px 15%;
    & > div {
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0% auto;
    flex-direction: column;
  }
`
const Title = styled.div`
    font-size:28px;
    font-weight:700;
    margin: 5% 0px;
    text-align:start;
    width:100%;
`
interface image{
    mainimg:boolean;
}
const TitleImg= styled.img<image>`
    display: ${({mainimg}) => (mainimg ? 'block' : 'none')};
    margin:3% 0%;

`
const MainContent=styled.div`
    margin: 3% 0px;
    width: 100%;
    border-top:1px solid #cecece;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`
const Contents=styled.textarea`
    width: 100%;
    height: 300px;
    font-size:17px;
    border:none;
    resize: none;
    &:focus {
    outline: 0;
    }
`;
const EditorTag=styled.div`
    margin:2% 0% 0%;
    width:100%;
    display:flex;
    flex-direction: column;
`

const Button=styled.div`
    border-radius:20px;
    background-color:#66EC66;
    color:white;
    width:100%;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
`

export default QuestionWrite;