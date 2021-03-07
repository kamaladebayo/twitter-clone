import AVATAR from './profilepic.png'
import { Button } from "@material-ui/core";
import './TweetBox.css'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { useState } from 'react';
import db from './firebase'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("")
    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Galahad Weston',
            username: 'galahad',
            verified: true,
            text: tweetMessage,
            avatar: AVATAR,

        })
    }
    return ( 
        <div className="tweet-box">
            <img src={AVATAR} alt="You" className="tweetBox-avatar"/>
            <form>
                <div className="tweetBox-form">
                    <input type="text" placeholder="What's happening?" className="tweetBox-texInput" value={tweetMessage} onChange={e => setTweetMessage(e.target.value)}/>

                    <div className="tweetBox_footer">
                        <div className="icon-tray">
                            <ImageOutlinedIcon />
                            <GifOutlinedIcon />
                            <PollOutlinedIcon />
                            <SentimentSatisfiedOutlinedIcon />
                        </div>
                        <Button onClick={sendTweet} type="submit" className="tweetBox_btn">Tweet</Button>

                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default TweetBox;