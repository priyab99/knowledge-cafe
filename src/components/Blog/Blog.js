import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const{img,image,title,date,time,body}=props.blog;
    return (
        <div className='blog'>


       <img src={img} alt="" />
       <div>
       <div>
        <img className='user-image' src={image} alt="" />
       
        <h4>{title}</h4>
        <h5>{date}</h5>
       </div>
       <div>
        <p>{time}</p>
       </div>

       </div>

       <p>{body}</p>


            
        </div>
    );
};

export default Blog;