import {React,Fragment} from 'react';
import ReactDOM from "react-dom";
import {ImCross} from 'react-icons/im';
import './ContactModal.css'

const portalElement = document.getElementById("overlays-1");

function Contact(props) {
  return (
    <div className='contact-outer'>
        <div className='contact-modal'>
        <div className='contact-close' onClick={props.onClick}><ImCross/></div>
            <h1>
              Reach me at ~ 
            </h1>
            <a href='mailto:singh.simran9654@gmail.com'><h3>singh.simran9654@gmail.com</h3></a>
        </div>
    </div>
  )
}

const ContactModal = (props) =>{
    return <Fragment>
      {ReactDOM.createPortal(
        <Contact onClick={props.onClick}/>,
        portalElement
      )}
  </Fragment>;
}

export default ContactModal;