import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    let dialogsElements = props.data.dialogs.map( d => <DialogItem name={d.name} id={d.id} img={d.img}/> );
    let messagesElements = props.data.messages.map( m => <Message message={m.message} id={m.id} isMy={m.isMy}/>);

    let addNewMessage = ()=>{

        props.dispatch(addMessageActionCreator());
    }
    let updateNewMessageText = (e) =>{

        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));

    }
    return(
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div>
                    <div className={s.messages}>{messagesElements}</div>
                    <div className={s.messagesInput}>
                        <textarea placeholder='Enter text...' onChange={updateNewMessageText} value={props.data.newMessageText}/>
                        <button onClick={addNewMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;