import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addNewMessage = ()=>{

        props.store.dispatch(addMessageActionCreator());
    }
    let updateNewMessageText = (text) =>{
        props.store.dispatch(updateNewMessageTextActionCreator(text));

    }
    return(
        <Dialogs dialogsPage={state} updateNewMessageText={updateNewMessageText} addNewMessage={addNewMessage}/>
    );
}

export default DialogsContainer;