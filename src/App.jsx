import Navbar from "../components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "../components/Header";
import CatageryPage from "./pages/CatageryPage";
import Home from "./Home";
import List from "./List";
import ChartBar from "./ChartBar";
import User from "./User";
import { CartProvider } from "./pages/CartContext";
import AboutUs from "./AboutUs";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<AboutUs />} />
          <Route path="/list" element={<List />} />
          <Route path="/chartlist" element={<ChartBar />} />
          <Route path="/user" element={<User />} />
          <Route path="/catagery" element={<CatageryPage />} />
          <Route path="/cart" element={<ChartBar />} /> {/* Add Cart Route */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
