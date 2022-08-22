// Script for Canvas
window.onload = function() {
    try {
      TagCanvas.Start('myCanvas','tags');
    } catch(e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };


const $body = $('body');
const $startTrigger = $body.find("container");
const $endTrigger = $body.find("endPoint")
const colorToDark = gsap.fromTo($body, { background: "linear-gradient(to left, #62DBF1, 80%, #F992F1)" },{ background: "#1E1E1E" })

ScrollTrigger.create({
  trigger: $startTrigger,
  start: "top+=100px top",
  end: "+=800px",
  markers: false,
  scrub: true,
  animation: colorToDark
  //onEnter: () =>
  //  gsap.to($section, { backgroundColor: "#232E3E", overwrite: "auto" }),
  //onLeaveBack: () =>
  //  gsap.to($section, { backgroundColor: "white", overwrite: "auto" })
});



const colorToWhite= gsap.fromTo($body, { background: "#1E1E1E" },{ background: "linear-gradient(45deg, rgba(249,146,241,1) 0%, rgba(98,219,241,1) 38%)", immediateRender: false })

ScrollTrigger.create({
  trigger: $startTrigger,
  start: "top+=1740px top",
  end: "+=700px",
  markers: false,
  scrub: true,
  animation: colorToWhite
  //onEnter: () =>
  //  gsap.to($section, { backgroundColor: "#232E3E", overwrite: "auto" }),
  //onLeaveBack: () =>
  //  gsap.to($section, { backgroundColor: "white", overwrite: "auto" })
});
  