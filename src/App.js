import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./Components/Collaction/Collection";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Pricing from "./Components/Pricing/Pricing";
import Explor from "./Components/Explor/Explor";
import Imgdetails from "./Components/imgdetails";
import Vederpage from "./Components/Vander/Vederpage";
import VederpageProfile from "./Components/Vander/VederpageProfile";
import Products from "./Components/Products/Products";
import Paidpicup from "./Components/Picuplod/Paidpicup";
import Freebie from "./Components/Picuplod/Freebie";
import Error from "./Components/Error";
import Frame from "./Components/Frame";
import Dashbord from "./Components/Dashbord/Dashbord";
import Dowlodimg from "./Components/Dowlodimg";
import Entris from "./Components/Dashbord/Entris";
import Assats from "./Components/Dashbord/Assats";
import Massage from "./Components/Dashbord/Massage";
import Notification from "./Components/Dashbord/Notification";
import Order from "./Components/Dashbord/Order";
import DowlodDasbord from "./Components/Dashbord/DowlodDasbord";
import Addresh from "./Components/Dashbord/Addresh";
import Satting from "./Components/Dashbord/Satting";
import Logout from "./Components/Dashbord/Logout";
import ForgotPassword from "./Components/ForgotPassword";
import NewproductPage from "./Components/Products/NewproductPage";
import MainCart from "./Components/Cart/MainCart";
import ModalRiliceForm from "./Components/Modalpropey/ModalRiliceForm";
import PropertyReliceForm from "./Components/Modalpropey/PropertyReliceForm";

function App() {
  
  return (
    <>
    
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Explor" element={<Explor />} />
          <Route exact path="/Collection" element={<Collection />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Pricing" element={<Pricing />}/>
          <Route exact path="/Collection/:imgId" element={<Imgdetails />}/>
          <Route exact path="/Vender" element={<Vederpage/>}/>
          <Route exact path="/Vender/:vaderProfile" element={<VederpageProfile/>}/>
          <Route exact path="/products" element={<NewproductPage/>}/>
          <Route exact path="/products/:filtername" element={<Products/>}/>
          <Route exact path="/Paidpicuplod" element={<Paidpicup/>}/>
          <Route exact path="/freepicuplod" element={<Freebie/>}/>
          <Route exact path="*" element={<Error/>}/>
          <Route exact path="/imgFame/:ProductFrame" element={<Frame/>}/>
          <Route exact path="/Dashbord" element={<Dashbord/>}/> 
          <Route exact path="/Downlod/:product" element={<Dowlodimg/>}/>
          <Route exact path="/Etris" element={<Entris/>}/>
          <Route exact path="/Assates" element={<Assats/>}/>
          <Route exact path="/Massge" element={<Massage/>}/>
          <Route exact path="/Notification" element={<Notification/>}/>
          <Route exact path="/Order" element={<Order/>}/>
          <Route exact path="/DownlodDasbord" element={<DowlodDasbord/>}/>
          <Route exact path="/Addresh" element={<Addresh/>}/>
          <Route exact path="/setting" element={<Satting/>}/>
          <Route exact path="/Log-out" element={<Logout/>}/>
          <Route exact path="/ForgotPassword" element={<ForgotPassword/>}/>
          <Route exact path="/PropertyRiliceForm" element={<PropertyReliceForm/>}/>
          <Route exact path="/ModalRiliceForm" element={<ModalRiliceForm/>}/>
          <Route exact path="/cart" element={<MainCart/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
