import React from 'react';
import {Route,useHistory} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from "react-toastify"
import Header from './components/Header'
import { Home, SignUp, Post, PlanWrite,QuestionWrite, PostRead} from "./pages"
import { Helmet } from "react-helmet";
import 'swiper/css/swiper.css';

const GlobalStyle=createGlobalStyle`

html,body {
  margin: 0;
  
}
a{
  text-decoration: none
}
*{
  box-sizing: border-box
}
`;

function App() {
  return (
    <>
      <ToastContainer closeOnClick={false} position="top-right"/>
      <Header/>
      <GlobalStyle/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/post" component={Post}/>
      <Route exact path="/writeplan" component={PlanWrite}/>
      <Route exact path="/writequestion" component={QuestionWrite}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/PostRead/:what/:id" component={PostRead}/>
    </>
  );
  /*글의 아이디와 질문인가 개시글공유인가 를 보내서 스토어에서 가져온다.*/
}

export default App;
