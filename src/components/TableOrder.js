import { Link, useParams } from "react-router-dom"
import {useEffect, useState} from "react";
import {BASE_URL} from "../config/constants.js"


import Menu from './Menu'
import Order from "./Order"
import '../stylesheets/tableOrder.css'
import axios from "axios";

function TableOrder() {
  const params = useParams()
  console.log("params in table order", params);

  useEffect( () => {
    fetchOrder()
  })
  

  const [order, setOrder] = useState({})
  console.log("current table order", order);

  const fetchOrder = async () => {
    console.log('fetching order');
    try {
      const url = `${BASE_URL}orders`
      const res = await axios.get(url)
      console.log(" order data for table inside fetchOrders()", res.data);

    } catch(err){
      console.log(err);
    }
    
  }

  return(
    <div>
      <h2>Server: {params.serverId} </h2>
      <h2>Order for table {params.tableId}</h2>
        <div className='table-order'>
          <Menu setOrder={setOrder}/>
          {
            (parseInt(params.tableId) === order.table_id) && order.line_items ?
            <Order order={order}/>
            :
            <p>awaiting first item</p>
          }
        </div>  
        
      <Link className="back-button" to="/servers">Back to Servers  </Link>
      <Link className="back-button" to={`/servers/${params.serverId}/tables`}>  Back to Tables</Link>
    </div>
  )
}

export default TableOrder;