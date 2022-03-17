import Food from "./Food"
import Drinks from './Drinks'


function TableOrder() {
 

  return(

    <div id="table-order">

      <div className="menu-items" >
        <h2>Food</h2>
        <Food />
      </div>
      <div className="menu-items">
        <h2>Drinks</h2>
        <Drinks />
      </div>


      <button>Back to Table</button>
      <button>Back to Servers</button>

    </div>
  )
}

export default TableOrder;