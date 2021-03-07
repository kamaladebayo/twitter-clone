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
    
    const handleSetTweet =(e) => {
        if(e.target.value.length > 0){
            this.setTweetMessage(tweetMessage);
            console.log("fffffff");
            
        }
    }
    const sendTweet = (e) => {
        e.preventDefault();
        if(document.getElementById("tweet-input").value.length > 0){

            db.collection('posts').add({
                displayName: 'Anonymous',
                username: 'galahad',
                verified: true,
                text: tweetMessage,
                avatar: "https://i.ibb.co/zhb7mMN/anonymous-sm.jpg",
            })
        }
        document.getElementById("tweet-input").value = ""
    }
    return ( 
        <div className="tweet-box">
            <img src="https://i.ibb.co/zhb7mMN/anonymous-sm.jpg" alt="You" className="tweetBox-avatar"/>
            <form>
                <div className="tweetBox-form">
                    <input type="text" placeholder="What's happening?" className="tweetBox-texInput" id="tweet-input" value={tweetMessage} onChange={e => { e.target.value.length > 0 && setTweetMessage(e.target.value)}}/>

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