import React, {useState, useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../firebase';
import { collection, addDoc, getDocs, doc, getDoc, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import FlipMove from 'react-flip-move';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Avatar, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MicNoneIcon from '@mui/icons-material/MicNone';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';



function Feed() {
    const [posts, setPosts] =useState([]);
    const [tweetBox,setTweetBox]=useState(false);
    const [tweetMessage, setTweetMessage]=useState();   
    const [tweetImage, setTweetImage]=useState();
   
    const sendTweet = event => {
        event.preventDefault();
        
        if (!tweetImage){
            setTweetImage("")
            const post={
                
                displayName:"Raneru",
                username:'bigran04',
                verified:true,
                text:tweetMessage,
                image:tweetImage,
                avatar:"https://comicvine.gamespot.com/a/uploads/original/11141/111413459/7333504-8500084638-190Su.jpg"
              };
              addDoc(collection(db, "posts"), post);
              window.location.reload(false);

        } else {
            
            const post={
                displayName:"Raneru",
                username:'bigran04',
                verified:false,
                text:tweetMessage,
                image:tweetImage,
                avatar:"https://comicvine.gamespot.com/a/uploads/original/11141/111413459/7333504-8500084638-190Su.jpg"
              };
            addDoc(collection(db, "posts"), post);  
            window.location.reload(false);
        }
        
        
        
        
        setTweetImage("");
        setTweetMessage("");
        window.location.reload(false);

    }

    
    useEffect(() => {
        async function getAllPosts(){
            const {docs} = await getDocs(collection(db, "posts"))
            const posts =docs.map(elem=>  elem.data())
            setPosts(posts)
            
            return posts
            
        }
        getAllPosts()
        console.log(getAllPosts())

    },[])


    // useEffect(()=>{
    //     db.collection("posts").onSnapshot(snapshot =>(
    //         setPosts(snapshot.docs.map(doc=>doc.data()))
    //         ))
    // },[])
    function toggleTweetBox(){
        setTweetBox(true);
    }
    function closeTweetBox(){
        setTweetBox(false);
    }
    
    return (
        <div className='feed__wrapper' >
            <a href="#">
                <Button className='tweet--plus click' onClick={toggleTweetBox}><AddIcon/></Button>
            </a>
            
            <div className='feed'>
                {tweetBox ? <>
                <div className='btnTweetBox__wrapper'>
                    <div className='btnTweetBox'>
                        <div className='close__button--wrapper'>
                            <Button className='click close__button' onClick={closeTweetBox}><CloseIcon/></Button>
                        </div>
                        <form>
                           <div className='btnTweetBox__input'>
                                <Avatar src="https://comicvine.gamespot.com/a/uploads/original/11141/111413459/7333504-8500084638-190Su.jpg"
                                />
                                <input value={tweetMessage} 
                                onChange={event=>setTweetMessage(event.target.value)}
                                placeholder="What's happening?" 
                                type="text"
                                />
                            </div> 
                            <input 
                            value={tweetImage}
                            onChange={event=> setTweetImage(event.target.value)}
                            className='btnTweetBox__inputImage' 
                            placeholder="Optional: Enter image URL" type="text"
                            />
                          
                            <Button onClick={sendTweet} type="submit"
                                className='btnTweetBox__tweet--button'>Tweet
                            </Button>
                            
                        </form>
                    </div>
                
               </div></> : <></>
                }
                

                
                <div className='feed__header'>
                        <h1>Home</h1>
                        <AutoAwesomeIcon/>
                </div>
                <div className='feed__body'>
                    <TweetBox/>
                    

                    <FlipMove>
                    { posts.map(post => (
                        
                        <Post 
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username} 
                        verified = {post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image ={post.image}
                        />
                    ))}
                    </FlipMove>
                      
                </div>
                <div className='menuBar--wrapper'>
                    <div className='menuItem--wrapper'>
                         <HomeIcon/>
                    </div>
                    <div className='menuItem--wrapper'>
                         <SearchIcon/>
                    </div>
                    <div className='menuItem--wrapper'>
                         <MicNoneIcon/>
                    </div>
                    <div className='menuItem--wrapper'>
                         <NotificationsIcon/>
                    </div>
                    <div className='menuItem--wrapper'>
                         <MailOutlineIcon/>
                    </div>
                </div>
                
            </div>
           
        </div>
    );
}

export default Feed;
