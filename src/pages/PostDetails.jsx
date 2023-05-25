import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Button from "../components/Button";

function PostDetails() {
  const locationPathID = location.pathname.charAt(location.pathname.length - 1);
  const posts = useLoaderData();
  const selectedPost = posts[locationPathID - 1];
  return (
    <div className="post">
      <NavLink path="/posts">{`<- Back`}</NavLink>
      <h1>{selectedPost.title}</h1>
      <div className="author">
        {/* <img src="" alt="" /> */}
        <h5>{selectedPost.author}</h5>
        <h5>{selectedPost.date}</h5>
      </div>
      <div className="postText">{selectedPost.text}</div>
      <div className="likesAndComments">
        <div className="postLikes"></div>
        <div className="postComments"></div>
      </div>
      <div className="postLeaveComment">
        <h3>Leave a Comment:</h3>
        <textarea
          name="postComment"
          id="postComment"
          cols="30"
          rows="10"
        ></textarea>
        <Button type="submit" name="submitCommment">
          Send
        </Button>
      </div>
      <div className="commentsSection">
        <h3>Comments:</h3>
        {selectedPost.comments.map((comment) => (
          <div className="comment">
            <div className="commentAuthor">{comment.author}</div>
            <div className="commentText">{comment.text}</div>
            <div className="dateAndLikes">
              <div className="commentDate">{comment.date}</div>
              <div className="commentLikes">{comment.likes}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostDetails;

export const PostDetailsLoader = async () => {
  const res = await fetch("http://localhost:5173/posts.json/");
  return res.json();
};
