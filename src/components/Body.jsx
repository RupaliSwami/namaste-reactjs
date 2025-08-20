import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router";

const Body = () => {

  const [listOfRestaurants, setListOfResturants] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);

  useEffect(() => {
     fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log(json?.data)
    setListOfResturants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if(listOfRestaurants.length == 0){
    return(
      <Shimmer></Shimmer>
    )
  }

    return (
        <div className='body'>
            <div className='filter'>
              <div className="search-box">
                <input type="text" placeholder="Search" name={searchText} onChange={(e) => {
                  setSearchText(e.target.value);
                }} />
                <button onClick={() => {
                  const filterRestaurants = listOfRestaurants.filter((res) => {
                    return(
                      res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                  })
                  setFilteredResturants(filterRestaurants);
                }}>Search</button>
              </div>
              <div className="filter-box">
                <button onClick={() => {
                  const filteredList = listOfRestaurants.filter((res) => {
                    return(
                     res.info.avgRating > 4
                    )
                })
                setFilteredResturants(filteredList);
                }}>Top 10 Resturants</button>
              </div>
            </div>
            <div className='rest-container'>
              {
                filteredResturants.map(restaurant => (
                  <Link key={restaurant?.info?.id} to={"/resturant/"+restaurant?.info?.id} className="restLink"><ResturantCard key={restaurant?.info?.id} resData={restaurant} className="restCard" /></Link>
                ))
              }
            </div>
        </div>
    )
}

export default Body;
