import { useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'
import FlipMove  from 'react-flip-move';
const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return ( 
        <div className="feed">
            <div className="feed-header">
                <header>Latest Tweets</header>
            </div>

            <TweetBox />

            {/* displayName, username, verified, text, image, avatar */}
        <FlipMove>
            {posts.map(post => (
                <Post 
                key={post.text}
                displayName= {post.displayName}
                username= {post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
                /> 
            ))}
        </FlipMove>
            

            <Post 
            displayName="Kamal Adebayo"
            username="ak01"
            verified={true}
            text={"Omo Ologo"}
            avatar="https://i.ibb.co/t40P3ZC/profilepic.png"
            image="https://t.co/lm3UlXnVLP?amp=1"
            />
            
        </div>
     );
}
 
export default Feed;