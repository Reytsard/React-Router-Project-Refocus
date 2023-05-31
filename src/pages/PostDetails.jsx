import React, { useCallback, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../plugins/MyContext";

function PostDetails({ likeHandler, commentHandler, commentLikeHandler }) {
  const posts = useContext(MyContext);
  const locationPathID = location.pathname.split("/");
  const indexNum = locationPathID.slice(locationPathID.length - 1).toString();
  const selectedPost = posts[indexNum - 1];
  const likeBtnHandler = (e) => {
    likeHandler(e, indexNum - 1);
  };
  const [comment, setComment] = useState("");
  const textCommentHandler = useCallback(
    (e) => {
      setComment(e.target.value);
    },
    [comment]
  );
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
  const sendBtnHandler = (e) => {
    if (comment === "") {
    } else {
      const userComment = {
        text: comment,
        author: "ronald", //if real use with user's name
        date: getDate(),
        likes: 0,
        isLiked: false,
      };
      commentHandler(e, indexNum - 1, userComment);
      setComment("");
    }
  };
  const commentLikeBtnHandler = (e, key, indexNum) => {
    commentLikeHandler(e, key, indexNum);
  };
  return (
    <div className="post">
      <NavLink to="/posts" className="backButton">
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
        {`Back`}
      </NavLink>
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
        <div className="postComments">
          <i className="fa fa-comments-o" aria-hidden="true"></i>
          {selectedPost.comments.length}
        </div>
        <div className="postLikes">
          {selectedPost.isLiked ? (
            <i
              className="likeButton fa fa-heart active"
              aria-hidden="true"
              onClick={likeBtnHandler}
            ></i>
          ) : (
            <i
              className="likeButton fa fa-heart-o"
              aria-hidden="true"
              onClick={likeBtnHandler}
            ></i>
          )}
          {selectedPost.likes}
        </div>
      </div>
      <div className="commentSection">
        <div className="postLeaveComment">
          <h3>Leave a Comment:</h3>
          <textarea
            name="postComment"
            id="postComment"
            cols="50"
            rows="10"
            onChange={textCommentHandler}
            value={comment}
          ></textarea>
          <button className="submitComment" onClick={sendBtnHandler}>
            Send
          </button>
        </div>
        <div className="commentsSection">
          <h3>Comments:</h3>
          {selectedPost.comments.map((comment, key) => (
            <div
              className="comment"
              key={comment.text + comment.author + Math.random()}
            >
              <div className="commentIgg"></div>
              <div className="commentAuthor">{comment.author}</div>
              <div className="commentText">{comment.text}</div>
              <div className="dateAndLikes">
                <div className="commentDate">{comment.date}</div>
                <div
                // className={comment.isLiked ? "likedButton" : "defaultLike"}
                >
                  {comment.isLiked ? (
                    <i
                      className="likeButton fa fa-heart active"
                      aria-hidden="true"
                      onClick={(e) => commentLikeBtnHandler(e, key, indexNum)}
                    ></i>
                  ) : (
                    <i
                      className="likeButton fa fa-heart-o"
                      aria-hidden="true"
                      onClick={(e) => commentLikeBtnHandler(e, key, indexNum)}
                    ></i>
                  )}
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
