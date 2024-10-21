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

    const [ValitsiLattikko,settiValitsiLattikko]=useState([])
    
    const handleClickButton=(kuva)=>{
        const uusiPala=[...ValitsiLattikko+kuva]
        settiValitsiLattikko(uusiPala)
    }
    console.log(ValitsiLattikko)
    return (
        <>
            <div>
                {

                }
            </div>
            <div className="wholeBottleSection">
                {
                    BottleArray.map(bottle=>
                        <SingleBottle handleClickButton={handleClickButton} bottle={bottle} key={bottle.id}></SingleBottle>
                    )
                }
            </div>
        </>
    );
};

export default Bottles;