import resList from "../utils/mockData";
import Restaurantcard from "./Restaurantcard";
const Body=()=>(
    <div className="body">
     <div className="search">Search</div>
     <div className="res-container">
    { resList.map((restaurant)=>(<Restaurantcard key={restaurant.info.id} resData={restaurant}/>))}
     </div>
    </div>
)
export default Body;