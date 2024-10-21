import './SingleBottle.css'
const SingleBottle = ({bottle}) => {
    const {img,price,ratings}=bottle
    return (
        <div className='bottleContainer'>
            <img src={img} alt="" />
            <h3>Hinta:{price}</h3>
            <h4>Rating: {ratings}</h4>
        </div>
    );
};

export default SingleBottle;