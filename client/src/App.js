import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Navbar from "./pages/Navbar";
import Cart from "./pages/Cart1";
import Homepage from "./pages/Homepage1";
import Payment from "./pages/Payment1";
// import Categories from "./pages/Categories";
import Furniture from "./pages/Shop/Furniture";
import Porcelan from "./pages/Shop/Porcelan";
import Trinkets from "./pages/Shop/Trinkets";
import Vinyls from "./pages/Shop/Vinyls";
import Art from "./pages/Shop/Art";
import SportsMem from "./pages/Shop/SportsMem";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// If you want to make another page, make sure its capitalized
// clothing and shoes
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Payment" element={<Payment />} />
            {/* <Route path="/Categories" element={<Categories />} /> */}
            <Route path="/SportsMem" element={<SportsMem />} />
            <Route path="/Furniture" element={<Furniture />} />
            <Route path="/Porcelan" element={<Porcelan />} />
            <Route path="/Trinkets" element={<Trinkets />} />
            <Route path="/Vinyls" element={<Vinyls />} />
            <Route path="/Art" element={<Art />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
