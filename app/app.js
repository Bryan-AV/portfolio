
gsap.registerPlugin(ScrollTrigger);


// Responsive
let mm = gsap.matchMedia();

let mm1 = gsap.matchMedia();

mm.add("(min-width: 1025px)", () => {
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

mm.add("(max-width: 1024px)", () => {
  gsap.to("#about", {
      x: '51vw',
      xPercent: -100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top 35%",
        end: "top 35%",
        markers: true,
        scrub: 2
      }
    });

    gsap.to("#what", {
      x: '-51vw',
      xPercent: 100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#what",
        start: "top 35%",
        end: "top 35%",
        scrub: 2
      }
    });

    gsap.to("#skills", {
      x: '51vw',
      xPercent: -100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 35%",
        end: "top 35%",
        scrub: 2
      }
    });

    gsap.to("#projects", {
      x: '-51vw',
      xPercent: 100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 35%",
        end: "top 35%",
        scrub: 2
      }
    });
    
});
mm1.add("(max-width: 576px)", () => {
  gsap.to("#about", {
      x: '60vw',
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
      x: '-65vw',
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
      x: '60vw',
      xPercent: -100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 25%",
        end: "top 25%",
        markers: true,
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

mm1.add("(max-width: 375px)", () => {
  gsap.to("#about", {
      x: '63vw',
      xPercent: -100,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
        end: "top 50%",
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
        start: "top 50%",
        end: "top 50%",
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
        start: "top 50%",
        end: "top 50%",
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
        start: "top 50%",
        end: "top 50%",
        scrub: 2
      }
    });
    
});