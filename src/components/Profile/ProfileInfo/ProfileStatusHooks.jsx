import React, {useState} from 'react'

const ProfileStatus = (props) => {
    let [editMode,setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)

   const activateEditMode = () => {
        debugger
        setEditMode(true)
    }
   const deactivateEditMode = () => {
        debugger
        setEditMode(false)
        props.updateProfileStatus(status)
    }
    const onChangeStatus = (e) => {
        debugger
        setStatus(e.currentTarget.value)
    }
    /*componentDidUpdate(prevProps, prevState,) {
        if(prevProps.status!==this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }
*/

    return <div>
        {editMode ?
            <div><input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode} type="text" value={status}/></div>
            : <div><span onDoubleClick={activateEditMode}>{status }</span></div> }
    </div>


}

export default ProfileStatus