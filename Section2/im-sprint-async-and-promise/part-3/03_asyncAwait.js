var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  try {
    const newsData = await fetch(newsURL).then((data) => data.json()).then((json) => json.data).catch((err) => err);
    const weatherData = await fetch(weatherURL).then((data) => data.json()).then((json) => json).catch((err) => err);

    return {
      news: newsData,
      weather: weatherData
    };
  }

  catch(err) {
    return err;
  }
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}