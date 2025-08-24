import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useResturantList from "../../utils/useResturantList";

const Body = () => {

  const [searchText, setSearchText] = useState([]);
  const onlineStatus = useOnlineStatus();
  const { listOfRestaurants, filteredResturants, setFilteredResturants } = useResturantList();

  if(onlineStatus === false) {
    return(
      <h1>You're Offline! Please check your internet Connection.</h1>
    )
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
