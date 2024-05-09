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
  animation.playSegments([120,358],true);
  setTimeout(() => {
    animationDiv.addEventListener("mousedown", playRest);
  },7100);
  animationDiv.removeEventListener("mousedown",pauseAndPlay);
}

const startAnimation = async () => {
  await sleep(3600);
  animationDiv.addEventListener("mousedown",pauseAndPlay);
}

const playRest = () => {
  animationDiv.removeEventListener("mousedown", playRest);
  animation.playSegments([358,390],true);
  setTimeout(() => {
    displayNextButton();
  },960);
}

const displayNextButton = () => {
  prevButton = document.getElementById("prev-button");
  nextButton = document.getElementById("next-button");
  prevButton.removeAttribute("hidden");
  nextButton.removeAttribute("hidden");

}

animation.addEventListener("DOMLoaded", () => {
  animation.playSegments([0,120],true);
  startAnimation();
})