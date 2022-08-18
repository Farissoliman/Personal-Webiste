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
const colorToBlue = gsap.fromTo($body, { background: "linear-gradient(to left, #00ddff, 80%, #ff38eb)" },{ background: "#1E1E1E" })

ScrollTrigger.create({
  trigger: $startTrigger,
  start: "top+=100px top",
  endTrigger: $endTrigger,
  end: "+=100%",
  markers: false,
  scrub: true,
  animation: colorToBlue
  //onEnter: () =>
  //  gsap.to($section, { backgroundColor: "#232E3E", overwrite: "auto" }),
  //onLeaveBack: () =>
  //  gsap.to($section, { backgroundColor: "white", overwrite: "auto" })
});



const colorToWhite= gsap.fromTo($body, { background: "#1E1E1E" },{ background: "linear-gradient(to left, #00ddff, 80%, #ff38eb)", immediateRender: false })

ScrollTrigger.create({
  trigger: $startTrigger,
  start: "top+=1440px top",
  end: "+=100%",
  markers: false,
  scrub: true,
  animation: colorToWhite
  //onEnter: () =>
  //  gsap.to($section, { backgroundColor: "#232E3E", overwrite: "auto" }),
  //onLeaveBack: () =>
  //  gsap.to($section, { backgroundColor: "white", overwrite: "auto" })
});
  