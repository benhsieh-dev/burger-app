import React from 'react';

import toolbarModule from './Toolbar.module.css'
import Logo from '../../Logo/Logo'; 
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className={toolbarModule.Toolbar}>
        <div>MENU</div>
        <Logo /> 
        <nav className={toolbarModule.DesktopOnly}>
            <NavigationItems /> 
        </nav>
    </header>
);

export default toolbar; 