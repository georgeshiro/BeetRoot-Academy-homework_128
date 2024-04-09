"use strict";

var linkNav = document.querySelectorAll('[href^="#"]'); //посиланн до якоря

var V = 0.5; // швидкість 

for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) {
    //клік
    // e.preventDefault(); // інше поводження
    var w = window.pageYOffset,
        // скролл
    hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id до якого переходимо

    t = document.querySelector(hash).getBoundingClientRect().top, // відступ від вікна до айді
    start = null;
    requestAnimationFrame(step); // функция анімації [developer.mozilla.org]

    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
      window.scrollTo(0, r);

      if (r != w + t) {
        requestAnimationFrame(step);
      } else {
        location.hash = hash; // URL с хэшем
      }
    }
  }, false);
}