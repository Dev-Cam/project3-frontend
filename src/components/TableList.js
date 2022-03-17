import axios from "axios";
import {useEffect, useState} from "react";

import {BASE_URL} from "../config/constants.js"

function Table(){
  const [Table, setTable] = useState([])


  useEffect( () => {
    fetchTables();
  }, []);

  const fetchTables = async () => {
    const url = `${BASE_URL}/tables`
    console.log('looking for tables');
    try {
      const res = await axios.get(url)
      console.log(res.data);
      setTable( res.data )
      
    } catch(err){
      console.log(err);
    }
    
  }


  return(
    <div>
      <h2>Table list</h2>
      <ul>
      {
        Table.map(table => {
          return( 
            <li key={table.id} className="tile table">
              {table.number}
            </li>
          )
        })
      }

      </ul>

    </div>


  )
} 

export default Table;