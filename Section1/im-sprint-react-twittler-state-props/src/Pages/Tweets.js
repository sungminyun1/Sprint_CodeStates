import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  const [tweets, setTweets] = useState(dummyTweets);
  const [originSaver, setOriginSaver] = useState(dummyTweets);
  const [tweetName, setTweetName] = useState('parkhacker');
  const [tweetMsg, setTweetMsg] = useState('');
  const [optionVal, setOptionVal] = useState("origin");
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    const originSaverName = originSaver.map((el) => el.username);
    const noOverLapOriginName = originSaverName.reduce((acc, cur) => {
      if(acc.indexOf(cur) === -1) {
        acc.push(cur);
      }
      return acc;
    }, []);
    setNameList(noOverLapOriginName);
  }, [originSaver]);

  useEffect(() => {
    if(tweets.length === 0) {
      setTweets(originSaver);
    }
  }, [tweets])

  const handleKeyPress = (event) => {
    if (event.code === 'Enter') {
      handleButtonClick();
    }
  }

  const handleButtonClick = () => {
    if(optionVal === "origin") {
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
      const newTweets = [tweet, ...tweets];
      setTweets(newTweets);
      setOriginSaver(newTweets);
      setTweetMsg('');
    }
  };

  const handleChangeUser = (event) => {
    setTweetName(event.target.value);
  };

  const handleChangeMsg = (event) => {
    setTweetMsg(event.target.value);
  };

  const handleClickOption = (event) => {
    setOptionVal(event.target.value);
    const filterBy = tweets.filter((el) => el.username === event.target.value);
    if(event.target.value === "origin") {
      const mapBy = originSaver.map((el) => el.username);
      const noOverLap = mapBy.reduce((acc, cur) => {
        if(acc.indexOf(cur) === -1) {
          acc.push(cur);
        }
        return acc;
      }, []);
      setTweets(originSaver);
      setNameList(noOverLap);
    } else {
      setTweets(filterBy);
      if(filterBy.length === 0) {
        setNameList([]);
      } else {
        setNameList([filterBy[0].username]);
      }
    }
  }

  const handleDelete = (tweetId) => {
    const filterByTweets = tweets.filter((el) => el.id !== tweetId);
    const filterByOrigin = originSaver.filter((el) => el.id !== tweetId);
    setTweets(filterByTweets);
    setOriginSaver(filterByOrigin);
  }

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
                  onKeyPress={handleKeyPress}
                ></input>
                <textarea
                  className="tweetForm__input--message"
                  placeholder="your tweet here.."
                  value={tweetMsg}
                  onChange={handleChangeMsg}
                  onKeyPress={handleKeyPress}
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
      <div className="tweet__selectUser">
        <select onClick={handleClickOption}>
          <option value="origin">-- click to filter tweets by username --</option>
          {nameList.map((tweetName, idx) => {
            return (
              <option key={idx}>{tweetName}</option>
            )
          })}
        </select>
      </div>
      <ul className="tweets">
        {tweets.map((tweet, idx) => {
          return (
            <Tweet key={idx} tweet={tweet} handleDelete={handleDelete} />
          )
        })}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
