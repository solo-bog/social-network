import React, {useEffect, useState} from 'react'

const ProfileStatus = (props) => {
    let [editMode,setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

   const activateEditMode = () => {
        setEditMode(true)
    }
   const deactivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }
    const onChangeStatus = (e) => {
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