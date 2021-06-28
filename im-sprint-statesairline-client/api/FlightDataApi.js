import fetch from 'node-fetch'

export function getFlight(filterBy = {}) {
  // HINT: 가장 마지막 테스트를 통과하기 위해, fetch를 이용합니다. 아래 구현은 완전히 삭제되어도 상관없습니다.
  // TODO: 아래 구현을 REST API 호출로 대체하세요.
  let url = 'http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight';
  let departure = filterBy.departure;
  let destination = filterBy.destination;

  if(departure && destination) {
    url = `http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?departure=${departure}&destination=${destination}`;
  }

  return fetch(url)
    .then((data) => {
      return data.json()
    });
    // .then((json) => {
    //   return new Promise((resolve) => {   // fetch API 자체가 Promise 객체를 선언한 것과 같은데, 왜 Promise를 사용??
    //     setTimeout(() => {                // => setTimeout API 때문에 Web APIs에 비동기 함수가 담기고 아직 처리되지 않았기 때문에 Promise를 사용하므로서 기다려주기 위함이다.
    //       resolve(json);
    //     }, 500)})
    // });
}