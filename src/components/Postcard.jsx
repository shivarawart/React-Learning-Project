import React from 'react'
import appwrite from '../appwrite/config.js';
import {link} from 'react-router-dom';
import conf from '../config/conf.js';

function Postcard ({$id,title,featuredImage}){
  return (
  <link to={'/post/{$id}'}>
    <div className=' w-full bg-gray-200 rouned-xl p-4'>
    <div className='w-full justify-center'>
        <img src={appwrite.getFile
          (appwriteService.getFile(featuredImage))}
           alt={title} className='rounded-xl' />

    </div>
            <h2>{title}</h2>
    </div>
  </link>
  )
}

export default Postcard
