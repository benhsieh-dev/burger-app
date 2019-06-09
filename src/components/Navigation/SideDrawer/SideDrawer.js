import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import sideDrawerModule from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux'; 

const sideDrawer = (props) => {
    let attachedClasses = [sideDrawerModule.SideDrawer, sideDrawerModule.Close];
    if (props.open) {
        attachedClasses = [sideDrawerModule.SideDrawer, sideDrawerModule.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} /> 
            <div className={attachedClasses.join(' ')}>
                <div className={sideDrawerModule.Logo}> 
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    ); 
};

export default sideDrawer; 