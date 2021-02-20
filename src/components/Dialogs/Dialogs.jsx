import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} id={m.id} isMy={m.isMy}/>);

    let addNewMessage = ()=>{
        props.addNewMessage();
    }
    let updateNewMessageText = (e) =>{

        let text = e.target.value;
        props.updateNewMessageText(text);
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
                        <textarea placeholder='Enter text...' onChange={updateNewMessageText} value={state.newMessageText}/>
                        <button onClick={addNewMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;