import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Profile.css'

const Profile = () => {
    const [blogs, setBlogs]=useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[]);
    return (
        <div className='profile-container'>
            <div className='blog-container'>
        {
            blogs.map(blog=> <Blog key={blog.id}
            blog={blog}>
                
            </Blog> )
        }


            </div>
            <div className='bookmark-container'>
                <h2>Bookmarked</h2>

            </div>
            
        </div>
    );
};

export default Profile;