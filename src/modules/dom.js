import Api from './api.js';

export default class Dom {
  constructor() {
    this.ApiCalls = new Api();
  }

    initDom = () => {
      this.ApiCalls.GetPlayers();
      const RefrechBtn = document.querySelector('#refrech');
      RefrechBtn.addEventListener('click', () => {
        this.ApiCalls.GetPlayers();
      });
      const name = document.querySelector('#name');
      name.addEventListener('focus', () => {
        document.querySelector('.message').innerText = 'Waiting to submit ..';
      });
      const score = document.querySelector('#score');
      score.addEventListener('focus', () => {
        document.querySelector('.message').innerText = 'Waiting to submit ..';
      });
      const SubmitBtn = document.querySelector('.ControlList');
      SubmitBtn.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const score = document.getElementById('score').value;
        this.ApiCalls.SaveNewScore(name, Number(score));
      });
    }
}
