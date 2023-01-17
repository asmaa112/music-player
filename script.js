let start = document.getElementById('start')
// function play(){

// }
// let a = document.getElementById("audio1");
// let b = document.getElementById("audio2");
// let c = document.getElementById("audio3");

let arr = ['a','b','c']

// function playAudio() {
//   x.play();
// }

let etat = true
arr.forEach(element => {
   let img = document.getElementById(`img-${element}`) 
   let audio = document.getElementById(`audio-${element}`) 
   let tab = img.parentElement.parentElement.children
   img.addEventListener('click', ()=>{
    // console.log(tab)
   for(let i=0 ; i<tab.length ; i++){
    tab[i].children[1].load()
    tab[i].children[1].pause()

   }
    
    if(audio.paused ){

        audio.play();
        // etat = false
    }

    else {
        audio.pause()
        // etat = true
    }
    
   })
});
