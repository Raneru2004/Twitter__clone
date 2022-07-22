import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed,
    TwitterShareButton, 
    TwitterTweetEmbed } from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';;

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets__input--wrapper'>
                <div className='widgets__input'>
                    <SearchIcon className="widgets__searchIcon"/>
                    <input placeholder='Search Twitter' type="text"/>
                </div>
            </div>
            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>
                <div className="tweet__widget">
                <TwitterTweetEmbed tweetId={"858551177860055040"} />
                </div>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="cleverqazi"
                options={{height:400}}
                />
                <div className='share__button'>
                    <TwitterShareButton
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{text:"#reactjs is awesome", via:"cleverqazi"}}
                    />
                </div>
            </div>
        </div>
    );
}

export default Widgets;
