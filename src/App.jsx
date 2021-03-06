import "./App.css";
import Navbar from "./JSX/Navbar";
import AboutMeContent from "./JSX/AboutMeContent";
import AboutUs from "./JSX/About_me";
import Image from "./JSX/Image";
import Wildlife from "./JSX/Wildlife";
import "./JSX/space";
import Space from "./JSX/space";
import Footer from "./JSX/Footer";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./JSX/ContactUs";
import NatureMain from "./JSX/Nature_Main";
import WildlifeMain from "./JSX/Wildlife_Main";
import StarsMain from "./JSX/Stars_Main";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">
          <div>
            <Routes>
              <Route path="/about" element={<AboutUs />}></Route>
            </Routes>
          </div>
          <Routes>
            <Route path="/about" element={<AboutMeContent />}></Route>
          </Routes>
        </div>
        <Routes>
          <Route path="/" element={<Image />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Wildlife />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Space />}></Route>
        </Routes>
        <Routes>
          <Route path="/contact_us" element={<ContactUs />}></Route>
          <Route path="/Nature_Main" element={<NatureMain />}></Route>
          <Route path="/Wildlife_Main" element={<WildlifeMain />}></Route>
          <Route path="/Stars_Main" element={<StarsMain />}></Route>
        </Routes>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
