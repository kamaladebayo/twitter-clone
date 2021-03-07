import { Search } from '@material-ui/icons'
import './Widgets.css'
import { TwitterTweetEmbed } from 'react-twitter-embed';const Widjets = () => {
    return ( 
        <div className="widgets">
            <div className="widgets__inputs">
                <Search />
                <input type="text" placeholder="Search Twitter"/>
            </div>

            <div className="widgets__widgetContainer">
                {/* <h2>Trends for you</h2> */}
                <a className="promote-clone-button" href="https://twitter.com/intent/tweet?text=Hello%20world" data-size="large">Promote this clone &#128640;</a>
                <TwitterTweetEmbed tweetId={'1362089166855692292'} />
            </div>
        </div>
     );
}
 
export default Widjets;