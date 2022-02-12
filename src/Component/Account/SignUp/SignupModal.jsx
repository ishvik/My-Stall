import {React,Fragment} from 'react';
import ReactDOM from "react-dom";
import SignUp from './SignUp';

const portalElement = document.getElementById("overlays");

function SignupModal(props) {
  return <Fragment>
      {ReactDOM.createPortal(
        <SignUp onClick={props.onClick} onClickLogin={props.onClickLogin}/>,
        portalElement
      )}
  </Fragment>;
}

export default SignupModal;
