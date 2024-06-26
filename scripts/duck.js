document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript loaded!');
});


var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationContainer'), // the dom element that will contain the animation
    renderer: 'canvas', // Render type: 'canvas', 'html'
    loop: false, // loop the animation
    autoplay: true, // start playing the animation as soon as it is loaded
    initialSegment: [0,120],
    path: '../animations/duck/data.json', // the path to the animation json
  });

// getAudioContext().resume();

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
var animationDiv = document.getElementById('animationContainer');
var pacifierDiv = document.getElementById('pacifier');

const pauseAndPlay =  async () =>{
  animation.playSegments([120,300],true);
  setTimeout(() => {
    idleCheck = true;
    animationDiv.addEventListener("mousedown", stopIdle);
    playIdle();
  },4800);
  animationDiv.removeEventListener("mousedown",pauseAndPlay);
  idleCheck = true;
  // await sleep(4800);
  // playIdle();  
}
// const pauseAndPlay =  async () =>{
//   animation.play();
//   await sleep(250);
//   animation.pause();
//   animation.play();
//   animationDiv.removeEventListener("mousedown",pauseAndPlay);
//   idleCheck = true;
//   await sleep(6300);
//   animationDiv.addEventListener("mousedown", stopIdle);
//   playIdle();
// }

const startAnimation = async () => {
    await sleep(3600);
    animationDiv.addEventListener("mousedown",pauseAndPlay);
}
var idleInterval; // Variable to hold the interval ID
var idleCheck = true;

const playIdle = () => {
  idleInterval = setInterval(() => {
    if (idleCheck) {
      console.log(animation.segments);
      animation.playSegments([300,341], true);
    } else {
      clearInterval(idleInterval); // Clear the interval if idleCheck is false
      // animation.play();
    }
  }, 1333); // Interval set to 1000 milliseconds (1 second)
}

const stopIdle = () => {
  animationDiv.removeEventListener("mousedown",stopIdle);
  idleCheck = false;
  clearInterval(idleInterval); // Ensure to clear the interval when stopping the idle
  animation.playSegments([341,360],true);
  
  setTimeout(() => {
    displayNextButton();
  },650);
}

const displayNextButton = () => {
  prevButton = document.getElementById("prev-button");
  nextButton = document.getElementById("next-button");
  prevButton.removeAttribute("hidden");
  nextButton.removeAttribute("hidden");

}

animation.addEventListener("DOMLoaded",() => {
  animation.playSegments([0,120],true);
  startAnimation();
})