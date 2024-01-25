import React from 'react';
import { Link } from 'react-router-dom';


function PreviewPostCard({id, title, author, description}){
    return(
        <div className='container m-5 shadow border rounded p-5'>
        <div className='preview-post-card'>
        <h2>{title}</h2>
        <span>By{author}</span>
        <p>{description}</p>
        <Link to={`/post/read/${id}`}>Read More</Link>
        </div>
        </div>
    )
}
export default PreviewPostCard; 