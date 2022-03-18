import Menu from './Menu'
import { Link, useParams } from "react-router-dom"
import Order from "./Order"
import '../stylesheets/tableOrder.css'


function TableOrder() {
  const params = useParams()
  console.log("params", params);

  return(
    <div>
      
      <h2>Server: {params.serverId} </h2>
      <h2>Order for table {params.tableId}</h2>

        <div className='table-order'>
          <Menu />
          <Order />
        </div>  
       

      <Link className="back-button" to="/servers">Back to Servers  </Link>
      <Link className="back-button" to={`/servers/${params.serverId}/tables`}>  Back to Tables</Link>

    </div>
  )
}

export default TableOrder;