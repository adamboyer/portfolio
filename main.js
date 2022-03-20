//Hamburger Animation event listener
const hamburgerIcon = document.getElementById("hamburger");
const toggleOpenHamburger = () => {
  document.getElementById("hamburger").classList.toggle("open");
  document.getElementById("mobile-nav").classList.toggle("ham-open");
  document.getElementById("mobile-links").classList.toggle("ham-open");
};
hamburgerIcon.addEventListener("click", toggleOpenHamburger);

//Adding classes needed for square animation
//Animation for circles 
const circles = document.getElementsByClassName("grey-circle");

//Adding the needed classes for animation
let row = 1;
let col = 1;
for(let i=0; i < circles.length; i++) {
  switch(row - col) {
    case 9:
      circles[i].classList.add("circle-line-1");
      break;
    case 8:
      circles[i].classList.add("circle-line-2");
      break;
    case 7:
      circles[i].classList.add("circle-line-3");
      break;
    case 6:
      circles[i].classList.add("circle-line-4");
      break;
    case 5:
      circles[i].classList.add("circle-line-5");
      break;    
    case 4:
      circles[i].classList.add("circle-line-6");
      break;    
    case 3:
      circles[i].classList.add("circle-line-7");
      break;    
    case 2:
      circles[i].classList.add("circle-line-8");
      break;    
    case 1:
      circles[i].classList.add("circle-line-9");
      break;    
    case 0:
      circles[i].classList.add("circle-line-10");
      break;    
    case -1:
      circles[i].classList.add("circle-line-11");
      break;    
    case -2:
      circles[i].classList.add("circle-line-12");
      break;    
    case -3:
      circles[i].classList.add("circle-line-13");
      break;    
    case -4:
      circles[i].classList.add("circle-line-14");
      break;    
    case -5:
      circles[i].classList.add("circle-line-15");
      break;    
    case -6:
      circles[i].classList.add("circle-line-16");
      break;    
    case -7:
      circles[i].classList.add("circle-line-17");
      break;    
    case -8:
      circles[i].classList.add("circle-line-18");
      break;    
    case -9:
      circles[i].classList.add("circle-line-19");
      break;
  }
  if(col == 10) {
    row++;
    col = 1;
  } else {
    col++;
  }
}

/* Animatiom for service elements coming into view */
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.classList.add("show-service")
        } 
      });
    },
    {
      threshold: 0.25
    }
  );
  
  const scrollEls = document.querySelectorAll(".scrollShow-service");
  
  scrollEls.forEach((el) => {
    observer.observe(el);
  });

/* Animatiom for work elements coming into view */
  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.classList.add("show-work")
        } 
      });
    },
    {
      threshold: 0.25
    }
  );
  
  const scrollEls2 = document.querySelectorAll(".recent-work-card");
  
  scrollEls2.forEach((el) => {
    observer2.observe(el);
  });

/* Animatiom for about elements coming into view */
const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.classList.add("show-about")
      } 
    });
  },
  {
    threshold: 0.5
  }
);

const scrollEls3 = document.querySelectorAll(".scrollShow-about");

scrollEls3.forEach((el) => {
  observer3.observe(el);
});

/*Animation for contact*/

const observer4 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.classList.add("show-contact")
      } 
    });
  },
  {
    threshold: 0.5
  }
);

const scrollEls4 = document.querySelectorAll(".scrollShow-contact");

scrollEls4.forEach((el) => {
  observer4.observe(el);
});

/* ScrollOver animation for recent work cards*/
const backgroundResize = () => {
  
    console.log(this);
  
  
}
scrollEls2.forEach((el) =>{
  el.addEventListener("mouseenter", (el) => {
    el.target.style.backgroundSize = "800px";
  });
  el.addEventListener("mouseleave", (el) => {
    el.target.style.backgroundSize = "600px";
  });
});

