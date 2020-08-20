import React from 'react';
import myClasses from './Button.module.css';

const button = props => (
   <button
      disabled={props.disabled}
      className={[myClasses.Button, myClasses[props.btnType]].join(' ')}
      onClick={props.clicked}>
      {props.children}
   </button>
);
export default button;