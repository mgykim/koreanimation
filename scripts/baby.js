document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript loaded!');
});


var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationContainer'), // the dom element that will contain the animation
    renderer: 'svg', // Render type: 'canvas', 'html'
    loop: false, // loop the animation
    autoplay: true, // start playing the animation as soon as it is loaded
    initialSegment: [0,120],
    path: '../animations/baby/baby.json', // the path to the animation json
  });

// getAudioContext().resume();

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
var animationDiv = document.getElementById('animationContainer');
var pacifierDiv = document.getElementById('pacifier');

const pauseAndPlay =  async () =>{
  animation.playSegments([120,437],true);
  animationDiv.removeEventListener("mousedown",pauseAndPlay);
  idleCheck = true;
  await sleep(9500);
  playIdle();
  animationDiv.addEventListener("mousedown", stopIdle);
}

const startAnimation = async () => {
    await sleep(3600);
    animationDiv.addEventListener("mousedown",pauseAndPlay);
}
var idleInterval; // Variable to hold the interval ID
var idleCheck = true;

const playIdle = () => {
  // displayAudioButton();
  idleInterval = setInterval(() => {
    if (idleCheck) {
      animation.playSegments([437,455], true);
    } else {
      clearInterval(idleInterval); // Clear the interval if idleCheck is false
      // animation.play();
    }
  }, 1000); // Interval set to 1000 milliseconds (1 second)
}

const stopIdle = async () => {
  console.log("stopIdle triggered");
  idleCheck = false;
  clearInterval(idleInterval); // Ensure to clear the interval when stopping the idle
  animation.playSegments([456,480],true);
  animationDiv.removeEventListener("mousedown",stopIdle);
  displayNextButton();
}

const displayNextButton = () => {
  prevButton = document.getElementById("prev-button");
  nextButton = document.getElementById("next-button");
  prevButton.removeAttribute("hidden");
  nextButton.removeAttribute("hidden");

}

// const displayAudioButton = () => {
//   audioButton = document.getElementById("replay-audio");
//   try {
//     audioButton.removeAttribute("hidden");
//   } catch (error) {
    
//   }
// }

animation.addEventListener("DOMLoaded", () => {
  animation.playSegments([0,120],true);
  startAnimation();
})

// startAnimation();