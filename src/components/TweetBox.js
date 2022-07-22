import { Avatar, Button } from '@mui/material';
import React,{useState} from 'react';
import './TweetBox.css'
import db from '../firebase';
import { collection, addDoc, getDocs, doc, getDoc, query, where, updateDoc, deleteDoc } from "firebase/firestore";


const TweetBox = () => {
    const [tweetMessage, setTweetMessage]=useState();   
    const [tweetImage, setTweetImage]=useState();
   
    const sendTweet = event => {
        event.preventDefault();
        if (!tweetImage){
            const post={
                displayName:"Raneru",
                username:'bigran04',
                verified:false,
                text:tweetMessage,
                avatar:"https://comicvine.gamespot.com/a/uploads/original/11141/111413459/7333504-8500084638-190Su.jpg"
              };
              addDoc(collection(db, "posts"), post);

        } else {
            setTweetImage("")
            const post={
                displayName:"Raneru",
                username:'bigran04',
                verified:false,
                text:tweetMessage,
                image:tweetImage,
                avatar:"https://comicvine.gamespot.com/a/uploads/original/11141/111413459/7333504-8500084638-190Su.jpg"
              };
            addDoc(collection(db, "posts"), post);  
        }
        
        
        
        
        setTweetImage("");
        setTweetMessage("");


    }


    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                  <Avatar src="https://comicvine.gamespot.com/a/uploads/original/11141/111413459/7333504-8500084638-190Su.jpg"
                  />
                  <input value={tweetMessage} 
                  onChange={event=>setTweetMessage(event.target.value)}
                  placeholder="What's happening?" 
                  type="text"/>
                  
                </div>

                <input 
                value={tweetImage}
                onChange={event=> setTweetImage(event.target.value)}
                className='tweetBox__inputImage' 
                placeholder="Optional: Enter image URL" type="text"/>

               
                <Button onClick={sendTweet} type="submit" className='tweetBox__tweet--button'>
                    Tweet
                </Button>
                
            </form>
        </div>
    );
}

export default TweetBox;
