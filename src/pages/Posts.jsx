import React, { useContext, useMemo } from "react";
import { MyContext } from "../plugins/MyContext";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

function Posts() {
  const posts = useContext(MyContext);
  // const mapPosts = useMemo(() => {});
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
          Create Post
        </NavLink>
      </div>
      <div className="cards">
        {posts.map((post) => (
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
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
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
