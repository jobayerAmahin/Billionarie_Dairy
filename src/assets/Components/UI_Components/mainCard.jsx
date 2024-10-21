import './mainCard.css'
export default function MainCard({hen}){
    ///const [name,rank]=hen
    return(
        <div className='cardBox'>
            <img className='imageSize' src={hen.squareImage} alt="" />
            <h4>Rank:{hen.rank}</h4>
            <h4>Sähköposti:</h4>
            <h4>Osoite:</h4>
        </div>
    )
}