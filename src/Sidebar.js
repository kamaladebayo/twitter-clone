import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SidebarIcons from './SidebarIcons';
import { Button } from '@material-ui/core';

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            {/* Twitter Icon */}
            <TwitterIcon className="sidebar-twitterIcon" />
            {/* <HomeIcon />
            <SearchIcon />
            <NotificationsNoneIcon />
            <MailOutlineIcon />
            <PersonOutlineIcon />
            <MoreHorizIcon /> */}
            <SidebarIcons active Icon={HomeIcon} text="Home" />
            <SidebarIcons Icon={SearchIcon} text="Explore" />
            <SidebarIcons Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarIcons Icon={MailOutlineIcon} text="Messages" />
            <SidebarIcons Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarIcons Icon={ListAltIcon} text="Lists" />
            <SidebarIcons Icon={PersonOutlineIcon} text="Profile" />
            <SidebarIcons Icon={MoreHorizIcon} text="More" />


            {/* Tweet Icon */}
            <Button variant="outlined" className="sidebar-tweet" fullWidth>Tweet</Button>


            {/* Account Icon */}
        </div>
     );
}
 
export default Sidebar; 