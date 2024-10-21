import './SingleBottle.css'
import PropTypes from 'prop-types';
const SingleBottle = ({bottle,handleClickButton}) => {
    const {img,price,ratings}=bottle
    return (
        <div className='bottleContainer'>
            <img src={img} alt="" />
            <h3>Hinta:{price}</h3>
            <button onClick={()=>handleClickButton(bottle)}>Osta</button>
            <h4>Rating: {ratings}</h4>
        </div>
    );
};

SingleBottle.propTypes={
    bottle: PropTypes.object.isRequired,
    handleClickButton: PropTypes.func.isRequired
}

export default SingleBottle;