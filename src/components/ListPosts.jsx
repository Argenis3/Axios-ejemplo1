import React from "react";
import { useEffect, useState } from "react";
import { getPosts } from "../services/posts";

export const ListPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data);
        };

        fetchPosts();
    }, []); // Empty dependency array to run only once on mount

    return (
    <>
        <h2>Posts</h2>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </>
);
};