import axios from "axios";
import {useEffect, useState} from "react";

const BASE_URL = "http://localhost:3000";

function Food(){
  const [food, setFood] = useState([])


  useEffect( () => {
    fetchFood();
  }, []);

  const fetchFood = async () => {
    console.log('looking for food');
    try {
      const res = await axios.get(`${BASE_URL}/foods`)
      console.log(res.data);
      setFood( res.data )
      
    } catch(err){
      console.log(err);
    }
    
  }


  return(
    <div>
      <h2>food list</h2>
      <ul>
      {
        food.map(item => {
          return( 
            <li key={item.id} className="food-item">
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