var lastPosY = 0

document.addEventListener('scroll', function () {
  scrollSec()
})

function scrollSec() {
  let curPosY = window.pageYOffset || document.documentElement.scrollTop

  console.log('curr: ' + Math.pow(curPosY, 4));
  console.log('last: ' + Math.pow(lastPosY, 4));

  // Scroll down behavior
  if (Math.pow(curPosY, 4) > Math.pow(lastPosY, 4)) {
    document.getElementById('tab-container').scrollIntoView()
  }
  else if(Math.pow(curPosY, 4) < Math.pow(lastPosY, 4)) {
    document.getElementById('resume-header').scrollIntoView()
  } else {}

  lastPosY = curPosY
}
// if (document.documentElement.scrollTop > window.innerHeight - 15) {

// }

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
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}