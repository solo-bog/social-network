import React, { useEffect, useState } from 'react';

const ProfileStatus = ({ status, updateProfileStatus }) => {
  const [editMode, setEditMode] = useState(false);
  const [currentStatus, setStatus] = useState(status);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateProfileStatus(currentStatus);
  };
  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };
  /* componentDidUpdate(prevProps, prevState,) {
        if(prevProps.status!==this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }
*/

  return (
    <div>
      {editMode
        ? <div><input onChange={onChangeStatus} onBlur={deactivateEditMode} type="text" value={currentStatus} /></div>
        : <div><span onDoubleClick={activateEditMode}>{status }</span></div> }
    </div>
  );
};

export default ProfileStatus;
