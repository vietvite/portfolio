// FIXME: scroll on touchpad but don't on mouse scroll

document.addEventListener('wheel', detectScrollDirection)

function detectScrollDirection(event) {
  var delta;
  if (event.wheelDelta) {
    delta = event.wheelDelta;
  } else {
    delta = -1 * event.deltaY;
  }
  if (delta < 0) {
    let tab = document.getElementById('tab-container')
    tab.children[0].classList.add('anim-opacity-up')
    tab.scrollIntoView({behavior: "smooth"})
    tab.classList.add('anim-opacity-up')
  } else if (delta > 0) {
    let header = document.getElementById('resume-header')
    header.scrollIntoView({behavior: "smooth"})
  }
}

function jumpTo(curentEl, targetSectionId) {
  // curentEl.style.textDecoration = 'underline'
  const sections = document.querySelectorAll('section')
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.replace('block', 'hidden')
    sections[i].classList.replace('anim-opacity-up-1/2', 'anim-opacity-down')
  }
  const section = document.getElementById(targetSectionId)
  section.classList.replace('anim-opacity-down', 'anim-opacity-up-1/2')
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