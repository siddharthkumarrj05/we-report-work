document
  .querySelector(".screenshort-button")
  .addEventListener("click", function () {
    html2canvas(document.querySelector(".screenshort"), {
      onrendered: function (canvas) {
        // document.body.appendChild(canvas);
        return Canvas2Image.saveAsPNG(canvas);
      },
    });
  });

$(document).ready(function () {
    $(".show-1").click(function () {
      hideAllSections();
      $(".tools-open-sec").toggle();
    });
    $(".show-2").click(function () {
      hideAllSections();
      $(".tools-open-sec-2").toggle();
    });
    $(".show-3").click(function () {
      hideAllSections();
      $(".tools-open-sec-3").toggle();
    });
    $(".show-4").click(function () {
      hideAllSections();
      $(".tools-open-sec-4").toggle();
    });
    $(".show-5").click(function () {
      hideAllSections();
      $(".tools-open-sec-5").toggle();
    });
    $(".show-6").click(function () {
      hideAllSections();
      $(".tools-open-sec-6").toggle();
    });
    $(".show-7").click(function () {
      hideAllSections();
      $(".tools-open-sec-7").toggle();
    });
    $(".show-8").click(function () {
      hideAllSections();
      $(".tools-open-sec-8").toggle();
    });
    $(".show-9").click(function () {
      hideAllSections();
      $(".tools-open-sec-9").toggle();
    });
    $(".show-10").click(function () {
      hideAllSections();
      $(".tools-open-sec-10").toggle();
    });
    $(".show-11").click(function () {
      hideAllSections();
      $(".tools-open-sec-11").toggle();
    });
    $(".show-12").click(function () {
      hideAllSections();
      $(".tools-open-sec-12").toggle();
    });
  
    function hideAllSections() {
      // Hide all sections before showing the clicked one
      $(".tools-open-sec, .tools-open-sec-2, .tools-open-sec-3, .tools-open-sec-4, .tools-open-sec-5, .tools-open-sec-6, .tools-open-sec-7, .tools-open-sec-8, .tools-open-sec-9, .tools-open-sec-10, .tools-open-sec-11, .tools-open-sec-12").hide();
    }
  });

  


  function myFunction(inputNumber) {
    var copyText = document.getElementById("myInput" + inputNumber);
    navigator.clipboard.writeText(copyText.value);
    alert("copied");
  }


// Add active class to the current button (highlight it)
var header = document.getElementById("active-tools");
var btns = header.getElementsByClassName("column-1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function changeContent(newContent) {
  var contentBox = document.getElementById("contentBox");
  contentBox.innerHTML = newContent;
}


$(document).ready(function(){
  $(".ANONYMOUS-button").click(function(){
    $(".javed").hide();
    $(".tools-open-sec-9-show").show();
  });

  $(".GRATITUDE-button").click(function(){
    $(".tools-open-sec-2-hide").hide();
    $(".tools-open-sec-2-show").show();
  });

});

