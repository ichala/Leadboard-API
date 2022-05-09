import Api from './api.js';

export default class Dom  {
    constructor() {
         this.ApiCalls = new Api();
       }
    initDom = () => {
        this.ApiCalls.GetPlayers();
        const RefrechBtn = document.querySelector('#refrech');
        RefrechBtn.addEventListener('click', (e) => {
           
            this.ApiCalls.GetPlayers();
        });
        const name = document.querySelector('#name');
        name.addEventListener('focus', (e) => {
            document.querySelector('.message').innerText='';
        });
        const score = document.querySelector('#score');
        score.addEventListener('focus', (e) => {
            document.querySelector('.message').innerText='';
        });
        const SubmitBtn = document.querySelector('.ControlList');
        SubmitBtn.addEventListener('submit', (e) => {
            e.preventDefault();
            let name = document.getElementById('name').value;
            let score = document.getElementById('score').value;
             this.ApiCalls.SaveNewScore(name,score);
        });

    }
 
}   

 export const DisplayData = (players) => {
        let PlayerList = document.querySelector('.PlayerList');
        PlayerList.innerHTML='';
        players.forEach(player => {
            const NewPlayer = document.createElement('li');
            NewPlayer.classList.add('SinglePlayer');
            NewPlayer.innerHTML= `<h3>${player.user}</h3>
            <h4>${player.score}</h4>`
            PlayerList.appendChild(NewPlayer)
        });
    }    