import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar.jsx";
import MissingModal from "./components/Order/MissingModal";
import OrderDetails from "./components/Order/OrderDetails";
import OrderSummary from "./components/Order/OrderSummary";
function App() {
  const overlayBoolean = useSelector(state => state.overlay)
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <Header />
        <OrderSummary />
        <OrderDetails />
        {overlayBoolean.overlayStatus && <MissingModal />}
      </div>
    </div>
  );
}

export default App;
