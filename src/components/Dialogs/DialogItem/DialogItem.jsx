import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';

const DialogItem = ({ id, img, name }) => {
  const path = `/dialogs/${id}`;
  return (
    <NavLink className={s.dialog} to={path} activeClassName={s.active}>
      <div className={s.dialogImage}><img src={img} alt="avatar" /></div>
      <div className={s.dialogsInfo}><span>{name}</span></div>
    </NavLink>
  );
};

export default DialogItem;
