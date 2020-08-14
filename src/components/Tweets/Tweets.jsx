import React, { useState } from "react";
import TweetFooter from "./TweetFooter";
import CommentSection from "../Comment/CommentSection";

export default function Tweets(props) {
  const [commentVisible, setCommentVisible] = useState(false);

  const toggleComment = () => {
    commentVisible ? setCommentVisible(false) : setCommentVisible(true);
  };
  return (
    <div className="card m-3">
      <div className="card-header row m-0">
        <img
          className="img-bordered-primary img-circle m-2"
          height="35px"
          src={props.profile_image}
          alt=""
        />
        <span className="align-self-center ml-2">{props.name}</span>
        <div className="mr-auto"></div>
        <div className="btn btn-outline-success my-2  mr-2">
          {props.activeUser.name === props.name ? "Delete" : "Follow"}
        </div>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{props.text}</p>
          <footer className="blockquote-footer">{props.created_at} </footer>
        </blockquote>
      </div>
      {props.loggedin && <TweetFooter onClick={() => toggleComment()} />}
      {commentVisible && (
        <CommentSection
          comments={props.comments}
          createComment={props.createComment}
          tweet_id={props.tweet_id}
        />
      )}
    </div>
  );
}