import React,{useState} from 'react';
import styled from 'styled-components';

interface ReadDataProps{ 
    // title: string;
    // img: string;
    // content: string;
    category: any[] | null;
}

function Categori({category}:ReadDataProps) {
    const [id,setid]=useState(0);

    function test(e:any){
        console.log(id  // this would be .info div
            // .querySelector('.categoris div')  // the link with the name
            );
    }
    return (
        <div style={{display:"flex",flexDirection: "row", alignItems: "center",overflow:"hidden"}} className="categoris">
                {category ? category.map((data)=>{
                    // setid(data.id)
                   return <Category key={data.key}>{data.text}<DeleteButton onClick={test}/>
                   </Category>
                }) : ""}
        </div>
    );
}

const Category=styled.div`
    width:auto;
    height:30px;
    border:1px solid #AAEBAA;
    border-radius:20px;
    margin:0px 6px;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:#AAEBAA;
    color:white;
    &:hover {
        &> div {
            display:block;
        }
    }
`
const DeleteButton=styled.div`
    display:none;
    cursor:pointer;
    width:20px;
    height:20px;
    background-color:black;
`
export default Categori;