import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Input from "../Form/Input"
import {useHistory} from 'react-router-dom'
import useRead from "../../hooks/useRead";
import Read from './Read';
import { useSelector} from "react-redux";
import {ReduxState} from "../../stores/reducers"

interface PostIndex{
    expansion:boolean
}

function Index({expansion}:PostIndex) {
    const [whatpost,SetWhatPost]=useState(true);
    const [SearchResult,Setresult]=useState("");

    const [ReadData,SetReadData]=useState(useSelector((state : ReduxState)=>state.WriteSlice))
    
    const history=useHistory();
    const UseRead=useRead();

    useEffect(()=>{
        UseRead.Read(whatpost)
        Setresult("")
    },[whatpost])

    function SelectData(){
        UseRead.Find(SearchResult,whatpost)
    }

    function SelectEnter(e:any) {
        if(e.key=="Enter"){
            SelectData();   
        }
    }

    function WritePlant(){
        history.push("/writequestion")
    }

    function PostPage(){
        history.push("/post");
    }
    
    return (
        <Wrap expansion={expansion}>
            <div>
                <div>
                    <TitleWrap>
                        <Title>게시판</Title>
                        <div style={{display:"flex",flexDirection: "row", alignItems: "center", height:"30px"}}>
                            <Input type="text"style={{height:"100%",borderRadius:"0px"}} value={SearchResult} onChange={e=>{Setresult(e.target.value)}} onKeyPress={SelectEnter}/>
                            <Button style={{borderRadius:"0px",borderColor:"#cecece"}} onClick={SelectData}>검색</Button>
                        </div>

                        <div style={{display:"flex",flexDirection: "row", alignItems: "center" }}>
                            <Titleselect name="whatpost" onChange={e =>{
                                SetWhatPost(e.target.value=="plan");
                            }}>
                                <option value="plan">일지</option>
                                <option value="question">질문</option>
                            </Titleselect>
                            <Button style={{borderColor:"#999"}} onClick={WritePlant}>글쓰기</Button>
                            {
                                expansion ? "":<Button style={{borderColor:"#999",marginLeft:"2%"}} onClick={PostPage}>더보기</Button>
                            }
                        </div>
                    </TitleWrap>
                    <TitleLine>
                        {ReadData.length ? ReadData.map(data =>data.show && data.somthing==whatpost ?
                        <Read title={data.title} content={data.content} img={data.picture} categories={data.category} onClick={()=>{ history.push("/PostRead/"+(data.somthing ? 1 : 2)+"/"+data.id.toString())}}/> 
                        : "") : <div style={{display: "flex", width: '100%',alignItems: "center",justifyContent:"center"}}>
                        <div style={{fontSize:"20px"}}>결과가 없습니다.</div>
                    </div>}
                    </TitleLine>
                </div>
            </div>
        </Wrap>
    );
}
const Wrap = styled.div<PostIndex>`
  width: 100%;
  padding: ${({expansion}) => (expansion ? '0% 5%' : '0% 0%')};
  & > div {
    max-width: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px auto;
    & > *:nth-child(1) {
      margin: 55px 0px;
      height: 500px;
      width:100%;
    }
  }
`
const Title=styled.div`
    font-size:25px;
    font-weight:800;
    display:flex;
    justify-content:start;
`

const TitleWrap=styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;

    @media only screen and (max-width: 745px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
    /* margin-left: 0px !important; */
  }
`
const Titleselect=styled.select`
    width:100px;
    height:30px;
    padding: .3em .7em; /* 여백으로 높이 설정 */ 
    font-family: inherit; /* 폰트 상속 */ 
    background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg) no-repeat 95% 50%; /* 네이티브 화살표 대체 */ 
    border: 1px solid #999; 
    border-radius: 10px;
    margin-right:20px;
    -webkit-appearance: none; /* 네이티브 외형 감추기 */ -moz-appearance: none; appearance: none;
    &:focus{
        outline: none;
    }
`
const TitleLine= styled.div`
    width: 100%;
    height: 100%;
    border-top:1.5px solid black;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
`

const Button=styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    border: 1px solid;
    width:60px;
    height:30px;
    border-radius:10px;
`
export default Index;