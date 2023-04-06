import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const{img,image,title,date,time,body}=props.blog;
    const addBookMark=props.addBookMark;
    const addTime=props.handleTime;

    
    

    return (
        <div className='blog'>


        <img src={img} alt="" />
     
        <div className='blog-info'> 
        <img className='profile-img' src={image} alt="" />

        <div className='intro-info'>
            <div>
                <p className='name'>{title}</p>
                <p>{date}(days ago)</p>

            </div>
            <div className='bookmark-container'>
            <p>{time}mins read</p>
            <button onClick={()=>addBookMark(props.blog)} className='bookmark' ><FontAwesomeIcon icon={faBookmark} /></button>

            </div>
        </div>
          
         
 
          <p className='body-style'>{body}</p>
        <button onClick={()=>addTime(props.time)} className='read-button' href="/mark">Mark As Read</button>
         </div>    
         </div>
    );
};

export default Blog;