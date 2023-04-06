import React from 'react';
import './Bookmark.css'

const Bookmark = ({mark,time}) => {
    
    

    return (
        <div>
             <h2>spend time on read:{time}</h2>
                <div className='marked style'>
                    <h4>Bookmarked Blogs:{mark.length}</h4>
                 </div>
            
        </div>
    );
};

export default Bookmark;