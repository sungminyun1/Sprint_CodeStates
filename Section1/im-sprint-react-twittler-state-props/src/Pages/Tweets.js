import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  const [tweets, setTweets] = useState(dummyTweets);
  const [tweetName, setTweetName] = useState('parkhacker');
  const [tweetMsg, setTweetMsg] = useState('');

  const handleButtonClick = () => {

    const getRandomNumber = (min, max) => {
      return parseInt(Math.random() * (Number(max) - Number(min) + 2));
    };

    const tweet = {
      id: `${getRandomNumber(6,98)}`,
      username: tweetName,
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      content: tweetMsg,
      createdAt: '2019-02-25T16:17:47.000Z',
      updatedAt: '2019-02-25T16:17:47.000Z',
    };
    const newTweets = [...tweets];
    newTweets.unshift(tweet);
    setTweets(newTweets);
    setTweetMsg('');
  };

  const handleChangeUser = (event) => {
    setTweetName(event.target.value);
  };

  const handleChangeMsg = (event) => {
    setTweetMsg(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  value={tweetName}
                  onChange={handleChangeUser}
                ></input>
                <textarea
                  className="tweetForm__input--message"
                  placeholder="your tweet here.."
                  value={tweetMsg}
                  onChange={handleChangeMsg}
                  ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  total: {tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button
                  className="tweetForm__submitButton"
                  onClick={handleButtonClick}
                >
                  Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {tweets.map((tweet, idx) => {
          return (
            <Tweet key={idx} tweet={tweet} />
          )
        })}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
