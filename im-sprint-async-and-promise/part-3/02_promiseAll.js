var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  return Promise.all([fetch(newsURL), fetch(weatherURL)])
    .then(([newsData, weatherData]) => Promise.all([newsData.json(), weatherData.json()]))
    .then(([news, weather]) => {
      return {
        news: news.data,
        weather: weather
      };
    })
    .catch((err) => err);
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}