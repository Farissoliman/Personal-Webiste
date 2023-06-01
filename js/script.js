// Script for Canvas
window.onload = function() {
    try {
      TagCanvas.Start('myCanvas','tags');
    } catch(e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };

// Adjust canvas size depending on device
const canvasContainer = document.getElementById('myCanvas');
const style = window.getComputedStyle(canvasContainer);
const canvasWidth = style.getPropertyValue('width');
let indexOfP = canvasWidth.indexOf('p');
let widthNum = canvasWidth.substring(0,indexOfP);
canvasContainer.width = widthNum;
canvasContainer.height = canvasContainer.width * 1;

//Background color change
const $body = $('body');
const $startTrigger = $body.find('container');
const $endTrigger = $body.find('endPoint');
const colorToDark = gsap.fromTo($body, { background: "linear-gradient(to left, #62DBF1, 80%, #F992F1)"},{ background: "#1E1E1E"})

ScrollTrigger.create({
  trigger: $startTrigger,
  start: "top+=100px top",
  end: "+=800px",
  markers: false,
  scrub: true,
  animation: colorToDark
});

const colorToGradient= gsap.fromTo($body, { background: "#1E1E1E", immediateRender: false },{ background: "linear-gradient(45deg, rgba(249,146,241,1) 0%, rgba(98,219,241,1) 38%)", immediateRender: false })

ScrollTrigger.create({
  trigger: $startTrigger,
  start: "top+=1740px top",
  end: "+=700px",
  markers: false,
  scrub: true,
  animation: colorToGradient
});
  

//Scroll to elements
function scrollToElement(elementId) {
    const elementToScrollTo = document.getElementById(elementId);
    elementToScrollTo.scrollIntoView({ behavior: "smooth" });;
}