import React from 'react';
import blogData from './../../configs/blogs-data.json';
import PreviewPostCard from '../../view/PreviewPostCard/PreviewPostCard';
import Navbar from '../../components/Navbar/Navbar';

function Posts(){
    return(
        <>
        <Navbar/>
        <h1 className='p-5 text-center'>Posts</h1>
        
      {/* const id,title,description,content,author,publishedDate = {post} */}

        {
            blogData.map((post, index)=>{
                return <PreviewPostCard key={index} id={post.id} title={post.title} description={post.description} content={post.content} author={post.author} publishedDate={post.publishedDate} />
            })
        }
        </>
    )
}
export default Posts;