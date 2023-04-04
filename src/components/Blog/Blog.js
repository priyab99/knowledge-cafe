import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const{img,image,title,date,time,body}=props.blog;
    const addBookMark=props.addBookMark;
    return (
        <div className='blog'>


       <img src={img} alt="" />
    
            <div className='intro-info'>
        
       <div>
       
        <h4>{title}</h4>
        <h5>{date}(days ago)</h5>
       </div>
       <div className='bookmark-container'>
        <p>{time}mins read</p>
        <button onClick={()=>addBookMark(props.blog)} className='bookmark' ><FontAwesomeIcon icon={faBookmark} /></button>
       </div>

       </div>

       <p className='body-style'>{body}</p>
       <a className='anchor' href="/mark">Mark As Read</a>


            
        </div>
    );
};

export default Blog;