import './App.css';
import { Outlet, Link } from "react-router-dom"




function App() {

  
  return (
    <div className="App">

      <h1>OrderIn - A POS System That Counts</h1>
      <Link className="button" to="/servers">Servers</Link>

      <div >
        <Outlet />
        
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
