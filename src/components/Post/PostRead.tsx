import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import { useLocation } from "react-router-dom"
import Input from "../Form/Input";
import { useSelector} from "react-redux";
import {ReduxState} from "../../stores/reducers"
import useComponent from "../../hooks/useComments"


function PostRead() {
    const [comment,setcomment]=useState("")

    const ReadData=useSelector((state : ReduxState)=>state.WriteSlice)
    const Users=useState(useSelector((state : ReduxState)=>state.UserSlice))
    const Comments=useState(useSelector((state : ReduxState)=>state.commentSlice))
    // const UserId=Users.map(data =>{data.UserId});
    // console.log(Users);
    
    const UseComponent=useComponent()

    const location = useLocation()
    const list=location.pathname.split("/")
    const writeId=Number.parseInt(list[3]);
    const what=Number.parseInt(list[2]);

    //2=>what(일지인지 질문인지)  3=>id(글 아이디

    function ComentEnter(e:any) {
        if(e.key=="Enter"){
            AddComent();
            setcomment("")
        }
    }
    function AddComent(){
        UseComponent.comments(writeId,"allblack",comment)
    }
    console.log(Comments);
    return (
        <>
            <Wrap>
                {
                    ReadData.map(data=>(
                        data.id===writeId ? 
                        <Reads title={data.title} contents={data.content}image={data.picture ? data.picture : ""} category={data.category ? data.category : []} comment={comment} ComentEnter={ComentEnter} Setcomment={setcomment} comments={Comments}/>
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
    comment: string;
    comments: any[];
    ComentEnter: (e:any)=>void;
    Setcomment: (e:string)=>void;
}

function Reads({title,contents,image,category,comment,ComentEnter,Setcomment,comments}:PostShowinterface){
    
    useEffect(()=>{
        // console.log(image);
        const image_section: HTMLImageElement = document.getElementById("image_plan") as HTMLImageElement
        image_section.src = image;
    },[])
    // console.log(comments);
    return(
        <div>
            <Title>{title}</Title>

            <div style={{display:"flex",flexDirection: "row",justifyContent:"start", alignItems: "center", width: "100%"}}>
                {category.map((data)=>{
                    return <Category key={data.key}>{data.text}</Category>
                    })}
            </div>

            <div>
                <img id="image_plan" alt="swiper1" width="100%" height="100%" style={{ objectFit: "cover", objectPosition: "50% 50%" }}/>
            </div>
            
            <Content>
                {contents}
            </Content>

            <Title style={{display:"flex",width:"100%",fontSize:"18px",height:"auto"}}>댓글</Title>
            <ComponentWrite>
                {comments.map((data)=>{
                    // console.log(data);
                    
                //    <Components key={data.writeId} userId={data.who} comments={data.text}></Components>
                })}
            </ComponentWrite>
            <Input style={{borderRadius:"20px"}} placeholder="댓글을 입력하세요!" onChange={e=>{
                        Setcomment(e.target.value)
                    }}
                    value={comment}
                    onKeyPress={ComentEnter}/>
        </div>
    )
}

function Components(usrId:string,comments:string) {
    return(
        <ComponentsWrap>
        <img src={require("../../assets/test1.png")} alt="usericon" width="30px" height="30px" style={{ objectFit: "cover", objectPosition: "50% 50%",borderRadius:"20px",marginRight:"10px"}} />
            <div style={{display:"flex",flexDirection: "row", alignItems: "center",width: "100%"}}>
                <Component>
                    <div>{usrId}</div>
                    <div>{comments}</div>
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
    margin:0px 10px;
    padding:10px;
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