import React,{useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import Modal from './Form/Modal';
import Input from "./Form/Input"

const Header= () => {
    const [visible,SetVisible]=useState(false);
    const history=useHistory();

    function Plantplan(){
        history.push("/")
    }

    function Post(){
        history.push("/post")
    }

    function WritePlant(){
        history.push("/writeplan")
    }

    function SignUp(){
        history.push("/signup")
    }
    // console.log(typeof );
    return (
        <>
        <Wrap>
            <div>
                <HeaderLeft>
                    <Title onClick={Plantplan}>Plantplan</Title>
                    <Menu>
                        <li onClick={WritePlant}>일지작성</li>
                        <li onClick={Post}>게시판</li>{/* 일지, 질문 선택하기 */}
                    </Menu>
                </HeaderLeft>
                <HeaderRight>
                    <Button onClick={()=>SetVisible(!visible)}>로그인</Button>
                    <Button onClick={SignUp}>회원가입</Button>
                    {/* <Button>로그아웃</Button> */}
                </HeaderRight>
            </div>
        </Wrap>
        <Modal visible={visible} SetVisible={()=>SetVisible(!visible)}>
            <Title>로그인</Title>
            <TitleLine>
                <Input style={{margin:"20px 0px 0px"}} type="text" placeholder="아이디"/>
                <Input style={{margin:"8px 0px"}} type="password" placeholder="비밀번호"/>
                <Button onClick={()=>SetVisible(!visible)} style={{backgroundColor:"#66EC66", color:"white",width:"100%",margin:"20px 0px 0px"}}>로그인</Button>
            </TitleLine>
        </Modal>
        </>
    );
}


const Wrap=styled.div`
    width:100%;
    height:60px;
    padding: 0% 5%;
    z-index:1;
    background-color:#66EC66;
    position:sticky;
    top:0px;
    @media only screen and (max-width:400px){
        padding: 0% 2%;
    }
    &>div{
        display:flex;
        justify-content:space-between;
        align-items: center;
        height:100%;
    }
`

const HeaderLeft=styled.div`
    display:flex;
    align-items:center;
    color:white;
`;
const HeaderRight=styled.div`
    display:flex;
    align-items:center;
    color:white;
`;

const Title=styled.div`
    font-size:28px;
    font-weight:bold;
`

const Menu=styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    &>li {
        font-size:15px;
        margin:0px 4px;
        text-align:center;
        width:80px;
    }
`;

const Button=styled.div`
    color:#64CD3C;
    background-color:#ffffff;
    display:flex;
    align-items:center;
    justify-content: center;
    height:30px;
    width:60px;
    font-size:13px;
    font-weight:bold;
    border-radius:20px;
    margin:0 5px;
`;
const TitleLine= styled.div`
    width: 100%;
    height: 100%;
    border-top:1.5px solid black;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
`
export default Header;