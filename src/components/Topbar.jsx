import React from 'react';
import Menu from '../assets/menu.svg'
import Logo from '../assets/logo.svg'


export default function Topbar() {
    return (
        <div className="topbar">
            <div className='topbar-title'>
                <img src={Logo} />
                <h3>Trash Spotter</h3>

            </div>
            <div className="topbar-menu">
                <img src={Menu} />
            </div>


        </div>
    )
}