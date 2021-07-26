import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet(){
  return(
    <div className = "tweet">
      <Avatar />
      <div className = "content">
        <NameWithHandle /><Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <ReTweetButton />
          <LikeButton />
          <MoreOptionButton />
        </div>
      </div>
      </div>
  );
}
function Avatar(){
  return(
    <img src = "https://www.gravatar.com/avatar/nothing" className = "avatar" alt="avatar" />
  );
}
function Message(){
  return(
    <div className = "message">This is Less than 140 character long.</div>
  );
}
function NameWithHandle(){
  return(
    <span className="name-with-handle">
    <span className="name">Your Name</span>
    <span className="handle">@yourhandle</span>
    </span>
  );
}
const Time = () => (
<span className="time">  -  3h ago</span>
);
const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
  );
const ReTweetButton = () => (
  <i className="fa fa-retweet retweet-button" />
  );
const LikeButton = () => (
  <i className="fa fa-heart like-button" />
  );
const MoreOptionButton = () => (
  <i className="fa fa-ellipsis-h more-option-button" />
  );


ReactDOM.render(<Tweet />,document.getElementById('root'));