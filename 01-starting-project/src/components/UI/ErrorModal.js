import React from 'react';
import ReactDom from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = () => {
  return <div className={classes.backdrop} onConfirm={props.onConfirm} />
}

const ModalOverlay = () => {
  return(
    <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
  )
} 

const ErrorModal = (props) => {
    return (
      <div>
        {ReactDom.createPortal(<Backdrop onClick={props.onConfirm} />, document.getElementById("backdrop-root"))}
        {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.onConfirm}/>, document.getElementById("overlay-root"))}
      </div>
    );
  };
  
  export default ErrorModal;