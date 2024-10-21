import { useEffect, useState } from "react";

const Bottles = () => {
    const [BottleArray,setBottleArray]=useState([])
    useEffect(()=>{
        fetch('../../../../public/BottleApi.json')
            .then(res=>res.json())
            .then(data=>setBottleArray(data))
    },[])
    console.log(BottleArray)
    return (
        <div>
            
        </div>
    );
};

export default Bottles;