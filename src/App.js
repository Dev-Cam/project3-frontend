import './App.css';
import Servers from './components/Servers'
import { Link } from "react-router-dom"

function App() {
  return (
    <div>
      <h1>OrderIn - A POS System That Counts</h1>
      <nav>
        <ul>
          <Link to="/servers">Servers </Link>
          |
          <Link to="/tables"> Tables</Link>
        </ul>
      </nav>
      <div className="App">
      <Servers/>
      </div>
    </div>
  );
}

export default App;
