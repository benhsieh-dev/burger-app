import React from 'react';

import toolbarModule from './Toolbar.module.css'
import Logo from '../../Logo/Logo'; 
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'; 

const toolbar = (props) => (
    <header className={toolbarModule.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={toolbarModule.Logo}>
             <Logo /> 
        </div>
        <nav className={toolbarModule.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} /> 
        </nav>
    </header>
);

export default toolbar; 