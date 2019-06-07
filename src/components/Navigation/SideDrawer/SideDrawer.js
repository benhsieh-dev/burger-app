import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import sideDrawerModule from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return (
        <div className={sideDrawerModule.SideDrawer}>
            <div className={sideDrawerModule.Logo}> 
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    ); 
};

export default sideDrawer; 