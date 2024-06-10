
const container =document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist");

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
