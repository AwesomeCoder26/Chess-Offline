function play(){
    let whitePlayer = document.getElementById("white").value;
    let blackPlayer = document.getElementById("black").value;

    // store names of white and black players
    localStorage.setItem("WhitePlayer", whitePlayer);
    localStorage.setItem("BlackPlayer", blackPlayer);

    location.replace('./game.html');
}

