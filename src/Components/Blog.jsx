import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="card bg-base-100 card-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{blog.title}</h2>
        <div className="border-b-2 border-gray-400 border-dashed"></div>
        <p>{blog.content}</p>
        <div className="justify-start text-gray-400 card-actions">
          <span>Added at</span> <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
