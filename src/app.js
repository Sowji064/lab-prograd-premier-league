//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(arr) {
  let expectedResult = {};
  if (arr.length == 0) {
    expectedResult = null;
  } else if (arr.length == 2) {
    expectedResult = {
      defender: arr[0],
      midfield: arr[1],
      forward: undefined,
    };
  } else {
    expectedResult = {
      defender: arr[0],
      midfield: arr[1],
      forward: arr[2],
    };
  }
  return expectedResult;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let expectedResult = players.filter(function (player) {
    return player.debut == year;
  });

  return expectedResult;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let expectedResult = players.filter(function (player) {
    return player.position == position;
  });

  return expectedResult;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardg) {
  let expectedResult = players.filter(function (player) {
    for (let i = 0; i < player.awards.length; i++) {
      if (player.awards[i].name == awardg) {
        return player;
      }
    }
  });

  return expectedResult;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardg, times) {
  let expectedResult = players.filter(function (player) {
    let timesDup = times;
    for (let i = 0; i < player.awards.length; i++) {
      if (player.awards[i].name == awardg) {
        timesDup -= 1;
      }
    }
    if (timesDup == 0) {
      return player;
    }
  });

  return expectedResult;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardg, count) {
  let expectedResult = players.filter(function (player) {
    if (player.country == count) {
      for (let i = 0; i < player.awards.length; i++) {
        if (player.awards[i].name == awardg) {
          return player;
        }
      }
    }
  });

  return expectedResult;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(awa, tea, ag) {
  let expectedResult = players.filter(function (player) {
    if (player.awards.length >= awa && player.team == tea && player.age <= ag) {
      return player;
    }
  });

  return expectedResult;
}
//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
