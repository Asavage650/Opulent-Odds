import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Navbar from "./pages/Navbar";
import Cart from "./pages/Cart1";
import Homepage from "./pages/Homepage1";
import Sell from "./pages/Sell";
// import Categories from "./pages/Categories";
import Furniture from "./pages/Shop/Furniture";
import Porcelan from "./pages/Shop/Porcelan";
import Trinkets from "./pages/Shop/Trinkets";
import Vinyls from "./pages/Shop/Vinyls";
import Art from "./pages/Shop/Art";
import SportsMem from "./pages/Shop/SportsMem";
import Shopctx from "./pages/Context/Shopctx";
import { setContext } from "@apollo/client/link/context";
// import ImageSlider from "./pages/ImageSlider";
// import { CartProvider } from "react-use-cart";

const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
}); // If you want to make another page, make sure its capitalized
// clothing and shoes
function App() {
  return (
    <Shopctx>
      <ApolloProvider client={client}>
        <div className="App">
          <Router>
            {/* <CartProvider> */}
            <Navbar />
            {/* <ImageSlider /> */}

            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/Sell" element={<Sell />} />
              {/* <Route path="/Categories" element={<Categories />} /> */}
              <Route path="/SportsMem" element={<SportsMem />} />
              <Route path="/Furniture" element={<Furniture />} />
              <Route path="/Porcelan" element={<Porcelan />} />
              <Route path="/Trinkets" element={<Trinkets />} />
              <Route path="/Vinyls" element={<Vinyls />} />
              <Route path="/Art" element={<Art />} />
            </Routes>
            {/* </CartProvider> */}
          </Router>
        </div>
      </ApolloProvider>
    </Shopctx>
  );
}

export default App;
