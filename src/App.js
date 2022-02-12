import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/HomePage/Home";
import Footer from "./Component/Footer/Footer";
import Clothes from "./Component/Pages/Clothes/Clothes";
import HeadPhones from "./Component/Pages/HeadPhones/HeadPhones";
import Laptop from "./Component/Pages/Laptop/Laptop";
import MakeUp from "./Component/Pages/MakeUp/MakeUp";
import {Route,Routes} from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

const ClothesPage = () => {
  return (
    <div>
      <Header />
      <Clothes />
      <Footer />
    </div>
  );
};

const HeadphonePage = () => {
  return (
    <div>
      <Header />
      <HeadPhones />
      <Footer />
    </div>
  );
};

const LaptopPage = () => {
  return (
    <div>
      <Header />
      <Laptop />
      <Footer />
    </div>
  );
};

const MakeupPage = () => {
  return (
    <div>
      <Header />
      <MakeUp />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/clothes" element={<ClothesPage/>} />
        <Route path="/headphones" element={<HeadphonePage/>} />
        <Route path="/makeup" element={<MakeupPage/>} />
        <Route path="/laptop" element={<LaptopPage/>} />
      </Routes>
      </div>
  );
}

export default App;
