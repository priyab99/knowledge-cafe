import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import './Profile.css'

const Profile = () => {
    const [blogs, setBlogs]=useState([])
    const [mark,setMarks]=useState([])


    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[]);

     const addBookMark=(blog)=>{
        const newMark=[...mark,blog];
        setMarks(newMark);


     }

    


    return (
        <div className='profile-container'>
            <div className='blog-container'>
        {
            blogs.map(blog=> <Blog key={blog.id}
            blog={blog}
            addBookMark={addBookMark}
            >
                
            </Blog> )
        }


            </div>
            <div className='bookmark-container'>
                <Bookmark mark={mark}></Bookmark>
               

            </div>
            
        </div>
    );
};

export default Profile;