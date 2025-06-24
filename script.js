var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblr")

document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"
  blur.style.left = dets.x - 200+"px"
  blur.style.top = dets.y - 200+"px"
  
})




gsap.to("#nav",{
  height : "120px",
  duration:0.5,
  scrollTrigger : {
    trigger : "#nav",
    scroller : "body",
    // markers : true,
     start:"top -11%",
     scrub : true
  }
  
})
gsap.to("#main",{
  backgroundColor : "#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    markers:true,
    start:"top -30vh",
    end:"top -80vh",
    scrub:2
  }
})