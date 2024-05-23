import BuySell from "./BuySell";
import Login from "./Login";
import Seller from "./Seller";
import SellersPosts from "./SellersPosts";
import "./Card.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="logo">
        Rental.com
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/buySell" element={<BuySell/>} />
          <Route path="/asSeller" element={<Seller/>} />
          <Route path="/seePosts" element={<SellersPosts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
