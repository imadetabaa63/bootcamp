import React from "react";
import posts from "../posts.json";

const PostList = () => {
  return (
    <div>
      <h2>Liste des articles</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PostList;
