import React, { useCallback, useContext, useMemo, useState } from "react";
import { PostImage } from "../components/PostImage";
import { NavLink } from "react-router-dom";
import { MyContext } from "../plugins/MyContext";

function CreatePost({ addPost }) {
  const posts = useContext(MyContext);
  const [image, setImage] = useState("");
  const handleImageSuccess = (imageUrl) => {
    setImage(imageUrl);
  };
  const [title, setTitle] = useState("");
  const [textForPost, setText] = useState("");

  const textHandler = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );
  const changeTitleHandler = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || textForPost === "") {
    } else {
      newPosts();
      const modalDisplay = document.querySelector(".modal");
      modalDisplay.setAttribute("style", "display:grid");
    }
  };
  const getDate = () => {
    const date = new Date();
    const month = () => {
      let month = date.getMonth();
      return month == 0
        ? "January"
        : month == 1
        ? "Febuary"
        : month == 2
        ? "March"
        : month == 3
        ? "April"
        : month == 4
        ? "May"
        : month == 5
        ? "June"
        : month == 6
        ? "July"
        : month == 7
        ? "August"
        : month == 8
        ? "September"
        : month == 9
        ? "October"
        : month == 10
        ? "November"
        : "December";
    };
    const day = date.getDate();
    const year = date.getFullYear();
    return month() + " " + day + ", " + year;
  };

  const newPosts = () => {
    const post = {
      id: posts.length + 1,
      title: title,
      text: textForPost,
      author: "arnold",
      date: getDate(),
      likes: 0,
      isLiked: false,
      image: image,
      comments: [],
    };
    addPost([...posts, post]);
  };
  return (
    <div className="create-post">
      <NavLink to="/posts" className="back-btn">{`<- Back`}</NavLink>
      <form className="form" name="createPost">
        <h2>New Post</h2>
        <div className="titleBox">
          <h3>Add Title*</h3>
          <input
            value={title}
            onChange={changeTitleHandler}
            type="text"
            placeholder="Title Here"
            className="TitleBox"
            required
          />
        </div>
        <div className="textBox">
          <h3>Add Text*</h3>
          <textarea
            name="text"
            id="textBox"
            cols="50"
            rows="10"
            className="TextBox"
            value={textForPost}
            onChange={textHandler}
          ></textarea>
        </div>
        <PostImage addImageSuccessful={handleImageSuccess} />
        <button type="submit" className="post-btn" onClick={handleSubmit}>
          Post
        </button>
      </form>
      <div className="modal">
        <div className="d-box">
          <h4>Post has beed created!</h4>
          <NavLink to="/posts">Return to posts</NavLink>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
