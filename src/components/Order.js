import '../stylesheets/tableOrder.css'

function Order(props) {

  let total = 0;
  const getTotal = (itemPrice) => {
    total += itemPrice
  }

  const clearOrder = () => {
    
  }

 console.log("Props", props);
  return(
    <div className='order'>
      <h2>Order</h2>
      <div className='order-items'>
       
        {
          props.order.line_items.map(menuItem => {
            getTotal(menuItem.menu_item.price)
            return <p>{menuItem.menu_item.name} ${menuItem.menu_item.price}</p>
          })
        }

        <h4>Total: ${total}</h4>

      </div>
      <div className='buttons'>
      <button onClick={clearOrder}>Pay</button>

        <button>Submit</button>
      </div>
    </div>
  )
}

export default Order;