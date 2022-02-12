import {React,Fragment} from 'react';
import ReactDOM from "react-dom";
import Login from './Login';

const portalElement = document.getElementById("overlays");

function LoginModal(props) {
  return <Fragment>
  {ReactDOM.createPortal(
    <Login onClick={props.onClick} onClickSignup={props.onClickSignup}/>,
    portalElement
  )}
</Fragment>;
}

export default LoginModal;
