import React from 'react'
import s from './Post.module.css'
const Post = (props) => {

    return(
        <div className={s.item}>
            <img src="https://www.maybelline.com/~/media/mny/us/face-makeup/modules/pathing-switcher/face-category-pathing-switcher.jpg" alt="face"/>
            {props.text}
            <div>
                <span>like</span>
                <span> {props.likes}</span>
            </div>

        </div>
    );
}

export default Post;