// Selects all elements with the class 'stagger-box'
gsap.from(".stagger-box", {
  y: -50,
  opacity: 0,
  duration: 4,
  ease: "back.out(1.7)", 
  stagger: 0.1 // 0.1 second delay between each box starting
  // Try changing stagger to an object for more control:
  // stagger: { each: 0.1, from: "center" } 
});