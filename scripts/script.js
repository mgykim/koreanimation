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

 
const startAnimation = async () => {
    await sleep(12000);
    animation.stop();
}

startAnimation();