import DisplayData from './display.js';

export default class Api {
  constructor() {
    this.GameId = 'lmgRAXyty39emwdkEisa';
    this.ApiEndPoint = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.GameId}/scores/`;
  }

      SaveNewScore = async (username, score) => {
        await fetch(this.ApiEndPoint, {
          method: 'POST',
          body: JSON.stringify({
            user: username,
            score,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => {
            document.querySelector('.message').innerText = json.result;

            this.GetPlayers();
          });
      }

      GetPlayers = async () => {
        const PlayerList = document.querySelector('.PlayerList');
        PlayerList.innerHTML = '<i class="fas fa-spinner fa-pulse"></i>';
        await fetch(this.ApiEndPoint, {
          method: 'Get',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => { DisplayData(json.result); });
      }
}