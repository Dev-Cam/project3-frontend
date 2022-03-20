import axios from "axios";
import {useEffect, useState} from "react";
import { Outlet, Link, useHistory, useMatch, useParams } from "react-router-dom"
import '../stylesheets/tableOrder.css'

import {BASE_URL} from "../config/constants.js"

function Table(){
  const [Table, setTable] = useState([])

  const params = useParams()
  console.log("params", params);

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
      <h2>Ordering as  {params.serverId}</h2>
      <h2>Table list</h2>
      <div className='table-numbers'>
        {
          Table.map(table => {
            return( 
              <ul>
                <Link to={`${table.number}/table-order`} key={table.number} >
                  <li className="tile">
                    {table.number}
                  </li>
                </Link>
              </ul>
            )
          })
        }
        <Outlet />
      </div>
    </div>
  )
} 

export default Table;