import React, { useState } from "react";
import postList from "./post.js";
import PostTable from "./tables/PostTables";
import AddPostForm from "./forms/AddPostForm";
import EditUserForm from "./forms/EditPostForm";

const App = () => {
  const [posts, setPosts] = useState(postList);

  const addPost = (post) => {
    post.id = posts.length + 1;
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialPost = { id: null, title: "", description: "" };

  const [currentPost, setCurrentPost] = useState(initialPost);

  const editPost = (id, post) => {
    setEditing(true);
    setCurrentPost(post);
  };

  const updatePost = (newPost) => {
    setPosts(
      posts.map((post) => (post.id === currentPost.id ? newPost : post))
    );
    setCurrentPost(initialPost);
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>Syook Test</h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit Post</h2>
              <EditUserForm
                currentPost={currentPost}
                setEditing={setEditing}
                updatePost={updatePost}
              />
            </div>
          ) : (
            <div>
              <h2>Add Post</h2>
              <AddPostForm addPost={addPost} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View post</h2>
          <PostTable
            posts={posts}
            deletePost={deletePost}
            editPost={editPost}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
