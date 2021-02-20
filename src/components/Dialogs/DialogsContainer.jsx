import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {



    return(
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;
                let addNewMessage = ()=>{
                    store.dispatch(addMessageActionCreator());
                }
                let updateNewMessageText = (text) =>{
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }
                return <Dialogs dialogsPage={state} updateNewMessageText={updateNewMessageText} addNewMessage={addNewMessage}/>
            }

        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;