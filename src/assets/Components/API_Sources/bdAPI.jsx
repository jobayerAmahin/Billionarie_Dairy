import { useEffect, useState } from "react"
import MainCard from "../UI_Components/mainCard"
import './bdAPI.css'
export default function GettingAPIData(){
    const [initVal,initFun]=useState([])
    useEffect(()=>{
        fetch('https://forbes400.onrender.com/api/forbes400/')
            .then(res=>res.json())
            .then(data=>initFun(data))
    },[])
    console.log(initVal)
    return(
        <div className="cardDiv">
            {
                initVal.map(ihmiset=>
                    <MainCard hen={ihmiset}></MainCard>
                )
            }
            
        </div>
        // <div>
        //     <h1> Hello Datas </h1>
        // </div>
    )
}