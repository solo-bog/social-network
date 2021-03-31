import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from '../Dialogs/Dialogs.module.css';
import { required } from '../../utils/validators/validators';
import { getProfile, uploadPhoto } from '../../redux/profileReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const Settings = ({
  myId, userPhoto, uploadPhoto, getProfile,
}) => {
  useEffect(() => {
    getProfile(myId);
  }, [myId, getProfile]);
  const file = React.createRef();
  return (
    <div>
      <img height="100px" src={userPhoto} alt="" />
      <Form onSubmit={() => uploadPhoto(file.current)}>
        {({ handleSubmit }) => (
          <form className={s.messagesInput} onSubmit={handleSubmit}>
            <div>
              <Field validate={required} name="photo" component="input">
                {({ input, meta }) => (
                  <div>
                    <div>
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label htmlFor="uploadPhoto">Select photo</label>
                    </div>
                    <div><input ref={file} {...input} type="file" id="uploadPhoto" /></div>
                    <div>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userPhoto: state.profilePage.profile.photos.large,
  myId: state.auth.userId,
});
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { getProfile, uploadPhoto }),
)(Settings);
