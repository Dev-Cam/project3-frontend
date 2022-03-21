import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import '../stylesheets/tableOrder.css'
import {menu, line_items} from "../config/constants"

function Menu(props){
  const params = useParams()
  // console.log(params);
  const [menuItem, setMenuItem] = useState([]);
  
  
  useEffect( () => {
    fetchMenuItem();
    addToOrder();
  }, []);



  const fetchMenuItem = async () => {
    try {
      const resMenuItem = await axios.get(menu)
      // console.log("menu items from backend", resMenuItem.data);
      setMenuItem( resMenuItem.data )
      
    } catch(err){
      console.log("fetchDrinks: ", err);
    }
  }

  

  const addToOrder = async (itemId) => {
    // console.log("add to order function clicked");
    console.log('added to order item id:', itemId, "Server name:", params.serverId, "Table number:", params.tableId);
    try {
      const res = await axios.post(line_items, {
        server_id: params.serverId,
        table_id: params.tableId,
        item_id: itemId
      })
      console.log(res.data);
      props.setOrder(res.data);
      
      
    } catch(err){
      console.log(" ", err);
    }
  }
  return(
    // refactor this to maping over the categories like in code test
    <div className="menu-items" >
      <h2>Food</h2>
      <div className='items-box'>
        <ul className='items'>
          {
            menuItem.map(item => {
              if(item.category === "food"){
                return(
                  <li key={item.id} className="tile" onClick={() => addToOrder(item.id) }>
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
                  <li key={item.id} className="tile" onClick={() => addToOrder(item.id)}>
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