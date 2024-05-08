document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript loaded!');
});


var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationContainer'), // the dom element that will contain the animation
    renderer: 'canvas', // Render type: 'canvas', 'html'
    loop: false, // loop the animation
    autoplay: true, // start playing the animation as soon as it is loaded
    path: '../animations/baby.json', // the path to the animation json
  });

// getAudioContext().resume();

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
var animationDiv = document.getElementById('animationContainer');
var pacifierDiv = document.getElementById('pacifier');

const pauseAndPlay =  async () =>{
  animation.play();
  await sleep(250);
  animation.pause();
  animation.play();
  animationDiv.removeEventListener("mousedown",pauseAndPlay);
  animationDiv.addEventListener("click", stopIdle);
  playIdle();
}

const startAnimation = async () => {
    await sleep(4100);
    animation.pause();
    animationDiv.addEventListener("mousedown",pauseAndPlay);
}
var idleInterval; // Variable to hold the interval ID
var idleCheck = true;

const playIdle = () => {
  idleInterval = setInterval(() => {
    if (idleCheck) {
      animation.playSegments([457,476], true);
    } else {
      clearInterval(idleInterval); // Clear the interval if idleCheck is false
    }
  }, 1000); // Interval set to 1000 milliseconds (1 second)
}

const stopIdle = () => {
  idleCheck = false;
  clearInterval(idleInterval); // Ensure to clear the interval when stopping the idle
}


startAnimation();