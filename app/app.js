
gsap.registerPlugin(ScrollTrigger);


// Responsive
let mm = gsap.matchMedia();

mm.add("(min-width: 577px)", () => {
  gsap.to("#about", {
    x: '41vw',
    xPercent: -100,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "#about",
      start: "top 40%",
      end: "top 40%",
      markers: true,
      scrub: 2
    }
  });
  
  gsap.to("#what", {
      x: '-41vw',
      xPercent: 100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#what",
        start: "top 40%",
        end: "top 40%",
        scrub: 2
      }
    });
  
    gsap.to("#skills", {
      x: '41vw',
      xPercent: -100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 40%",
        end: "top 40%",
        scrub: 2
      }
    });
  
    gsap.to("#projects", {
      x: '-41vw',
      xPercent: 100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 40%",
        end: "top 40%",
        scrub: 2
      }
    });
  
    
});

mm.add("(max-width: 576px)", () => {
  gsap.to("#about", {
      x: '55vw',
      xPercent: -100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top 25%",
        end: "top 25%",
        scrub: 2
      }
    });

    gsap.to("#what", {
      x: '-60vw',
      xPercent: 100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#what",
        start: "top 25%",
        end: "top 25%",
        scrub: 2
      }
    });

    gsap.to("#skills", {
      x: '55vw',
      xPercent: -100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 25%",
        end: "top 25%",
        scrub: 2
      }
    });

    gsap.to("#projects", {
      x: '-55vw',
      xPercent: 100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 25%",
        end: "top 25%",
        scrub: 2
      }
    });
    
});


mm.add("(max-width: 375px)", () => {
  gsap.to("#about", {
      x: '63vw',
      xPercent: -100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top 40%",
        end: "top 40%",
        markers: true,
        scrub: 2
      }
    });

    gsap.to("#what", {
      x: '-71vw',
      xPercent: 100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#what",
        start: "top 40%",
        end: "top 40%",
        scrub: 2
      }
    });

    gsap.to("#skills", {
      x: '60vw',
      xPercent: -100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 40%",
        end: "top 40%",
        scrub: 2
      }
    });

    gsap.to("#projects", {
      x: '-65vw',
      xPercent: 100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 40%",
        end: "top 40%",
        scrub: 2
      }
    });
    
});