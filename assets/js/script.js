// TODO: Declare any global variables we need
let h = 0;
let t = 0;
let counter = 0;
let heads = "heads";
let tails = "tails";
let pennyFlip = document.getElementById('flipPenny')
let reset = document.getElementById('clearScore')
let coinImage = document.getElementById('cImage')
let headsFreq = document.getElementById('heads')
let headCounter
let tailCounter
let tailsFreq = document.getElementById('tails')
let headsPerc = document.getElementById('heads-percent')
let tailsPerc = document.getElementById('tails-percent')

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    pennyFlip.addEventListener('click',function(){

        // image changes
       let flip = coinFlipper();

       if(flip === heads){
           switchImage(heads)
           updateScoreBoard(heads)
       }else{
           switchImage(tails)
           updateScoreBoard(tails)
       }



    })
    

    // Flip Button Click Handler
        // TODO: Determine flip outcome


        // TODO: Update image and status message in the DOM

        // Update the scorboard
    


        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
    reset.addEventListener('click',function(){

    })
    
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})

function updateScoreBoard(outcome){
    counter++;

    //calculate number of heads
    if(outcome===heads){

        h = h+1;
        headsFreq.textContent = h
        headsPerc.textContent = `${(h/counter)*100}%`
    }else {

        t = t+1;
        tailsFreq.textContent = t
        tailsPerc.textContent = `${(t/counter)*100}%`

}
}

function coinFlipper(){
    let rand = parseInt(Math.random() * 100)
    updateScoreBoard(rand)
    if(rand % 2 === 0){
        return heads
    }else{
        return tails
    }

}

function switchImage(outcome){
   
    //if tails
    if (outcome === "tails"){
        coinImage.setAttribute('src', './assets/images/penny-tails.jpg');
    }else{
        coinImage.setAttribute('src', './assets/images/penny-heads.jpg');
    }
}
