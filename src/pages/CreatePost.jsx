import React from "react";
import { PostImage } from "../components/PostImage";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

function CreatePost() {
  const handleImageSuccess = (imageUrl) => {
    console.log(imageUrl);
  };
  return (
    <div className="create-post">
      <NavLink to="/posts" className="back-btn">{`<- Back`}</NavLink>
      <h2>New Post</h2>
      <div className="titleBox">
        <h3>Add Title*</h3>
        <input type="text" placeholder="Title Here" className="TitleBox" />
      </div>
      <div className="textBox">
        <h3>Add Text*</h3>
        <textarea
          name="text"
          id="textBox"
          cols="30"
          rows="10"
          className="TextBox"
        ></textarea>
      </div>
      <PostImage addImageSuccessful={handleImageSuccess} />
      <Button type="submit" name="post-btn">
        Post
      </Button>
    </div>
  );
}

export default CreatePost;
