import React from 'react';
import './Tweet.css';

const Tweet = ({ tweet = {} }) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-kr');

  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">
        <img src={tweet.picture} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            <div className="tweet__username">{tweet.username}</div>
            <div className="tweet__createdAt">{parsedDate}</div>
          </div>
        </div>
        <div className="tweet__message">
          {tweet.content}
        </div>
      </div>
    </li>
  );
};

export default Tweet;
