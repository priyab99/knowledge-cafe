import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const {mark}=props;
    let total=0;
    for(const blog of mark){
        total=total+blog.body;
    }

    return (
        <div>
             <h2>spend time on read:</h2>
                <div className='marked style'>
                    <h4>Bookmarked Blogs:{mark.length} {total}</h4>
                 </div>
            
        </div>
    );
};

export default Bookmark;