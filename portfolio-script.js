

document.addEventListener('DOMContentLoaded', function() {
  move("python", 90);
  move("java", 90);
  move("html", 90);
  move("css", 80);
  move("js", 65);
  move("react", 25);
  move("sql", 65);
  move("git", 25);
  move("php", 25);
  move("tensorflow", 30);  
  move("pytorch", 40);
  consoleText(['Hi', 'I\'m Duncan', 'Welcome to my portfolio website.'],'text');
}, false);

// terminal text effect

function consoleText(words, id) {
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false  && target != null) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true && con != null) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else if (con != null) {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


// end terminal text effect

function copyToClipboard(str) {
  // create element
  var el = document.createElement("textarea");
  // set the value of the string to be copied
  el.value = str;
  // move everything outside of view. out of sight, out of mind
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  // select text from element
  el.select();
  // copies the text to the clipboard
  document.execCommand("copy");
  // removes the element holding string to copy
  document.body.removeChild(el);
}

function move(meme, widthCap) {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById(meme);
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= widthCap) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
  
}