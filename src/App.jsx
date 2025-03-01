import Navbar from "../components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import List from "./pages/List";
import ChartBar from "./pages/ChartBar";
import User from "./pages/User";
import { motion } from "framer-motion";
import Header from "../components/Header";
import MensPage from "../components/MensPage";
import WomensPage from "../components/WomensPage";
import ChildPage from "../components/ChildPage";

function App() {
  return (
    <BrowserRouter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <Navbar />
        <Header />
      </motion.div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/list" element={<List />} />
        <Route path="/chartlist" element={<ChartBar />} />
        <Route path="/user" element={<User />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/child" element={<ChildPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
