import React,{useState} from 'react';
import styled from 'styled-components';
import Input from "../Form/Input"
import {useHistory} from 'react-router-dom'
import Question from "./question/QuestionRead";
import Plan from "./Plan/PlanRead";


function Index() {
    const [whatpost,SetWhatPost]=useState("plan");
    const [SearchResult,Setresult]=useState("test");
    const history=useHistory();

    function SelectData(){

    }
    function SelectEnter(e:any) {
        if(e.key=="Enter"){
            SelectData();   
        }
    }

    function WritePlant(){
        history.push("/writequestion")
    }
    return (
        <Wrap>
            <div>
                <div>
                    <TitleWrap>
                        <Title>게시판</Title>
                        <div style={{display:"flex",flexDirection: "row", alignItems: "center", height:"30px"}}>
                            <Input type="text"style={{height:"100%",borderRadius:"0px"}} onChange={e=>{Setresult(e.target.value)}} onKeyPress={SelectEnter}/>
                            <Button style={{borderRadius:"0px",borderColor:"#cecece"}} onClick={SelectData}>검색</Button>
                        </div>
                        <div style={{display:"flex",flexDirection: "row", alignItems: "center" }}>
                            <Titleselect name="whatpost" onChange={e =>{
                                SetWhatPost(e.target.value);
                            }}>
                                <option value="plan">일지</option>
                                <option value="question">질문</option>
                            </Titleselect>
                            <Button style={{borderColor:"#999"}} onClick={WritePlant}>글쓰기</Button>
                        </div>
                    </TitleWrap>
                    <TitleLine>
                        {whatpost=="plan" ? <Plan search={SearchResult}/> : <Question search={SearchResult}/>}
                    </TitleLine>
                </div>
            </div>
        </Wrap>
    );
}
const Wrap = styled.div`
  width: 100%;
  padding: 0% 5%;
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