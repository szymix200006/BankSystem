const myProgres = document.querySelector(".fingerprint");

function move() {
    var element = document.querySelector(".inside");
    var height = 1;
    var progres = setInterval(frame, 10);
    function frame() {
      if (height>= 100) {
        var url= "main_page.html"; 
        window.location = url; 
        clearInterval(progres);
      } else {
        height++;
        element.style.height = height + '%';
      }
    }
  }

  myProgres.addEventListener('click',move);