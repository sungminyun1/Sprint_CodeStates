var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  const result = {};
  return fetch(newsURL)
    .then((data) => data.json())
    .then((json) => {
      result.news = json.data;
      return fetch(weatherURL);
    })
    .then((data) => data.json())
    .then((json) => {
      result.weather = json;
      return result;
    })
    .catch((err) => err);
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}