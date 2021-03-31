import React from 'react';
import { Field, Form } from 'react-final-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';

const PostForm = (props) => {
  const addPost = (text) => {
    props.addPost(text.newPostText);
  };

  return (
    <Form
      onSubmit={addPost}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field validate={required} name="newPostText" placeholder="Enter text" component={Textarea} />
          </div>
          <div>
            <button type="submit">Add post</button>
          </div>
        </form>
      )}
    />
  );
};

export default PostForm;
