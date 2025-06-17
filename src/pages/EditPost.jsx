import React,{useEffect,useState} from 'react';
import {container,PostForm} from '.././components/index.js';
import appwriteService from '../appwrite/config.js';
import { useNavigate, useParams } from 'react-router-dom';


function EditPost() {
    const [post,setPosts] = useState([])
    const {slug} = useParams();
    const  navigate = useNavigate()

    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if(post){
                    setPosts(Post)
                }else{
                    navigate('/')
                }
            })
        }
    },[slug,navigate])
  return  post  ?(
    <div className='py-8'>
        <container>
            <PostForm post={post} />
        </container>

      
    </div>
  ):null
}

export default EditPost
