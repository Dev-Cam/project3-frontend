import axios from "axios";
import {useEffect, useState} from "react";
import { Outlet, Link } from "react-router-dom"
import '../stylesheets/tableOrder.css'



import {servers} from "../config/constants"

function Servers(){
  const [server, setServer] = useState([])


  useEffect( () => {
    fetchServer();
  }, []);

  const fetchServer = async () => {
    // console.log('looking for server');
    try {
      const res = await axios.get(servers)
      // console.log(res.data);
      setServer( res.data )
      
    } catch(err){
      console.log(err);
    }
    
  }


  return(
    <div>
      <h2>SERVERS</h2>
      <div className='table-numbers'>
        {
          server.map(server => {
            return( 
              <ul>
              <Link className="tile" to={`${server.name}/tables`}>
                <li key={server.id} >
                  {server.name}
                </li>
              </Link>
              </ul>
            )
          })
        }

        <Outlet/>
      </div>
    </div>


  )
} 

export default Servers;