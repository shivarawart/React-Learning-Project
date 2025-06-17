import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/config.js';
import { useSelector } from 'react-redux';

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = userData((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false; // Uncomment if needed

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate('/');
            });
        } else navigate('/');
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.FeturedImage).then((status) => {
                    if (status) {
                        navigate('/');
                    }
                });
            }
        });
    };

    return post ? (
        <div className="py-8 bg-gradient-to-b from-black to-white min-h-screen">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border border-gray-800 bg-white rounded-xl p-4 shadow-lg">
                    <img
                        src={appwriteService.getFile(post.FeturedImage)}
                        alt={post.title}
                        className="rounded-xl max-h-96 object-cover border-4 border-black shadow-md"
                    />

                    {isAuthor && (
                        <div className="absolute top-4 right-4 flex gap-2">
                            <Link
                                to={`/edit-post/${post.$id}`}
                                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={deletePost}
                                className="px-4 py-2 bg-white text-black border border-black rounded hover:bg-gray-200 transition"
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    ):nulll;
}

