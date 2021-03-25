import React from 'react'
import s from '../Dialogs.module.css'

const Message = (props) => {
    return(
        <div className={s.message + ' ' + (props.isMy ? s.myMessage : '')}>
            <img src="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859" alt="foto"/>
            <div className={s.messageText}>{props.message}</div>
        </div>
    );
}

export default Message;



