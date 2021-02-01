import React from 'react'
import s from './Header.module.css'
const Header = () => {
    return(
        <header className={s.header}>
            <img src="https://www.veeam.com/content/dam/veeam/global/veeam-graphics/veeam_logo_white-500.png.web.1280.1280.png?ck=1572622163865&ck=1572622163865" alt="logo"/>
        </header>
    );
}

export default Header;