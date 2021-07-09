const fs = require("fs");

const getDataFromFilePromise = filePath => {
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf8', function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
};

getDataFromFilePromise().then((data) => data).catch((err) => err);

getDataFromFilePromise('README.md').then(data => console.log(data));

module.exports = {
  getDataFromFilePromise
};
