// disable right click
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  }, false);
  
  document.addEventListener("keydown", (e) => {
    // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
    // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
    // THIS WILL ONLY DISABLE CONTROL AND F12
    if (e.ctrlKey || e.keyCode==123) {
      e.stopPropagation();
      e.preventDefault();
    }
  });
  