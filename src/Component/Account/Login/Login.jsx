import React from 'react';
import '../SignUp/SignUp.css';
import {MdEmail} from 'react-icons/md';
import {FaLock} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';

function Login(props) {
    return( <div className='signup-modal-outer'>
    <div className='signup-modal'>
        <div className='close' onClick={props.onClick}><ImCross/></div>
        <div className='signup-email'>
            <label for='email'><MdEmail/></label>
            <input type='email' name='email' placeholder='Email'/>
        </div>
        <div className='signup-password'>
            <label for='password'><FaLock/></label>
            <input type='text' name='password' placeholder='Password'/>
        </div>
        <div className='signup-btn'><button type='submit'>Login</button></div>
        <div className='other-options'>
            <div className='google'>
                <FcGoogle/>
            </div>
            <div className='github'>
                <FaGithub/>
            </div>
        </div>
        <div className='for-login'>
            <h3>Create a new Account? ~ </h3>
            <div className='link' onClick={props.onClickSignup}><h4>SignUp</h4></div>
        </div>
    </div></div>);
}

export default Login;
