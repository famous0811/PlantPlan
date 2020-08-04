import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import { useLocation } from "react-router-dom"
import Input from "../Form/Input";
import { useSelector} from "react-redux";
import {ReduxState} from "../../stores/reducers"

function PostRead() {
    const [comment,setcomment]=useState("")

    const [ReadData,SetReadData]=useState(useSelector((state : ReduxState)=>state.WriteSlice))
    
    
    const location = useLocation()
    const list=location.pathname.split("/")
    const writeId=Number.parseInt(list[3]);
    const what=Number.parseInt(list[2]);

    //2=>what(일지인지 질문인지)  3=>id(글 아이디

    function ComentEnter(e:any) {
        if(e.key=="Enter"){
            AddComent();
        }
    }

    function AddComent(){

    }

    return (
        <>
            <Wrap>
                {
                    ReadData.map(data=>(
                        data.id===writeId ? 
                        <Reads title={data.title} contents={data.content}image={data.picture ? data.picture : ""} category={data.category ? data.category : []} comments={comment} ComentEnter={ComentEnter} Setcomment={setcomment}/>
                         : ""))
                }
            </Wrap>
        </>
    );
}
interface PostShowinterface{
    title: string;
    contents: string;
    image: string;
    category: any[];
    comments: string;
    ComentEnter: (e:any)=>void;
    Setcomment: (e:string)=>void;
}

function Reads({title,contents,image,category,comments,ComentEnter,Setcomment}:PostShowinterface){
    
    useEffect(()=>{
        const image_section: HTMLImageElement = document.getElementById("image_plan") as HTMLImageElement
        image_section.src = "../../assets/test1.png";
    },[])

    return(
        <div>
            <Title>{title}</Title>

            <div style={{display:"flex",flexDirection: "row",justifyContent:"start", alignItems: "center", width: "100%"}}>
                {category.map((data)=>{
                    return <Category key={data.key}>{data.text}</Category>
                    })}
            </div>

            <div>
                <img id="image_plan" alt="swiper1" width="100%" height="100%" style={{ objectFit: "cover", objectPosition: "50% 50%" }} src="../../assets/test1.png"/>
            </div>
            
            <Content>
                {contents}
            </Content>

            <Title style={{display:"flex",width:"100%",fontSize:"18px",height:"auto"}}>댓글</Title>
            <ComponentWrite>
                {/* <Components/>
                <Components/>
                <Components/>
                <Components/>
                <Components/>
                <Components/>
                <Components/>
                <Components/> */}
            </ComponentWrite>
            <Input style={{borderRadius:"20px"}} placeholder="댓글을 입력하세요!" onChange={e=>{
                        Setcomment(e.target.value)
                    }}
                    value={comments}
                    onKeyPress={ComentEnter}/>
        </div>
    )
}

function Components(usrId: string,comments:string){
    return(
        <ComponentsWrap>
        <img src={require("../../assets/test1.png")} alt="usericon" width="30px" height="30px" style={{ objectFit: "cover", objectPosition: "50% 50%",borderRadius:"20px",marginRight:"10px"}} />
            <div style={{display:"flex",flexDirection: "row", alignItems: "center",width: "100%"}}>
                <Component>
                    <div>유명환</div>
                    <div>이건 삽버그인뎅</div>
                </Component>
            </div>
        </ComponentsWrap>
    )
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
`;
const ComponentsWrap=styled.div`
    display: flex;
    width:100%;
    padding:2% 0%;
`
const ComponentWrite=styled.div`
    border-top: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    height:200px;
    overflow-y:auto;
    overflow-x:hidden;
    padding:2%;
    margin-bottom:3%;
`;
const Component=styled.div`
    border: 1px solid;
    border-radius:20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding:1%;
    &>div{
        width: 100%;
    }
`
const Category=styled.div`
    width:auto;
    height:30px;
    border:1px solid #AAEBAA;
    border-radius:20px;
    margin:0px 2px;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:#AAEBAA;
    color:white;
`

const Title=styled.div`
    font-size:28px;
    height:50px;
    font-weight:bold;
    margin-top:5%;
`;

const Content=styled.div`
    margin-top:20px;
    font-size:17px;
    margin:5% 0%;
`
export default PostRead;