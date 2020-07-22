import React,{useState} from 'react';
import Read from '../Read';
import mainicon from '../../../assets/mainicon.png'

interface ReadProps{
    search: string
}
function PlanRead({search}:ReadProps) {
    const [categories,setCategories]=useState([{id:1,text:"#test"}]);
    const [result,SetResult]=useState(true);
    // setCategories(categories.concat({id:2,text:"test"}))
    console.log(search);
    if(result){
        return (
            <>
                <Read title="test" content="testfdsaf" img={mainicon} categories={categories}></Read>
            </>
        );
    }
    else{
        return (
            <div style={{display: "flex", width: '100%',alignItems: "center",justifyContent:"center"}}>
                <div style={{fontSize:"20px"}}>결과가 없습니다.</div>
            </div>
        );
    }
}

export default PlanRead;