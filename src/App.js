import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Cart from './pages/Cart'
import Homepage from './pages/Homepage';
import Payment from './pages/Payment';


// If you want to make another page, make sure its capitalized
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path ="/" element={<Homepage />} />
        <Route path ="/cart" element={<Cart />} />
        <Route path ="/Payment" element={<Payment />} />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
