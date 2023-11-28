import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Faq from "./components/FAQs/Faq";
import FooterOne from "./components/Footer/FooterOne";
import FooterThree from "./components/Footer/FooterThree";
import FooterTwo from "./components/Footer/FooterTwo";
import FooterFour from "./components/Footer/FooterFour";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Faq />
      <FooterOne />
      <FooterTwo />
      <FooterThree />
      <FooterFour />
    </div>
  );
}

export default App;
