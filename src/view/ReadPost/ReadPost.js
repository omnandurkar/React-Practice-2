import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import blogData from './../../configs/blogs-data.json';
import Navbar from '../../components/Navbar/Navbar';

function ReadPost(){
    const { id } = useParams()

    const [post, setPost] = useState({})

    useEffect(()=>{
        blogData.forEach((postObj)=>{
            if(postObj.id == id){
                setPost(postObj)
            }
        })
    }, [id])
    return(
        <>
        <Navbar/>
        <div className='container mt-5 p-5 border shadow-lg rounded-2  '>
        <h1>{post.title}</h1>
        <span>By {post.author}</span>
        <p>{post.description}</p>
        <p>{post.content}</p>
        <p>Published On {post.publishedDate}</p>
        </div>
        </>
    )
}
export default ReadPost;