import React,{useEffect,useState} from 'react'
import { Container,PostCard } from '../components/index.js'

function Home() {

    const [posts,setPosts] = useState([])
        useEffect(()=> {},[])
        appwriteService.getPosts([]).then((post) => {
            if(posts.lenth === 0){
                setPosts(posts.document)
            }
        })
    
  return (
    <div className=''>
        <continer>

       
        {posts.map((post) =>{
            <div key={post.$id} className='p-2 w-1/2'>
                <PostCard {...Post}/>
            </div>
        })} 
        </continer>
      
    </div>
  )
}

export default Home
