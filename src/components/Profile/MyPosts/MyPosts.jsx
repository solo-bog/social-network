import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostForm from './PostForm';

const MyPosts = ({ posts, addPost }) => {
  const postsElements = posts.map((p) => <Post key={p.id} id={p.id} text={p.message} likes={p.likesCount} />);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <PostForm addPost={addPost} />
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>

  );
};

export default MyPosts;
