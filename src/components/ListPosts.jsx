import React from "react";
import { useState, useEffect } from "react";
import { getPosts } from "../services/post";
import { Post } from "./Post";

export const ListPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};