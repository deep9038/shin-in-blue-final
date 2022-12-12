import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "../Home/HomeComponant/Modal";
// import Navbar from "../Home/HomeComponant/Navbar";
import "./About.css"
import Contribute from "../Contribute";
// import aboutus from '../sib2 frametmt/aboutus.png'
// import Vanders from "../Vander/Vanders";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
// import Aboutimg from '../sib2 frametmt/About-us-not-actualy-as-but-ass.gif'
import axios from "axios";
import horizontal from '../sib2 frametmt/horizontal.jpg'
import Navbar from "../NewNav/Navbar";




const About = () => {

  const [openmod, setOpenmod] = useState(false);
  const [opencontribut,setContribut]=useState(false)
  const [aboutData,setAboutData]=useState()
  const imgabout=null
useEffect(()=>{
    axios
    .get("http://192.168.29.146:3000/api/photoAboutContent_api")
    .then(res=>{
      setAboutData(res.data.result)
    
      console.log(res.data);
})
},[])

  return (
    <div >
      {/* <div><Bacimg img={"https://images.unsplash.com/photo-1656703306407-88adf9044949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80"}/></div> */}
      <div>
        
       {/* {console.log(aboutData.result[0].aboutimg)} */}
        {/* <img src={aboutData}  alt="no img" srcSet="" /> */}
        <img src={`http://192.168.29.146:3000/api/photoAboutContent_api/${aboutData}`}  alt="no img" srcSet="" />
        </div>
      <Navbar op={setOpenmod} conset={setContribut}/>
      <div className="aboutpage-img">
        <div className="abimg">
          <img src={horizontal} alt=""/>
        </div>
      <div className=" container  hading">
        <div className="sin-poto-container d-flex justify-content-center align-items-center">
        <img src="https://photos.shineinblue.com/wp-content/uploads/2022/05/logo-sib.png" alt="" />
        </div>
        
          <h1 className="d-flex justify-content-center align-items-center">ABOUT US</h1>
      </div>
      
      </div>
      <div className="container">
        <h2>About This Company</h2>
        <h4></h4>
      </div>


      {/* <div className="container">
      <img  className="d-flex justify-content-center mx-auto about-size" src={Aboutimg} alt="" />
      </div> */}
    {/* <h1 className="d-flex justify-content-center">Our top venders</h1> */}
      {/* <Vanders/> */}
      {/* <div className=" imggrup container-fluid w-100">
            <img src="" alt="" />
      </div> */}
      {/* <div className=" container ab">
        <div className="first">
        <div className="offic m-2">
          <h1 className="m-2"> Our Office </h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium commodi aliquam perferendis alias voluptatem ipsum facere neque quisquam eveniet sed porro temporibus, natus odio illo sunt dolorem? Excepturi, nemo eveniet?</p>
        </div>
        <div className="salary m-2">
          <h4 className="m-2">Competitive Salary</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dignissimos ullam veritatis fuga minus nisi exercitationem alias placeat adipisci nobis molestias iste, sequi doloribus, ipsum praesentium quisquam distinctio eaque fugiat?</p>
          <br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, quibusdam? Pariatur odio nesciunt dolores consequatur dolorum est perferendis dolorem sapiente tempora. Ad nam tempora perspiciatis odit pariatur aut nobis blanditiis.</p>
        </div>
        <div className="qes m-2">
          <h1 className="m-2">Mauris et dignissim nisl</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis maiores atque magnam enim, aut a ipsam similique consequuntur ex adipisci, reiciendis ut autem ea vero molestiae iure. Illo, molestias.</p>
        </div>
        <div className="mail" >
          <p>example@email.com</p>
          <p>support-help-desk@email.com</p>
        </div>
        <div className="m-4" >
          <Link to="/Pricing" className="but con-but">Lurn more and view pricing</Link>
        </div>
        </div>
        <div className="secend">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, est?</p>
          <div className="dk">
          <h3>Quisque vitae vulputate lacus</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veniam asperiores repellendus at quos obcaecati odit, voluptate saepe sapiente reiciendis?</p>
          <div className="pt-3" >
          <Link to="/Contact" className="but con-but ">Contact</Link>
        </div>
          </div>
          
        <div className="hi">
          <h3>Say hi to the team</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequatur explicabo ipsam quia numquam distinctio quis fuga dolorum temporibus deserunt. Tempore commodi fuga a? Porro!</p>
        </div>
        </div>
        
      </div> */}
      
      <Footer/>
      {opencontribut ? <Contribute closeconMod={setContribut} />:""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default About;
