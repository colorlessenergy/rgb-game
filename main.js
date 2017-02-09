var circle = document.querySelectorAll(".circle");
var modes = document.querySelectorAll("#settings-diffculty li");
var rgbDisplay = document.getElementById("rgb");
var result = document.getElementById("result");
var newColor = document.getElementById("new");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");
var done = false;
var diffculty = 0;

function circleColor () {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb("+r+", "+g+", "+b+")";
}

for (var i = 0; i < circle.length; i++) {
  var realRgb = Math.floor(Math.random() * 3);
  circle[0].style.backgroundColor = circleColor();
  circle[1].style.backgroundColor = circleColor();
  circle[2].style.backgroundColor = circleColor();
  rgbDisplay.innerHTML = circleColor();
  circle[realRgb].style.backgroundColor = rgbDisplay.textContent;
  circle[i].addEventListener("click", function () {
    if (this.style.backgroundColor !== rgbDisplay.innerHTML) {
      this.style.backgroundColor = "";
      result.textContent = "try again";
    } else {
      for (var j = 0; j < circle.length; j++) {
        circle[j].style.backgroundColor = rgbDisplay.innerHTML;
      }
      result.textContent = "correct!";
      done = true;
      newColor.textContent = "play again";
    }
  });
}

  newColor.addEventListener("click", function () {
    if (done === false) {
      if (diffculty === 0) {
        for (var j = 0; j < 3; j++) {
          var realRgb = Math.floor(Math.random() * 3);
          circle[j].style.backgroundColor = circleColor();
          rgbDisplay.innerHTML = circleColor();
          circle[realRgb].style.backgroundColor = rgbDisplay.textContent;
        }
      }else if (diffculty === 1) {
        for (var k = 0; k < 6; k++) {
          var realRgb = Math.floor(Math.random() * 6);
          circle[k].style.backgroundColor = circleColor();
          rgbDisplay.innerHTML = circleColor();
          circle[realRgb].style.backgroundColor = rgbDisplay.textContent;
        }
      }else if (diffculty === 2) {
        for (var l = 0; l < 9; l++) {
          var realRgb = Math.floor(Math.random() * 9);
          circle[l].style.backgroundColor = circleColor();
          rgbDisplay.innerHTML = circleColor();
          circle[realRgb].style.backgroundColor = rgbDisplay.textContent;
        }
      }
    }else if (done === true) {
      newColor.addEventListener("click", function () {
        if (diffculty === 0) {
          for (var j = 0; j < 3; j++) {
            var realRgb = Math.floor(Math.random() * 3);
            circle[j].style.backgroundColor = circleColor();
            rgbDisplay.innerHTML = circleColor();
            circle[realRgb].style.backgroundColor = rgbDisplay.textContent;
          }
      }else if (diffculty === 1) {
          for (var k = 0; k < 6; k++) {
            var realRgb = Math.floor(Math.random() * 6);
            circle[k].style.backgroundColor = circleColor();
            rgbDisplay.innerHTML = circleColor();
            circle[realRgb].style.backgroundColor = rgbDisplay.textContent;
          }
        } else if (diffculty === 2) {
          for (var l = 0; l < 9; l++) {
            var realRgb = Math.floor(Math.random() * 9);
            circle[l].style.backgroundColor = circleColor();
            rgbDisplay.innerHTML = circleColor();
            circle[realRgb].style.backgroundColor = rgbDisplay.textContent;
          }
        }
      done = false;
      newColor.textContent = "new colors";
    });
  }
});

for (var i = 0; i < modes.length; i++) {
  modes[i].addEventListener("click", function () {
    if (this.textContent === "medium") {
      if (diffculty === 0) {
        medium.classList.toggle("not-active");
      } else if (diffculty === 2) {
        hard.classList.toggle("not-active");
      }
      diffculty = 1;
    } else if (this.textContent === "hard") {
      if (diffculty === 0) {
        medium.classList.toggle("not-active");
        hard.classList.toggle("not-active");
      } else if(diffculty === 1) {
        hard.classList.toggle("not-active");
      }
      diffculty = 2;
    } else if (this.textContent === "easy") {
      if (diffculty === 1) {
        medium.classList.toggle("not-active");
      } else if (diffculty === 2) {
        medium.classList.toggle("not-active");
        hard.classList.toggle("not-active");
      }
      diffculty = 0;
    }
    if (diffculty === 0) {
      for (var j = 0; j < 3; j++) {
        var realRgb = Math.floor(Math.random() * 3);
        circle[j].style.backgroundColor = circleColor();
        rgbDisplay.innerHTML = circleColor();
        circle[realRgb].style.backgroundColor = rgbDisplay.textContent;
      }
    }else if (diffculty === 1) {
        for (var k = 0; k < 6; k++) {
          var realRgb = Math.floor(Math.random() * 6);
          circle[k].style.backgroundColor = circleColor();
          rgbDisplay.innerHTML = circleColor();
          circle[realRgb].style.backgroundColor = rgbDisplay.textContent;
        }
      } else if (diffculty === 2) {
        for (var l = 0; l < 9; l++) {
          var realRgb = Math.floor(Math.random() * 9);
          circle[l].style.backgroundColor = circleColor();
          rgbDisplay.innerHTML = circleColor();
          circle[realRgb].style.backgroundColor = rgbDisplay.textContent;
        }
      }
  });
}
