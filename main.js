document.body.addEventListener('keyup', (event)=>{
    playSound( event.code.toLowerCase() )
})

document.querySelector('.container-button button').addEventListener('click', ()=>{
    let song = document.getElementById('composition').value
    console.log(song.split(''))
    
    if(song !== ''){
        let songArray = song.split('')
        
        playComposition(songArray)
    }
})

function playSound(sound) {
    let Start_Audio = document.querySelector(`#s_${sound}`)
    let Color_Active = document.querySelector(`div[data-key="${sound}"]`)

    if(Start_Audio){
        Start_Audio.currentTime = 0
        Start_Audio.play()
    }

    if(Color_Active){
        Color_Active.classList.add('colorActive')

        setTimeout(()=>{
            Color_Active.classList.remove('colorActive')
        }, 300)
    }
}

function playComposition(songArray){
    let wait = 0
    
    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait)

        wait = wait + 250
    }
    
}