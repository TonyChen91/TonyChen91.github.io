function toggleColor(element) {
    var btns = document.getElementsByClassName("CateBtn2");
    console.log(element.textContent)
  
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.remove("clicked");
    }
  
    element.classList.add("clicked");
  }