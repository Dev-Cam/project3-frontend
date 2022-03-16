import Food from "./Food.js"
function HomeScreen() {


  return(

    <div id="home">

      <div className="home-buttons" >
        <h2>Food</h2>
        <Food />
      </div>
      <div className="home-buttons">
        <h2>Drinks</h2>
      </div>

    </div>
  )
}

export default HomeScreen;