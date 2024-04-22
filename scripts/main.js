var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationContainer'), // the dom element that will contain the animation
    renderer: 'canvas', // Render type: 'canvas', 'html'
    loop: true, // loop the animation
    autoplay: true, // start playing the animation as soon as it is loaded
    path: 'animations/data.json' // the path to the animation json
  });