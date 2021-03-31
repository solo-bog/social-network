import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = ({ isAuth, login, logout }) => (
  <header className={s.header}>
    <NavLink to="">
      <img src="https://www.veeam.com/content/dam/veeam/global/veeam-graphics/veeam_logo_white-500.png.web.1280.1280.png?ck=1572622163865&ck=1572622163865" alt="logo" />
    </NavLink>
    <div className={s.loginBlock}>
      {isAuth
        ? (
          <div>
            {login}
            {' '}
            --
            {' '}
            <button type="submit" onClick={logout}>Log out</button>
          </div>
        )
        : <NavLink to="/login">Login</NavLink>}

    </div>
  </header>
);

export default Header;
