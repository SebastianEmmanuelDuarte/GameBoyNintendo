// // document.getElementById("VideoPlay")
// const PlayGame= {
//     Led:document.getElementById("Led"),
//     Gameplay1:document.getElementById("Mario"),
//     Gameplay2:document.getElementById("Tetris"),
// }
// function on() {    
//     PlayGame.Gameplay1.volume=0.15;
//     PlayGame.Gameplay1.play();
//     document.getElementById("Mario").classList.add("PlayOpacity");
//     // document.getElementById("Tetris").classList.add("PlayOpacity");
// } //la Creo una funcion (on) va a habilitar la clase "PlayOpacity"// 
let Menu=document.getElementById("Selection"),
    Gameplay=document.getElementById("Gameplay"),
    Videos=[
        "./super-mario-land.mp4",
        "./Tetrisvideo.mp4",
    ],
    VideoActivo=0,
    Segundero=[
        0, 0
    ],
    Ready=false;    

function Start() {
    if(Menu.classList.value.search("PlayOpacity") == -1)
        Menu.classList.add("PlayOpacity");
    else 
        Menu.classList.remove("PlayOpacity");
        Gameplay.classList.remove("PlayOpacity");
}
function Click(value) { console.log(value);
    console.log(Videos[value]);
    if(Menu.classList.value.search("PlayOpacity") >= 0) {
        Menu.classList.remove("PlayOpacity");
        Gameplay.classList.add("PlayOpacity");
        Gameplay.src=Videos[value];
        VideoActivo=value;
        Gameplay.currenTime=Segundero[value];
        Gameplay.play();
        Ready=true;
        Gameplay.volume=0.1;
    }
    //hola//
    else if(value==VideoActivo) {
        if(Ready)  {
            Ready=false;
            Gameplay.pause();
            Segundero[VideoActivo]=Gameplay.currenTime;
        }
        else {
            Ready=true;
            Gameplay.play();
            Gameplay.currenTime=Segundero[VideoActivo];
        }
    }
}
function Volumen(value) {
    if(value > 0 && Gameplay.volume < 0.9) {
        Gameplay.volume += value;
    }
    else if(value < 0  && Gameplay.volume > 0.1) {
        Gameplay.volume += value;
    }
    else console.warn(`${value > 0 ? "El valor no puede incrementar." : "El valor no puede disminuir."}`);
    console.log(Gameplay.volume);
}
function seek(value) {
    Gameplay.currentTime += value;
}
