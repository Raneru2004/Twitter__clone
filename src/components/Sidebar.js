import React,{forwardRef} from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from './SidebarOption';
import SearchIcon from '@mui/icons-material/Search';
import TagIcon from '@mui/icons-material/Tag';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';



function Sidebar(){
    return (
        <div className="sidebar__wrapper">
            <div className='sidebar'>
                <TwitterIcon className='sidebar__twitterIcon'/>
                <SidebarOption active Icon={HomeIcon} text="Home"/>
                <SidebarOption Icon={TagIcon} text="Explore"/>
                <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
                <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
                <SidebarOption Icon={ListAltIcon} text="Lists"/>
                <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
                <SidebarOption Icon={MoreHorizIcon} text="More"/>
                

                <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
                
                <Button className='sidebar__tweet--plus'><AddIcon/></Button>
            </div>
            <div className="sidebar__avatar--wrapper">
                <div className="bio">
                    <Avatar src="https://comicvine.gamespot.com/a/uploads/original/11141/111413459/7333504-8500084638-190Su.jpg"
                     className="sidebar__avatar"/>
                    <p className="bio__text"><span className="bold">Raneru</span><br/>
                    <span className="grey">@bigran04</span></p>
                </div>
                <div className="sidebar__avatar--options">  
                    <MoreHorizIcon />
                </div>     
            </div>
        </div>
    );
}

export default Sidebar;
