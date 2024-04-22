document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript loaded!');
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationContainer'), // the dom element that will contain the animation
    renderer: 'canvas', // Render type: 'canvas', 'html'
    loop: false, // loop the animation
    autoplay: true, // start playing the animation as soon as it is loaded
    path: '../animations/baby.json' // the path to the animation json
  });

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
var playIdle = false;


const continueAnimation = async () => {
  animation.play();
  event.target.removeEventListener("mousedown",pauseAnimation);
  event.target.removeEventListener("mouseup",continueAnimation);
}

const playIdleAnimation = async () => {
  animation.play();
  await sleep(timingArray[currentIndex]);
  animation.goToAndPlay(13000,false);
}

const pauseAnimation =  async () =>{
  animation.play();
  await sleep('600');
}
var animationDiv = document.getElementById('animationContainer');

const startAnimation = async () => {
    await sleep(4000);
    animation.pause();
    animationDiv.addEventListener("mousedown",pauseAnimation);
    animationDiv.addEventListener("mouseup",continueAnimation);
}

startAnimation();

// if (playIdle){
//   playIdleAnimation();
// }