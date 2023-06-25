// 只會抓含有這個js的html文件(如果放在UIdesign2.html就只會抓到該html中的id-containers)
function toggleColor(element) {
    var btns = document.getElementsByClassName("CateBtn2");
    var section = document.querySelector('#AllArticlesSection');
    var containers = section.querySelectorAll('#ContentCardOverflow div#ContentCard-container');
    // console.log(element.textContent)
    // console.log(btns)
    // console.log(containers)
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.remove("clicked");
    }
    document.getElementById("CateBtn").classList.add("unclicked");
    containers.forEach(function(container) {
      // console.log(container);
      if (container.getAttribute("class").includes(element.textContent)){
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
    element.classList.add("clicked");
  }

function toggleAll(element) {
    var btns = document.getElementsByClassName("CateBtn2");
    var section = document.querySelector('#AllArticlesSection');
    var containers = section.querySelectorAll('#ContentCardOverflow div#ContentCard-container');
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("clicked");
    }
    containers.forEach(function(container) {
        container.style.display = "block";
    });
    element.classList.remove("unclicked");
}