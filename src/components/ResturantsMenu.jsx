import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../../utils/useResturantMenu";

const ResturantsMenu = () => {
    const {resId } = useParams();
    const resInfo = useResturantMenu(resId);
    if (resInfo == null) return <Shimmer/>;

    const {id, name,areaName, city, totalRatingsString, cuisines} = resInfo?.cards[2]?.card?.card?.info;

    return  (
        <>
        <div key={id} className="menu-cart">
        <h1>{name}</h1>
        <h5>{areaName}, {city}</h5>
        <h4>{totalRatingsString}</h4>
        </div>
        {
            cuisines.map((item,index) => {
                return(
                    <div key={index} className="menuItems">
                        <p>{item}</p>
                    </div>
                )
            })
        }
        </>
    )
}

export default ResturantsMenu;
