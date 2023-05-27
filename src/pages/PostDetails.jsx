import React, { useContext } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import { MyContext } from "../plugins/MyContext";

function PostDetails() {
  const posts = useContext(MyContext);
  const locationPathID = location.pathname.split("/");
  const indexNum = locationPathID.slice(locationPathID.length - 1).toString();
  const selectedPost = posts[indexNum - 1];
  console.log(posts);
  return (
    <div className="post">
      <NavLink to="/posts" className="backButton">{`<- Back`}</NavLink>
      <h1>{selectedPost.title}</h1>
      <img
        src={selectedPost.image}
        alt={`post-${selectedPost.id}`}
        className="postImage"
      />
      <div className="author">
        <h5>{selectedPost.author}</h5>
        <h5>{selectedPost.date}</h5>
      </div>
      <div className="postText">{selectedPost.text}</div>
      <div className="likesAndComments">
        <div className="postLikes"></div>
        <div className="postComments"></div>
      </div>
      <div className="commentSection">
        <div className="postLeaveComment">
          <h3>Leave a Comment:</h3>
          <textarea
            name="postComment"
            id="postComment"
            cols="50"
            rows="10"
          ></textarea>
          <Button type="submit" name="submitComment">
            Send
          </Button>
        </div>
        <div className="commentsSection">
          <h3>Comments:</h3>
          {selectedPost.comments.map((comment) => (
            <div className="comment" key={comment.author}>
              <div className="commentAuthor">{comment.author}</div>
              <div className="commentText">{comment.text}</div>
              <div className="dateAndLikes">
                <div className="commentDate">{comment.date}</div>
                <div
                  className={comment.isLiked ? "likedButton" : "defaultLike"}
                >
                  {comment.likes}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
