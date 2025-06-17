import React, { useEffect } from 'react'
import appwriteService  from '../appwrite/config.js';
import { Container,PostCard } from '../components/index.js';

function AllPosts() {

    const [Posts,setPosts] = useState([])
    useEffect(() => {},[])
    appwriteService.getPosts([]).then((posts) =>{
        if(posts){
            setPosts(setPosts.document)
        }
    })

  return  (
    <div className='w-full py-8'>
        <Container>
          <div className=''>
              {
                posts.map((post) =>[
                    <PostCard key={post.$id} post={post} 
                    className='' />
                ])
            }
          </div>
        </Container>
      
    </div>
  )
}

export default AllPosts
