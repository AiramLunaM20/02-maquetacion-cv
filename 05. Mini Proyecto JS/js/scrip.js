
const container =document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist"),
mainAudio = container.querySelector(".main-audio"),
playpausedBTN = container.querySelector(".play-pause");




let musicIndex = 1;

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
})

function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb -1].name;
    musicName.Artist = allMusic[indexNumb -1].artist;
    musicImg.src = `images/${allMusic[indexNumb-1].img}.jpeg` ; 
    musicImg.src = `images/${allMusic[indexNumb-1].img}.webp` ; 
    musicImg.src = `images/${allMusic[indexNumb-1].img}.jpeg` ; 
    musicImg.src = `images/${allMusic[indexNumb-1].img}.jpeg` ; 
    musicImg.src = `images/${allMusic[indexNumb-1].img}.jpeg` ; 
    musicImg.src = `images/${allMusic[indexNumb-1].img}.jpeg` ; 
    musicImg.src = `images/${allMusic[indexNumb-1].img}.jpeg` ; 
    
}

function playMusic(){
    container.classList.add("paused");
    playpausedBTN.querySelector("i").innerText = "pause";
    mainAudio.play();
}
function pauseMusic(){
    container.classList.add("paused");
    playpausedBTN.querySelector("i").innerText = "pause";
    mainAudio.paused();
}

playpausedBTN.addEventListener("click", ()=>{
    const isMusicPaused = container.classList.contains("paused");

    isMusicPaused ? pauseMusic() : playMusic();

});

