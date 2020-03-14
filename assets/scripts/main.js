// FIXME: reduce scroll noise 
// FIXME: fix lag scroll on chrome
// TODO: Change projects layout
// TODO: Responsive

document.addEventListener('wheel', detectScrollDirection)

function detectScrollDirection(event) {
  var delta;
  if (event.wheelDelta) {
    delta = event.wheelDelta;
  } else {
    delta = -1 * event.deltaY;
  }
  if (delta < 0) {
    document.getElementById('tab-container').scrollIntoView({behavior: "smooth"})
  } else if (delta > 0) {
    document.getElementById('resume-header').scrollIntoView({behavior: "smooth"})
  }
}

function jumpTo(curentEl, targetSectionId) {
  // curentEl.style.textDecoration = 'underline'
  const sections = document.querySelectorAll('section')
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.replace('block', 'hidden')
  }
  const section = document.getElementById(targetSectionId)
  section.classList.replace('hidden', 'block')
}

function throttle(fn, wait) {
  var time = Date.now()
  console.log({time});
  
  return function () {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

// defer || async
// const navbar = document.getElementById('navbar')
// navbar.addEventListener('click', function(e) {
//   e.target
// })