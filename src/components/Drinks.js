import axios from "axios";
import {useEffect, useState} from "react";

import {BASE_URL} from "../config/constants"

function Drinks(){
  const [drinks, setDrinks] = useState([])


  useEffect( () => {
    fetchFood();
  }, []);

  const fetchFood = async () => {
    const url = `${BASE_URL}/drinks`
    console.log('looking for drinks');
    try {
      const res = await axios.get(url)
      console.log(res.data);
      setDrinks( res.data )
      
    } catch(err){
      console.log(err);
    }
    
  }


  return(
    <div>
      <ul>
      {
        drinks.map(item => {
          return( 
            <li key={item.id} className="tile drink">
              {item.name}
            </li>
          )
        })
      }

      </ul>

    </div>


  )
} 

export default Drinks;