import React from 'react';
import InputModule from './Input.module.css';

const input = (props) => {
    let inputElement = null; 
    const inputClasses = [InputModule.InputElement]; 

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(InputModule.Invalid); 
    }

    switch (props.elementType) {
        case ( 'input' ): 
           inputElement = <input 
                className={inputClasses.join(' ')}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />; 
           break; 
        case ( 'textarea' ):
           inputElement = <textarea 
                className={inputClasses} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />;
           break; 
        case ( 'select' ):
           inputElement = (
                 <select
                    className={inputClasses} 
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))} 
                 </select>
           );
           break; 
        default: 
            inputElement = <input 
                className={InputModule.InputElement} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />;
            
    }

    return (
        <div className={InputModule.Input}>
            <label className={InputModule.Label}>{props.label}</label>
            {inputElement}
            </div>
    );
};
   
export default input; 