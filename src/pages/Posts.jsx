import React, { useContext } from "react";
import { MyContext } from "../plugins/MyContext";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

function Posts({ addPost }) {
  let posts = useContext(MyContext);
  const likeBtnHandler = (e, key) => {
    e.preventDefault();
    e.target.classList.toggle("fa-heart-o");
    e.target.classList.toggle("fa-heart");
    e.target.classList.toggle("active");
    changeLikeCount(key);
  };
  const changeLikeCount = (key) => {
    let post = posts.slice(key, key + 1);
    if (post.length !== 0) {
      if (post[0].isLiked) {
        post[0].isLiked = false;
        post[0].likes -= 1;
      } else {
        post[0].isLiked = true;
        post[0].likes += 1;
      }
      const postsDup = [...posts];
      postsDup.splice(key, 1, post[0]);
      addPost(postsDup);
    }
  };
  const likeButton = document.querySelectorAll(".likeButton");
  likeButton.forEach((button) => {
    button.addEventListener("click", likeBtnHandler);
  });
  return (
    <div className="posts">
      <div className="options">
        <div>
          <Button type="button" name="all-posts-btn">
            All Posts
          </Button>
          <Button type="button" name="favorites-btn">
            Favorites
          </Button>
        </div>
        <NavLink to="create-post" className="create-post-btn">
          <i className="fa fa-plus" aria-hidden="true"></i>
          <div>Create Post</div>
        </NavLink>
      </div>
      <div className="cards">
        {posts.map((post, key) => (
          <NavLink to={`${post.id}`} key={post.id} className="card">
            <div className="card" key={post.id}>
              <div className="cardImg">
                <img
                  src={post.image}
                  alt={`post-${post.id}`}
                  className="cardImage"
                />
              </div>
              <div className="cardInfo">
                <div className="cardInfo-texts">
                  <div className="cardInfo-title">{post.title}</div>
                  <div className="cardInfo-text">{post.text}</div>
                </div>
                <div className="cardInfo-line"></div>
                <div className="cardInfo-stats">
                  <div className="cardInfo-stats-dateAuthor">
                    <div className="stats-date">{post.date}</div>·
                    <div className="stats-author">{post.author}</div>
                  </div>
                  <div className="cardInfo-stats-commentLike">
                    <div className="cardInfo-comments">
                      <i className="fa fa-comments-o" aria-hidden="true"></i>
                      {post.comments.length}
                    </div>
                    <div className="cardInfo-likes">
                      {post.isLiked ? (
                        <i
                          className="likeButton fa fa-heart active"
                          aria-hidden="true"
                          onClick={(e) => likeBtnHandler(e, key)}
                        ></i>
                      ) : (
                        <i
                          className="likeButton fa fa-heart-o"
                          aria-hidden="true"
                          onClick={(e) => likeBtnHandler(e, key)}
                        ></i>
                      )}
                      {post.likes}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="favorite-cards"></div>
    </div>
  );
}

export default Posts;
