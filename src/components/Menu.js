import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import '../stylesheets/tableOrder.css'
import {BASE_URL} from "../config/constants"

function Menu(props){
  const params = useParams()
  console.log(params);
  const [menuItem, setMenuItem] = useState([]);
  
  
  useEffect( () => {
    fetchMenuItem();
    addToOrder();
  }, []);



  const fetchMenuItem = async () => {
    const url = `${BASE_URL}menu_items`
    console.log('looking for menu items');
    try {
      const resMenuItem = await axios.get(url)
      console.log(resMenuItem.data);
      setMenuItem( resMenuItem.data )
      
    } catch(err){
      console.log("fetchDrinks: ", err);
    }
  }

  

  const addToOrder = async (itemId) => {
    console.log('added to order', itemId, params.serverId, params.tableId);
    try {
      const url = `${BASE_URL}line_items`
      const res = await axios.post(url, {
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