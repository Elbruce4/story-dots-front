import PropTypes from "prop-types";

const Card = ({name , description , price}) => {
    
    return (
        <div>
           <h3>{name ?? ""} </h3> 
           <h2>{description ?? ""}</h2>
           <h2>{price ?? ""}</h2>
        </div>
    )
}

Card.propTypes = {
    name : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,

}

export default Card;