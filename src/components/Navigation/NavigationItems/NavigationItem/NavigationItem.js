import React from 'react';
import { NavLink } from 'react-router-dom'; 

import NavigationItemModule from './NavigationItem.module.css'; 

const navigationItem = (props) => (
    <li className={NavigationItemModule.NavigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={NavigationItemModule.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem; 