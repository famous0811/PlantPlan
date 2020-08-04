import React, { useState } from 'react';
import styled from "styled-components"
import Input from "../Form/Input"

function Index() {
    const [id,setId]=useState("");
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [psw,setPsw]=useState("");
    const [psw2,setPsw2]=useState("");
    function SignUp(){
        //input tag
        const image: HTMLInputElement = document.getElementById("bin") as HTMLInputElement
    }
    function myImage() {
        const image: HTMLInputElement = document.getElementById("bin") as HTMLInputElement
        //input tag
        const image_section: HTMLImageElement = document.getElementById("image_section") as HTMLImageElement
        //img tag
        if (image.files![0]) {
          const reader = new FileReader()
          reader.onload = function(e?: any) {
            image_section.src = e.target.result
          }
          reader.readAsDataURL(image.files![0])
        }
      }
    function signUpEnter(e:any) {
        if(e.key=="Enter"){
            SignUp();   
        }

    }
    return (
        <>
            <Wrap>
                <div style={{display:"flex",flexDirection: "column", alignItems: "flex-start" }}>
                    <Title>회원가입</Title>
                    <Input 
                    type="text"
                    placeholder="아이디"
                    style={{margin: "7px 0px"}}
                    value={id}
                    onChange={e=>{
                        setId(e.target.value)
                    }}
                    onKeyPress={signUpEnter}
                    ></Input>
                    <Input 
                    type="text"
                    placeholder="이메일"
                    style={{margin: "7px 0px"}}
                    value={email}
                    onChange={e=>{
                        setEmail(e.target.value)
                    }}
                    onKeyPress={signUpEnter}
                    />
                    <Input 
                    type="text"
                    placeholder="닉네임"
                    style={{margin: "7px 0px"}}
                    value={username}
                    onChange={e=>{
                        setUsername(e.target.value)
                    }}
                    onKeyPress={signUpEnter}
                    ></Input>
                    <div style={{ width: "100%", display: "flex", boxSizing: "border-box" }}>
                        <Input 
                        type="password"
                        placeholder="비밀번호(6~15)"
                        style={{margin: "7px 4px 7px 0px"}}
                        value={psw}
                        onChange={e =>{
                            setPsw(e.target.value)
                        }}
                        onKeyPress={signUpEnter}
                        ></Input>
                        <Input 
                        type="password"
                        placeholder="비밀번호 확인"
                        style={{margin: "7px 0px 7px 4px"}}
                        value={psw2}
                        onChange={e =>{
                            setPsw2(e.target.value)
                        }}
                        onKeyPress={signUpEnter}
                        ></Input>
                    </div>
                    <label style={{ display: "flex", flexDirection: "column", width: "200px", margin: "15px 0px 0px 0px" }}>
                        <img alt="프로필" style={{ borderRadius: "20px", objectFit: "cover", cursor: "pointer" }} width="100px" height="100px" id="image_section" />
                        <input
                            type="file"//파일 가져오기
                            id="bin"
                            accept="image/gif,image/jpeg,image/png"//파일 형식 지정
                            onChange={e => {
                                myImage()
                            }}
                            onKeyPress={signUpEnter}
                            style={{ display: "none" }}/>
                    </label>
                    <Button onClick={SignUp}>회원가입</Button>
                </div>
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
    margin-top:1em;
    margin-bottom:2em;
    font-weight:bold;
`;

const Button = styled.div`
    border-radius:20px;
    width: 100%;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#66EC66;
    font-size:20px;
    font-style:bold;
    color:#ffffff;
`
export default Index;