import axios from "axios";
import {useEffect, useState} from "react";

import {BASE_URL} from "../config/constants"

function Food(){
  const [food, setFood] = useState([])


  useEffect( () => {
    fetchFood();
  }, []);

  const fetchFood = async () => {
    const url = `${BASE_URL}/foods`
    console.log('looking for food');
    try {
      const res = await axios.get(url)
      console.log(res.data);
      setFood( res.data )
      
    } catch(err){
      console.log(err);
    }
    
  }


  return(
    <div>
      <ul>
      {
        food.map(item => {
          return( 
            <li key={item.id} className="tile food">
              {item.name}
            </li>
          )
        })
      }

      </ul>

    </div>


  )
} 

export default Food;