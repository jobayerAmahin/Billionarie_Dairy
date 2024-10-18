import './mainCard.css'
export default function MainCard(henkilö){
    return(
        <div className='cardBox'>
            <h1>Nimi on:{henkilö.personName}</h1>
            <h4>Ikävia:</h4>
            <h4>Sähköposti:</h4>
            <h4>Osoite:</h4>
        </div>
    )
}