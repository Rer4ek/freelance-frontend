
const defaultImage = 'url("/src/BG1.jpg") no-repeat'

export function changeBackgroundToColor(color){
    let background = document.getElementById("background-container");
    background.style.background = "none";
    background.style.backgroundColor = color;
}

export function changeBackgroundImage(url){
    let background = document.getElementById("background-container");
    background.style.background = url;
    background.style.backgroundSize = 'cover'
}

export function setDefaultBackground(){
    let background = document.getElementById("background-container");
    background.style.background = defaultImage;
    background.style.backgroundSize = 'cover'
}