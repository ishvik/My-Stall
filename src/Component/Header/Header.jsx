import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"
import {FaUserPlus,FaSearch} from 'react-icons/fa';
import {BsCart4} from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi";
import SignupModal from '../Account/SignUp/SignupModal'
import LoginModal from '../Account/Login/LoginModal';

function Header(){

    const [isSignUpVisible,setisSignUpVisible] = useState(false);
    const [isLoginVisible,setisLoginVisible] = useState(false);

    const {pathname} = useLocation();

    let visitedPath = {color:'yellow'};
    let unvisitedPath = {color:'white'};

    let inlineStyleForHome = pathname=='/'?visitedPath:unvisitedPath;
    let inlineStyleForClothes = pathname.includes('clothes')?visitedPath:unvisitedPath;
    let inlineStyleForHeadphone = pathname.includes('headphones')?visitedPath:unvisitedPath;
    let inlineStyleForLaptop = pathname.includes('laptop')?visitedPath:unvisitedPath;
    let inlineStyleForMakeup = pathname.includes('makeup')?visitedPath:unvisitedPath;

    const forSignUp = () =>{
        setisLoginVisible(false);
        setisSignUpVisible(!isSignUpVisible);
    }

    const forLogin = () =>{
        setisSignUpVisible(false);
        setisLoginVisible(!isLoginVisible);
    }

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'auto'
        });
      };

    const scrollToBottom = () =>{
        window.scrollTo({
        top: document.documentElement.scrollHeight,  
          behavior: 'auto'
        });
      };

    return(
        <div className='nav'>
            {isSignUpVisible && <SignupModal onClick={forSignUp} onClickLogin={forLogin}/>}
            {isLoginVisible && <LoginModal onClick={forLogin} onClickSignup={forSignUp}/>}
            <div className='top-heading'>
                <span className='heading'><h1>My Stall</h1></span>
                <span className='account' onClick={forSignUp}><FaUserPlus/></span>
                <div className='cart'><BsCart4/></div>
                <div className='hamburger-menu'>
                    <GiHamburgerMenu/>
                </div>
            </div>
            <nav className='navbar'>
                <div className='navbar-links'>
                <ul>
                    <li>
                        <Link exact to='/' style={inlineStyleForHome} onClick={scrollToTop}>Home</Link>
                    </li>
                    <li>
                        <Link to='/clothes' style={inlineStyleForClothes} onClick={scrollToTop}>Clothes</Link>
                    </li>
                    <li>
                        <Link to='/headphones' style={inlineStyleForHeadphone} onClick={scrollToTop}>Headphones</Link>
                    </li>
                    <li>
                        <Link to='/laptop' style={inlineStyleForLaptop} onClick={scrollToTop}>Laptop</Link>
                    </li>
                    <li>
                        <Link to='/makeup' style={inlineStyleForMakeup} onClick={scrollToTop}>MakeUp</Link>
                    </li>
                    <li>
                        <Link to={pathname} onClick={scrollToBottom}>About</Link>
                    </li>
                </ul>
                </div>
                <div className='search_bar'>
                    <input type='text' placeholder='search.....' className='search_input'/>
                    <div className='search_icon'><FaSearch/></div>
                </div>
            </nav>
        </div>
    )

}

export default Header;