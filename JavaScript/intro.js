var typed = new Typed(".typing", {
    strings:["Breakers", "Diyorbek", "Jurabek", "Abdulaziz", "Nodirbek", "Behruzbek", "Mukhammadali", "Breakers"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})          
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// // create the smooth scroller FIRST!
// const smoother = ScrollSmoother.create({
//   content: "#scrollsmoother-container",
//   smooth: 3,
//   normalizeScroll: true,
//   ignoreMobileResize: true,
// 	effects: true,
//   //preventDefault: true,
//   //ease: 'power4.out',
//   //smoothTouch: 0.1, 
// });

// smoother.effects("img", { speed: "auto" });
// smoother.effects("iframe", {speed: "auto"});

// let headings = gsap.utils.toArray(".js-title").reverse();
// headings.forEach((heading, i) => {
//  let headingIndex = i + 1;
//  let mySplitText = new SplitText(heading, { type: "chars" });
//  let chars = mySplitText.chars;

//  chars.forEach((char, i) => {
//   smoother.effects(char, { lag: (i + headingIndex) * 0.1, speed: 1 });
//  });
// });

// let splitTextLines = gsap.utils.toArray(".js-splittext-lines");

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: splitTextLines,
//     start: 'top 90%',
//     end: 'bottom 60%',
//     scrub: 2,
//     markers: false,
//     toggleActions: 'play none play reset'
//   }
// });

// const itemSplitted = new SplitText(splitTextLines, { type: 'lines' });
// 			tl.from(itemSplitted.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 0.5, ease: 'back.inOut' });

/*=====================================typing animation============================= */

// Smooth scroll to a specific position
// function smoothScrollTo(target) {
//   const container = document.querySelector('.container');
//   const scrollPosition = target.offsetTop - container.offsetTop;
  
//   container.scrollTo({
//     top: scrollPosition,
//     behavior: 'smooth'
//   });
// }

// Example usage: smoothScrollTo(document.getElementById('elementId'));
