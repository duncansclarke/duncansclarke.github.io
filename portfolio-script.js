

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
}, false);

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
  console.log("meme")
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