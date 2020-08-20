import React from 'react';

import drawerToggleModule from './DrawerToggle.module.css'; 

const drawerToggle = (props) => (
    <div className={drawerToggleModule.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle; 