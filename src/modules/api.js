import { DisplayData } from "./dom";

export default class Api  {
    constructor() {
       this.GameId = '6ScDVDRVcnuuBrqigcTY';
       this.ApiEndPoint =`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.GameId}/scores/`
      }

      SaveNewScore = async(username,score) => {
        await  fetch(this.ApiEndPoint, {
                        method: 'POST',
                        body: JSON.stringify({ 
                            "user": username,
                            "score":score
                        }),
                        headers: {
                          'Content-type': 'application/json; charset=UTF-8',
                        },
                      })
                        .then((response) => response.json())
                        .then((json) => {
                            document.querySelector('.message').innerText=json.result;
                        
                            this.GetPlayers()}); 
      }
      
      GetPlayers = async() => {
        let PlayerList = document.querySelector('.PlayerList');
        PlayerList.innerHTML='<i class="fas fa-spinner fa-pulse"></i>';
        await  fetch( this.ApiEndPoint, {
                        method: 'Get',
                        headers: {
                          'Content-type': 'application/json; charset=UTF-8',
                        },
                      })
                        .then((response) => response.json())
                        .then((json) => {DisplayData(json.result)}); 
      }
        // call this function to create a new game id 
        //   CreateGame = async () => {  
        //       if (!this.GameId) {
        //         await  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
        //             method: 'POST',
        //             body: JSON.stringify({ 
        //                 "name": "iChala Game" 
        //             }),
        //             headers: {
        //               'Content-type': 'application/json; charset=UTF-8',
        //             },
        //           })
        //             .then((response) => {console.log(response); response.json()})
        //             .then((json) => console.log(json)); //copy new id in this.GameId
        //       }
        // }
        
}