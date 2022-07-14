// HOME
    // BUTTONS
    const freeThrowHome = document.getElementById("home-btn-1");
    const basketHome = document.getElementById("home-btn-2");
    const threePointerHome = document.getElementById("home-btn-3");
    // SCORE
    let homePoints = 0;
    let homeScore = document.getElementById("home-score");

// AWAY
    // BUTTONS
    const freeThrowAway = document.getElementById("away-btn-1");
    const basketAway = document.getElementById("away-btn-2");
    const threePointerAway = document.getElementById("away-btn-3");
    // SCORE
    let awayPoints = 0;
    let awayScore = document.getElementById("away-score");

    // HOME FUNCTIONS   
    freeThrowHome.addEventListener('click', function(){
        homePoints += 1 ;
        homeScore.textContent = homePoints;   
    })

    basketHome.addEventListener('click', function(){
        homePoints += 2;
        homeScore.textContent = homePoints;
    })
    threePointerHome.addEventListener('click', function(){
        homePoints += 3;
        homeScore.textContent = homePoints;
    })






    //  AWAY FUNCTIONS  
    freeThrowAway.addEventListener('click', function(){
        awayPoints += 1;
        awayScore.textContent = awayPoints;
    })

    basketAway.addEventListener('click', function(){
        awayPoints += 2;
        awayScore.textContent = awayPoints;
    })
    threePointerAway.addEventListener('click', function(){
        awayPoints += 3;
        awayScore.textContent = awayPoints;
    })
