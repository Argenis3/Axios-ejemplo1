import React from "react";

export const Post = ({ post }) => {
  return (
    <div className="bg-linear-to-br from-purple-500 to-indigo-600 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full">
      <h3 className="text-xl font-semibold text-white mb-4 capitalize leading-snug">
        {post.title}
      </h3>
      <p className="text-white/90 leading-relaxed text-sm grow">{post.body}</p>
    </div>
  );
};