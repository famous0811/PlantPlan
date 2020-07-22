import React from 'react';
import styled from 'styled-components';

interface ReadDataProps{ 
    title: string;
    img: string;
    content: string;
    categories: any[];
}
function Read({title,content,img,categories}:ReadDataProps) {
    return (
        <Wrap>
            <div style={{display:"flex",flexDirection: "row", alignItems: "center"}}>
                <TitleImg>
                    <img src={img} alt=""/>
                </TitleImg>
                <Title>{title}</Title>
            </div>
            <Content>{content}</Content>
            <div style={{display:"flex",flexDirection: "row", alignItems: "center"}}>
                {categories.map((data)=>{
                   return <Category key={data.key}>{data.text}</Category>
                })}
            </div>
        </Wrap>
    );
}
const Wrap = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    background-color:#E6FFE6;
    padding:0px 10px;
`

const Title=styled.div`
    font-size:22px;
    font-weight:700;
    margin:0px 14px;
`
const TitleImg=styled.div`
    width:40px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    margin:0px 12px 0px 0px;
    &>img {
        width:40px;
        height:40px;
    }
`
const Content=styled.div`
    font-size:18px;
    color:#cecece;
`

const Category=styled.div`
    width:60px;
    height:30px;
    border:1px solid #AAEBAA;
    border-radius:20px;
    margin:0px 6px;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:#AAEBAA;
    color:white;
`

export default Read;