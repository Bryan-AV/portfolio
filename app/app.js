
gsap.registerPlugin(ScrollTrigger);


let mm = gsap.matchMedia();


let w = window.innerWidth/2;

const aboutW = document.getElementById('about').offsetWidth/2;
const whatW = document.getElementById('what').offsetWidth/2;
const skillsW = document.getElementById('skills').offsetWidth/2;
const projectsW = document.getElementById('projects').offsetWidth/2;

console.log(aboutW);

console.log(w);

// mm.add("(min-width: 1025px)", () => {
  gsap.to("#about", {
     x:w-aboutW,
     margin: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "#about",
      start: "top 40%",
      end: "top 40%",
      // markers: true,
      scrub: 2
    }
  });
  
  gsap.to("#what", {
    x:-(w-whatW),
    margin: 0,
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
      x:w-skillsW,
      margin: 0,
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
      x:-(w-projectsW),
      margin: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 40%",
        end: "top 40%",
        scrub: 2
      }
    });
  
    
// });

// mm.add("(max-width: 1024px)", () => {
//   gsap.to("#about", {
//       x: '51vw',
//       xPercent: -100,
//       duration: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: "#about",
//         start: "top 35%",
//         end: "top 35%",
//         markers: true,
//         scrub: 2
//       }
//     });

//     gsap.to("#what", {
//       x: '-51vw',
//       xPercent: 100,
//       duration: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: "#what",
//         start: "top 35%",
//         end: "top 35%",
//         scrub: 2
//       }
//     });

//     gsap.to("#skills", {
//       x: '51vw',
//       xPercent: -100,
//       duration: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: "#skills",
//         start: "top 35%",
//         end: "top 35%",
//         scrub: 2
//       }
//     });

//     gsap.to("#projects", {
//       x: '-51vw',
//       xPercent: 100,
//       duration: 1,
//       ease: "power2.inOut",
//       scrollTrigger: {
//         trigger: "#projects",
//         start: "top 35%",
//         end: "top 35%",
//         scrub: 2
//       }
//     });
    
// });

