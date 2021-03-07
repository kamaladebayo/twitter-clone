import { Avatar } from '@material-ui/core';
import './Post.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';import {FavoriteBorderOutlined, RepeatOutlined } from '@material-ui/icons';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import { forwardRef } from 'react';

const Post = forwardRef(({
    displayName, 
    username, 
    verified, 
    text, 
    image, 
    avatar}, ref) => {
    return ( 
        <div className="post" ref={ref}>
            <div className="post_avatar">
            <Avatar src={avatar}></Avatar>
            </div>
            <div className="post_body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "} {verified && <span><CheckCircleIcon className="verified__icon" /></span>} <p>@{username}</p>

                        </h3>
                    </div>

                </div>
                <div className="post__description">
                    <p>{text}</p>
                </div>
                <img src={image} alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                    <RepeatOutlined fontSize="small" />
                    <FavoriteBorderOutlined fontSize="small" />
                    <PublishOutlinedIcon fontSize="small" />
                </div>
            </div>
        </div>
     );
})
 
export default Post;