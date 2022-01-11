import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/Profile'} className={({isActive}) => (isActive ? `${s.activeLink}` : '')}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Messages'} className={({isActive}) => (isActive ? `${s.activeLink}` : '')}>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/News'} className={({isActive}) => (isActive ? `${s.activeLink}` : '')}>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Music'} className={({isActive}) => (isActive ? `${s.activeLink}` : '')}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Settings'} className={({isActive}) => (isActive ? `${s.activeLink}` : '')}>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
};


export default Navbar;