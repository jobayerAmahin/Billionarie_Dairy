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
    
    const handleClickButton=(bottle)=>{
        const uusiPala=[...ValitsiLattikko,bottle]
        settiValitsiLattikko(uusiPala)
    }
    console.log(ValitsiLattikko)

    return (
        <>
            <div>
                <div className="visitedSection">
                    {
                        ValitsiLattikko.map((b,idx)=>
                            <div key={idx} className="visitedContainer">
                                <h3>Hinta:{' '+b.price} euro</h3>
                                <img src={b.img} alt="" />
                            </div>
                        )
                    }
                </div>
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