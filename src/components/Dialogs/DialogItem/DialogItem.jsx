import React from 'react'
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/"+props.id;
    return(
        <NavLink className={s.dialog} to={path} activeClassName={s.active}>
            <div className={s.dialogImage}><img src={props.img} alt="avatar"/></div>
            <div className={s.dialogsInfo}><span>{props.name}</span></div>
        </NavLink>
    );
}

export default DialogItem;

