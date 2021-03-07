import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, Form} from "react-final-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const AddMessageForm = (props) => {
    const addNewMessage = (text) => {
        props.addNewMessage(text.textMessage)
    }
    return <Form onSubmit = { addNewMessage}>{({handleSubmit})=>(
        <form className={s.messagesInput} onSubmit={handleSubmit}>
            <div>
                <Field validate={required} placeholder={"Enter text..."} name={"textMessage"} component={Textarea} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )}
    </Form>
}


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} id={m.id} isMy={m.isMy}/>);
    return(
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div>
                    <div className={s.messages}>{messagesElements}</div>
                    <div>
                        <AddMessageForm addNewMessage={props.addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;