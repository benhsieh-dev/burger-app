import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png'; 
import logoModule from './Logo.module.css'; 

const logo = (props) => (
    <div className={logoModule.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
); 

export default logo; 