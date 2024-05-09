document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript loaded!');
});


var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationContainer'), // the dom element that will contain the animation
    renderer: 'canvas', // Render type: 'canvas', 'html'
    loop: false, // loop the animation
    autoplay: true, // start playing the animation as soon as it is loaded
    path: '../animations/comic/data.json', // the path to the animation json
  });

// getAudioContext().resume();

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
var animationDiv = document.getElementById('animationContainer');

const pauseAndPlay =  async () =>{
  animation.play();
  await sleep(250);
  animation.pause();
  animation.play();
  animationDiv.removeEventListener("mousedown",pauseAndPlay);
  idleCheck = true;
  await sleep(8000);
  animation.pause();
  animationDiv.addEventListener("mousedown", playRest);
  playIdle();
}

const startAnimation = async () => {
    await sleep(4380);
    animation.pause();
    animationDiv.addEventListener("mousedown",pauseAndPlay);
}
var idleInterval; // Variable to hold the interval ID
var idleCheck = true;

const playRest = async () => {
  animation.play();
  await sleep(1000);
  displayNextButton();
}

const displayNextButton = () => {
  prevButton = document.getElementById("prev-button");
  nextButton = document.getElementById("next-button");
  prevButton.removeAttribute("hidden");
  nextButton.removeAttribute("hidden");

}


startAnimation();