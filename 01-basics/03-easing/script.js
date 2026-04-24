// Linear: Constant speed (robotic)
gsap.to(".ease-linear", { x: 400, duration: 2, ease: "none" });

// Power: Gradual speed up/slow down (more natural)
// Try "power1", "power2", "power3", or "power4" (.in, .out, or .inOut)
gsap.to(".ease-power", { x: 400, duration: 2, ease: "power2.inOut" });

// Bounce: Simulates gravity and bouncing
gsap.to(".ease-bounce", { x: 400, duration: 2, ease: "bounce.out" });