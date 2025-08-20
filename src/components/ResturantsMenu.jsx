import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../../utils/constants";

const ResturantsMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState(null);

    const {resId} = useParams();
    console.log("resId", resId)

    useEffect(() => {
     fetchMenu();
    }, [])

    const fetchMenu = async() => {
       const data = await fetch(MENU_API+resId+'&catalog_qa=undefined&submitAction=ENTER');
       const json = await data.json();
       setResInfo(json?.data);
       setResMenu(json?.data);
    }

    if (resInfo == null) return <Shimmer/>;

    const {id, name,areaName, city, totalRatingsString} = resInfo?.cards[2]?.card?.card?.info;
    const {cards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

    console.log('Crads:::',cards);

    return  (
        <>
        <div key={id} className="menu-cart">
        <h1>{name}</h1>
        <h5>{areaName}, {city}</h5>
        <h4>{totalRatingsString}</h4>
        </div>
        <p>MENU</p>
        {
            cards.map(item => {
              const subItems = item?.card?.card?.itemCards || [];
                return(
                    <>
                    <div key={item?.card?.card?.id} className="restMenu-headings">
                        <h3>{item?.card?.card?.title} -  {"(" +subItems.length + ")"}</h3>
                        {subItems.map((subItem) => (
                           <p className="items" key={subItem.categaryId}>{subItem?.card?.info?.name}</p>
                        ))}
                    </div>
                    </>
                )
            })
        }
        </>
    )
}

export default ResturantsMenu;
