import resList from "../utils/mockData";
import Restaurantcard from "./Restaurantcard";
import {useState} from "react";
import {useEffect} from "react";
const Body=()=>{
    const [listOfRestaurant,setlistOfRestaurant]=useState(resList);
    useEffect(()=>{console.log("use Effect")},[]);



    return(
    <div className="body">
     <div className="filter">
        <button 
        className="filter-btn" onClick={()=>{
            const filteredList=listOfRestaurant.filter((resData)=>resData.info.avgRating>4.4);
            setlistOfRestaurant(filteredList);}
            
            }>Top rated restaurant
            
            </button>
     </div>
     <div className="res-container">
    { listOfRestaurant.map((restaurant)=>(<Restaurantcard key={restaurant.info.id} resData={restaurant}/>))}
     </div>
    </div>
);
};
export default Body;