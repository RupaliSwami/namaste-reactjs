import { useState, useEffect } from "react";

const useResturantList = () => {
    const [listOfRestaurants, setListOfResturants] = useState([]);
    const [filteredResturants, setFilteredResturants] = useState([]);

    useEffect(() => {
      fetchData();
    }, [])

    const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    setListOfResturants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return {listOfRestaurants, filteredResturants, setFilteredResturants}
}

export default useResturantList;
