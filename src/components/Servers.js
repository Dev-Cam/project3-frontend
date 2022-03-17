import axios from "axios";
import {useEffect, useState} from "react";

import {BASE_URL} from "../config/constants"

function Servers(){
  const [server, setServer] = useState([])


  useEffect( () => {
    fetchServer();
  }, []);

  const fetchServer = async () => {
    const url = `${BASE_URL}/servers`
    console.log('looking for server');
    try {
      const res = await axios.get(url)
      console.log(res.data);
      setServer( res.data )
      
    } catch(err){
      console.log(err);
    }
    
  }


  return(
    <div>
      <ul>
      {
        server.map(item => {
          return( 
            <li key={item.id} className="tile server">
              {item.name}
            </li>
          )
        })
      }

      </ul>

    </div>


  )
} 

export default Servers;