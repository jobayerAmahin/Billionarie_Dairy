import { useEffect, useState } from "react";
import SingleBottle from "../SingleBottle/SIngleBottle";
import './Bottle.css'
const Bottles = () => {
    const [BottleArray,setBottleArray]=useState([])
    useEffect(()=>{
        fetch('../../../../public/BottleApi.json')
            .then(res=>res.json())
            .then(data=>setBottleArray(data))
    },[])
    console.log(BottleArray)
    return (
        <div className="wholeBottleSection">
            {
                BottleArray.map(bottle=>
                    <SingleBottle bottle={bottle} key={bottle.id}></SingleBottle>
                )
            }
        </div>
    );
};

export default Bottles;