import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
import { Switch, Route, Link, Router } from "react-router-dom";
import { dummyNotis } from './static/dummyData';
console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Link to="/"><i className="far fa-comment-dots fa-3x" style = {{marginTop : '1rem'}}></i></Link>
      <Link to="/Notis"><i className="far fa-bell fa-3x"></i></Link>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          Total: {dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div>
    <footer>Copyright @ 2021 Code States</footer>  
  </div>;
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        const parsedDate = new Date(tweet.createdAt).toLocaleDateString(
          'ko-KR'
        );

        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              <img src={tweet.picture}/>
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                <span className={(tweet.username==="parkhacker") ? ("tweet__username tweet__username--purple") : ("tweet__username")}>{tweet.username}</span>
                <span className="tweet__createdAt">{parsedDate}</span>
              </div>
                <div className="tweet__message">
                {tweet.content}
                </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Notis = () => {
  return (
    <ul className="notis">
    {dummyNotis.map((notis) => {
      const parsedDate__notis = new Date(notis.createdAt).toLocaleDateString(
        'ko-KR'
      );

      return (
      <li className="tweet noti" key={notis.id}>
        <div className="tweet__profile">
          <i class="fas fa-chevron-right"></i>
        </div>
        <div className="tweet__content">
          <div className="tweet__userInfo">
            <span className="tweet__username">{notis.username}</span>
            <span className="tweet__createdAt">{parsedDate__notis}</span>
          </div>
          <div className="tweet__message">
            {notis.content}
          </div>
        </div>
      </li>
      );
    })}
  </ul>
  );
}

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Tweets />
        </Route>
        <Route path="/Notis">
          <Notis />
        </Route>
      </Switch>
      <Footer />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <section className="pages">
          <Features />
        </section>
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
