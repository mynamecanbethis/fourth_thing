// from: in from method you dont the have to specify the initial state
// fromTo in from u do opposite or wtv

gsap.fromTo(".box2",{
  y:200, opacity: 0,
},{
  opacity: 1,
  y:-200,
  duration: 3,
  ease: "linear",
  borderRadius:0,
  repeat:-1,
  yoyo:true,
})

//gsap.to(".box",{
    //opacity: 1,
    //background: "red",
    //duration: 3,
   //y:100,
    //repeat: -1,
    //yoyo: true,
  //});
