import React, {useEffect} from 'react'
import s from "../Dialogs/Dialogs.module.css";
import {Field, Form} from "react-final-form";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {getProfile, uploadPhoto} from "../../redux/profileReducer";

const Settings = ({myId,userPhoto,uploadPhoto,getProfile}) => {
    useEffect(()=>{
        getProfile(myId)
        console.log("help")
    },[myId,getProfile])
    let file = React.createRef();
    return(
        <div>
            <img height='100px' src={userPhoto} alt=""/>
            <Form onSubmit = {()=> uploadPhoto(file.current) }>{({handleSubmit})=>(
                <form className={s.messagesInput} onSubmit={handleSubmit}>
                    <div>
                        <Field validate={required}  name={"photo"}  component="input" >
                            {({input,meta})=>(
                                <div>
                                    <div>  <label htmlFor="uploadPhoto">Select photo</label></div>
                                    <div><input ref={file} {...input} type='file' id='uploadPhoto'/></div>
                                    <div> {meta.error && meta.touched && <span>{meta.error}</span>}</div>
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            )}
            </Form>
        </div>
    );
}

let mapStateToProps = (state) => ({
    userPhoto:state.profilePage.profile.photos.large,
    myId:state.auth.userId
})

export default connect(mapStateToProps,{getProfile,uploadPhoto})(Settings);