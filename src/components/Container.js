import { useState } from "react";
import FoodBoard from "./FoodBoard";

const dummy_data=[
   {
     name:'Burger King',
     img:"",
     foodItems:["Burger, French Fries"],
     rating:4
   },
   {
      name:'KFC',
      img:"",
      foodItems:["Chicken Burger", "Chicken Nuggets"],
      rating:3
   },
   {
      name:'McDonald',
      img:"",
      foodItems:["Mcveggie, Chicken Wrap, French Fries"],
      rating:4.5
   }
   ];

const Container=()=>{
   const[searchInput, setSearchInput]= useState();

   const seachHandler=(e)=>{
        console.log(e.target.value);
   }
   return(
     <div className="container">
        <div className="searchbox">
            <input  type="text" placeholder="Enter your query" value={searchInput} onChange={seachHandler}/>
            <button onClick={seachHandler}> Search</button>
        </div>      

      {
         dummy_data.map((restaurant)=>{
             return   <FoodBoard  restaurant={restaurant}/>
         })
        }
          
       
     </div>
   )
}
export default Container;