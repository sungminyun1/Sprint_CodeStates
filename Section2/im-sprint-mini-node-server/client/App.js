class App {
  init() {
    document
      .querySelector('#to-upper-case')
      .addEventListener('click', this.toUpperCase.bind(this));
    document
      .querySelector('#to-lower-case')
      .addEventListener('click', this.toLowerCase.bind(this));
  }
  post(path, body) {
    fetch(`http://localhost:5000/${path}`, {
      method: 'POST',
      body: JSON.stringify({text: body}),  // <- Express에서 진행하기 위한 코드 (순수 노드 버전일 때는 body: JSON.stringify(body))
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'text/plain'  <- Simple Requests 이기 때문에 preflight 요청이 들어가지 않는다!
      }
    })
      .then(res => {
        console.dir(res);
        return res.json();
      })
      .then(res => {
        console.log(res);
        return this.render(res);
      });
  }
  toLowerCase() {
    const text = document.querySelector('.input-text').value;
    this.post('lower', text);
  }
  toUpperCase() {
    const text = document.querySelector('.input-text').value;
    this.post('upper', text);
  }
  render(response) {
    const resultWrapper = document.querySelector('#response-wrapper');
    document.querySelector('.input-text').value = '';
    resultWrapper.innerHTML = response;
  }
}

const app = new App();
app.init();
