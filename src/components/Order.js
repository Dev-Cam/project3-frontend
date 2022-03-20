import '../stylesheets/tableOrder.css'
import axios from "axios";

import {BASE_URL} from "../config/constants"


function Order(props) {

  let total = 0;
  const addToRunningTotal = (itemPrice) => {
    total += itemPrice
  }

  const payOrder = async () => {
    try {
      const url = `${BASE_URL}orders/pay/${props.order.id}`
      const res = await axios.post(url)
      console.log(" order pay response", res.data);
      props.setOrder({})
      // TODO:  
    } catch(err){
      console.log(err);
    }
  }

 console.log("Props", props);
  return(
    <div className='order'>
      <h2>Order</h2>
      <div className='order-items'>
       
        {
          props.order.line_items.map(menuItem => {
            addToRunningTotal(menuItem.menu_item.price)
            return <p>{menuItem.menu_item.name} ${menuItem.menu_item.price}</p>
          })
        }

        <h4>Total: ${total}</h4>

      </div>
      <div className='buttons'>
      <button onClick={payOrder}>Pay</button>

        <button>Submit</button>
      </div>
    </div>
  )
}

export default Order;