import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import About from './Pages/About';
import Mypage from './Pages/MyPage';

import './App.css';

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Switch>
              <Route exact path="/">
                <Tweets />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/mypage">
                <Mypage />
              </Route>
            </Switch>
          </section>
        </main>
      </div>
    </Router>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
