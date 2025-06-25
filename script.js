var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblr")

document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"
  blur.style.left = dets.x - 100+"px"
  blur.style.top = dets.y - 100+"px"
  
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 2
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparant"
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border = "0px solid #fff"
    crsr.style.backgroundColor = "#95C11E"
  })
})




gsap.to("#nav",{
  height : "120px",
  duration:0.5,
  scrollTrigger : {
    trigger : "#nav",
     scroller : "body",
    // markers : true,
     start:"top -10%",
     end:"top -11%",
     scrub : 1
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

gsap.from(".card",{
  scale:0.8,
  opacity:0,
  duration:1,
  stagger:0.1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:1
  }
})
gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    markers:true,
    start:"top 55%",
    end:"top 45%",
    scrub:5
  }
})
gsap.from("#colon2",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 55%",
    end:"top 45%",
    scrub:5
  }
})
