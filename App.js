import React from "react"
import ReactDOM from "react-dom/client"

const Header=()=>(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://th.bing.com/th/id/OIP.ZtOqlHINSCldrMb25MqH8wHaE8?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        </div>
        <div className="nav-container">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)
const Restaurantcard=(props)=>(
<div className="res-card">
   
   <img className="res-card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/18c780a6-b257-4c79-bfd4-1fe6d002fff9_240093.jpg"/>
   <h3>{props.resName}</h3>
   <h5>{props.cuisine}</h5>
   <h5>{props.star}</h5>
   <h5>{props.time}</h5>

   </div>
)
const Body=()=>(
    <div className="body">
     <div className="search">Search</div>
     <div className="res-container">
         <Restaurantcard resName="Pizza Hut" cuisine="Pizza,North Indian,Asia" star="4.4" time="38 min"/>
         <Restaurantcard resName="KFC" cuisine="Burger,Fast Food" star="4.3" time="21 min"/>
         <Restaurantcard resName="biriyani" cuisine="Biriyani,Fast Food" star="4.3" time="11 min"/>
         <Restaurantcard resName="chicking" cuisine="Fried Chiken,Fast Food" star="4.0" time="26 min"/>
         <Restaurantcard/>
         <Restaurantcard/>
         <Restaurantcard/>
         <Restaurantcard/>
         <Restaurantcard/>
     </div>
    </div>
)
const Applayout=()=>(
    <div className="app">
<Header/>
<Body/>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);
