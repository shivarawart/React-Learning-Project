import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Header, Footer, Container, Logo, Logout, Rte } from '../index.js';
import { useDispatch } from 'react-redux';
import appwriteService from './../../appwrite/config.js';

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, control, setValue, reset, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
            image: null,
        },
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userdata = appwriteService.getUserData();

    const onSubmit = useCallback(
        async (data) => {
            try {
                let fileId = post?.featuredImage;
                if (data.image && data.image[0]) {
                    const file = await appwriteService.uploadFile(data.image[0]);
                    if (file) {
                        if (post?.featuredImage) {
                            await appwriteService.deleteFile(post.featuredImage);
                        }
                        fileId = file.$id;
                    }
                }

                let dbPost;
                if (post) {
                    dbPost = await appwriteService.updatePost(post.$id, {
                        ...data,
                        featuredImage: fileId,
                    });
                } else {
                    dbPost = await appwriteService.createPost({
                        ...data,
                        featuredImage: fileId,
                    });
                }
                if(file){
                    const field = file.$id;
                    data.featuredImage = field;
                    await appwriteService.createPost({
                        ...data,
                        userId:userdata.$id,
                    })
                }

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } catch (error) {
                console.error('Error submitting post:', error);
            }

        }
        
    )
     const slugTransform = useCallback((value) =>{
        if (value && typeof value === 'string'){
            return value.trim()
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');


        return ''
        }
     }, [navigate, post])

    
         
        React.useEffect(() => {
            const subscription = watch((value, { name }) => {
                if (name === 'title') {
                    setValue('slug', slugTransform(value.title), { shouldValidate: true });
                }
            });
            return () => subscription.unsubscribe();
        }, [watch, slugTransform, setValue]);



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=' flex-wrap'>
                <input className=''
                    type="text"
                    placeholder="Title"
                    {...register('title', { required: true })}
                />
                <input
                className='w-2/3 px-2'
                label='Title'
                    type="text"
                    placeholder="Slug"
                    {...register('slug', { required: true })}
                />
                <textarea
                    placeholder="Content"
                    {...register('content', { required: true })}
                />
                <input
                    type="file"
                    accept='image/png,image/jpg,image/jpeg,image/gig'
                    {...register('image',{required:!post})}
                />
                <select {...register('status')}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

