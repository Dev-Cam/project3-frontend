import axios from "axios";
import {useEffect, useState} from "react";
import { Outlet, Link, useMatch, useParams } from "react-router-dom"
import '../stylesheets/tableOrder.css'

import {tables} from "../config/constants.js"

function Table(){
  const [Table, setTable] = useState([])

  const params = useParams()
  console.log("params", params);

  useEffect( () => {
    fetchTables();
  }, []);

  const fetchTables = async () => {
    try {
      const res = await axios.get(tables)
      // console.log(res.data);
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
                <Link className="tile" to={`${table.id}/${table.number}/table-order`} key={table.number} >
                  <li>
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