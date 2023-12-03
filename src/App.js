import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar.jsx";
import OrderDetails from "./components/Order/OrderDetails";
import OrderSummary from "./components/Order/OrderSummary";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <Header />
        <OrderSummary />
        <OrderDetails />
      </div>
    </div>
  );
}

export default App;
