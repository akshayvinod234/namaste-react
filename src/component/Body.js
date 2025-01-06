import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.86530&lng=75.35200&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN"
      );
      const json = await data.json();
      
      setListOfRestaurants(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      setIsLoading(false);
    }
  };

  const filterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.4
    );
    setListOfRestaurants(filteredList);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.length > 0 ? (
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            />
          ))
        ) : (
          <p>No restaurants available.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
