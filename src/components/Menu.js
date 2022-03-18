import axios from "axios";
import {useEffect, useState} from "react";
import '../stylesheets/tableOrder.css'
import {BASE_URL} from "../config/constants"

function Menu(){

  const [menuItem, setMenuItem] = useState([]);
  
  useEffect( () => {
    fetchMenuItem();
  }, []);

  const fetchMenuItem = async () => {
    const url = `${BASE_URL}/menu_items`
    console.log('looking for menu items');
    try {
      const resMenuItem = await axios.get(url)
      console.log(resMenuItem.data);
      setMenuItem( resMenuItem.data )
      
    } catch(err){
      console.log("fetchDrinks: ", err);
    }
  }
  return(
    <div className="menu-items" >
      <h2>Food</h2>
      <div className='items-box'>
        <ul className='items'>
          {
            menuItem.map(item => {
              if(item.category === "food"){
                return(
                  <li key={item.id} className="tile">
                    <p>{item.name}</p>  
                    <p>${item.price}</p> 
                  </li>
                )
              }
            })
          }
        </ul>
      </div>

      <h2>Drinks</h2>
      <div className='items-box'>
        <ul className='items'>
          {
            menuItem.map(item => {
              if(item.category === "drink"){
                return(
                  <li key={item.id} className="tile" onClick={addToOrder}>
                    <p>{item.name}</p>  
                    <p>${item.price}</p> 
                     
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    </div>
  )
} 

export default Menu;