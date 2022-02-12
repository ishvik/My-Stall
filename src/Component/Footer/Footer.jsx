import React, { useState } from 'react';
import './Footer.css';
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import ContactModal from '../Contact/ContactModal';

function Footer() {

  const {pathname} = useLocation();

  const [isContactVisible,setisContactVisible] = useState(false);

  const setContactVisibility = ()=>{
    setisContactVisible(!isContactVisible);
  }

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'auto'
    });
  };

  return (
  <div className='footer'>
    <div className='about_us'>
      <h2 className='head'>About Us</h2>
      <div className='underline'></div>
      <p className='aboutus_para'>Although it's possible to make an amazing 'about us' page that uses nothing but text, it certainly isn't ideal. You should use all of the resources at your disposal when telling your story.</p>
      <div className='contact_links'>
        <ul className='contact_ul'>
          <li className='contact_li'>
            <a href='https://www.facebook.com/'><BsFacebook/></a>
            <a href='https://www.instagram.com/'><AiFillInstagram/></a>
            <a href='https://github.com/ishvik'><BsGithub/></a>
            <a href='https://www.linkedin.com/in/simran-singh-92894b1a1/'><FaLinkedin/></a>
          </li>
        </ul>

      </div>
    </div>
    <div className='quick_links'>
        <h2 className='head'>Quick links</h2>
        <div className='underline_quick'></div>
        <div className='quick_links_name'>
            <ul className='quick_links_ul'>
            <li><Link to={pathname} onClick={scrollToTop}>Back to top</Link></li>
            <li><Link to='/laptop' onClick={scrollToTop}>Laptop</Link></li>
            <li><Link to='/headphones' onClick={scrollToTop}>Headphone</Link></li>
            <li><Link to={pathname} onClick={setContactVisibility}>Contact</Link></li>
            {isContactVisible&&<ContactModal onClick={setContactVisibility}/>}
            </ul>
        </div>
    </div>


  </div>);
}

export default Footer;
