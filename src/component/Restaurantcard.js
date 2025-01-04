
import CDN_URL from "../utils/constants"
console.log(CDN_URL);
const Restaurantcard=({resData})=>{
    return(
<div className="res-card">
   <img className="res-card-img" src={CDN_URL+resData.info.cloudinaryImageId}/>
   <h3>{resData.info.name}</h3>
   <h5>{resData.info.cuisines.join(",")}</h5>
   <h5>{resData.info.costForTwo}</h5>
   <h5>{resData.info.avgRating}star</h5>
   <h5>{resData.info.sla.deliveryTime}minutes</h5>
     
   </div>
    );
};
export default Restaurantcard;