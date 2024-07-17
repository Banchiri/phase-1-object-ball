function gameObject(){
   return {
    home: {
      teamName:"Chelsea",
      colours: ["red", "blue", "orange"],
      players: {
            "Alan Anderson":{
                "number": 0,
                "shoe":16,
                "points":22,
                "rebounds":12,
                "assists":12,
                "steals":3,
                "blocks":1,
                "slamDunks":1

            },
            "Reggie Evans":{
                "number": 30,
                "shoe":14,
                "points":12,
                "rebounds":12,
                "assists":12,
                "steals":12,
                "blocks":2,
                "slamDunks":7
            },
            "Brook Lopez":{
                "number": 11,
                "shoe":17,
                "points":17,
                "rebounds":19,
                "assists":10,
                "steals":3,
                "blocks":1,
                "slamDunks":7
            },
            "Mason Plumlee":{
                "number":1,
                "shoe":19,
                "points":26,
                "rebounds":12,
                "assists":6,
                "steals":3,
                "blocks":8,
                "slamDunks":5
            },
            "Jason Terry":{
                "number":30,
                "shoe":14,
                "points":12,
                "rebounds":12,
                "assists":12,
                "steals":12,
                "blocks":12,
                "slamDunks":7
            }
        }
    },
    away:{
      teamName:"Arsenal",
      colours :["blue", "grey", "orange"],
      players :{
        "Jeff Adrien":{
            "number": 4,
            "shoe":18,
            "points":10,
            "rebounds":1,
            "assists":1,
            "steals":2,
            "blocks":7,
            "slamDunks":2

        },
        "Bismark Biyombo":{
            "number": 0,
            "shoe":16,
            "points":12,
            "rebounds":4,
            "assists":7,
            "steals":7,
            "blocks":15,
            "slamDunks":10
        },
        "DeSagna Diop":{
            "number": 2,
            "shoe":14,
            "points":24,
            "rebounds":12,
            "assists":12,
            "steals":4,
            "blocks":5,
            "slamDunks":5
        },
        "Ben Gordon":{
            "number": 8,
            "shoe":15,
            "points":33,
            "rebounds":3,
            "assists":2,
            "steals":1,
            "blocks":1,
            "slamDunks":0
        },
        "Brendan Haywood":{
            "number": 33,
            "shoe":15,
            "points":6,
            "rebounds":12,
            "assists":12,
            "steals":22,
            "blocks":5,
            "slamDunks":12
        }
    }
}
};
}
console.log(gameObject());
function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      if (team.players[playerName]) {
        return team.players[playerName].points;
      }
    }
    return null;
  }
  
   console.log(numPointsScored("Alan Anderson")); 
   function shoeSize(playerName){
    const game = gameObject();
    for(const teamKey in game){
        const team = game[teamKey];
        if(team.players[playerName]){
            return team.players[playerName].shoe;
        }
    }
    return null;


}
console.log(shoeSize("DeSagna Diop"))
function teamColors(teamName){
    const game = gameObject();
    for(const teamKey in game){
        const team = game[teamKey];
        if(team.teamName === teamName){
            return team.colors;
        }
    }
    return null;
}
console.log(teamColors("Arsenal"))
function teamNames(){
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];

}
function playerNumbers(teamName){
    const game = gameObject();
    for(const teamKey in game){
        const team = game[teamKey];
        if(team.teamName === teamName){
            return team.players[playerName].number;
        }
    }
    return null;
}

function playerStats(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      const team = game[teamKey];
      if (team.players[playerName]) {
        return team.players[playerName];
      }
    }
    return null;
  }
  function bigShoeRebounds(){
    const game =gameObject();
    let maxShoeSize = 0;
    let rebounds = 0;
    for(const teamKey in game){
        const team = game[teamKey];
        for(const playerKey in team.players){
            const player = team.players[playerKey];
            if(player.shoe > maxShoeSize){
                maxShoeSize = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }
    return rebounds;
  }
  console.log(bigShoeRebounds());
function mostPointsScored(){
    const game = gameObject();
    let maxpoints = 0;
    let highestscorer = "";
    for(const teamKey in game){
        const team = game[teamKey];
        for(const playerKey in team.players){
            const player = team.players[playerKey];
            if(player.points > maxpoints){
                maxpoints = player.points;
                highestscorer = playerKey;
            }
        }
    }
    return highestscorer;
}
console.log(mostPointsScored());
//iterate through both teams
//sum up the points for all the players ineach team
//compare

function winningTeam(){
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
    //hometeam
    for(const player in game.home.players ){
        homeTeamPoints += game.home.players[player].points;
    }
    //awayteam
    for(const player in game.away.players){
        awayTeamPoints += game.away.players[player].points;
    }
    //compare
    if(homeTeamPoints > awayTeamPoints){
        return game.home.teamName;
    }
    else{
        return game.away.teamName;
    }
}
console.log(winningTeam());
function playerWithLongestName(){
    const game = gameObject();
    let longestname = "";
    for(const player in game.home.players){
        if(player.length > longestname.length){
            longestname = player;
        }
    }
    for(const player in game.away.players){
        if(player.lenght > longestname){
            longestname = player;
        }
    }
    return longestname;
}
console.log(playerWithLongestName());

