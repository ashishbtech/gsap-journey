// gsap.from() is great for entry animations (like fading things in)
gsap.from(".box-from", {
  opacity: 0,
  y: 100, // Starts 100px lower than its natural position
  duration: 1.5
});

// gsap.fromTo() gives you total control over the start and end points
gsap.fromTo(".box-fromTo", 
  { opacity: 0, x: -200, scale: 0.5 }, // START state
  { opacity: 1, x: 200, scale: 1.5, duration: 2, delay: 1 } // END state
);