// Closes navBar when is open
let navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
let navbarCollapse = document.querySelector(".navbar-collapse");

navbarLinks.forEach(function(navbarLink) {
  navbarLink.addEventListener("click", function() {
    navbarCollapse.classList.remove("show");
  });
});



let logoBtn = document.querySelector(".logo-responsive");
logoBtn.addEventListener("click", function() {
  navbarCollapse.classList.remove("show");
}); 




// Title Animations
gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();
let w = window.innerWidth/2;

const aboutW = document.getElementById('about').offsetWidth/2;
const whatW = document.getElementById('what').offsetWidth/2;
const skillsW = document.getElementById('skills').offsetWidth/2;
const projectsW = document.getElementById('projects').offsetWidth/2;


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
  
