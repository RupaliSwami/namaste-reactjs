import { CDN_LINK } from "../../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
    const { name,cloudinaryImageId, cuisines, avgRating, costForTwo } = resData?.info;

    
    return (
        <div className='rest-card'>
            <img 
            className='rest-logo'
            alt='food-image'
            src={CDN_LINK+cloudinaryImageId} />
            <h2>{name}</h2>
            <h4>{cuisines}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default ResturantCard;
