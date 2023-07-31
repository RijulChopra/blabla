function popupch1() {
  var img1 = document.getElementById('img_mis'); //= 'Images/Minus.gif';

  if (img1.getAttribute('src') === "chandra1.webp") {
    document.getElementById('img_mis').src = 'chandra1text.png';
  } else {
    document.getElementById('img_mis').src = 'chandra1.webp';
}
  }

  function popupch2() {
    var img2 = document.getElementById('img_mis2'); //= 'Images/Minus.gif';

    if (img2.getAttribute('src') === "mangal.jpg") {
      document.getElementById('img_mis2').src = 'mangaltext.png';
    } else {
      document.getElementById('img_mis2').src = 'mangal.jpg';
  }
  }

  function popupch3() {
    var img3 = document.getElementById('img_mis3'); //= 'Images/Minus.gif';

    if (img3.getAttribute('src') === "astrosat.jpg") {
      document.getElementById('img_mis3').src = 'astrosattext.png';
    } else {
      document.getElementById('img_mis3').src = 'astrosat.jpg';
  }
  }

  function popupch4() {
    var img4 = document.getElementById('img_mis4'); //= 'Images/Minus.gif';

    if (img4.getAttribute('src') === "104.jpg") {
      document.getElementById('img_mis4').src = '104text.png';
    } else {
      document.getElementById('img_mis4').src = '104.jpg';
  }
  }

  function popupch5() {
    var img5 = document.getElementById('img_mis5'); //= 'Images/Minus.gif';

    if (img5.getAttribute('src') === "chandra2.jpg") {
      document.getElementById('img_mis5').src = 'chandra2text.png';
    } else {
      document.getElementById('img_mis5').src = 'chandra2.jpg';
  }
  }

  function popupch6() {
    var img6 = document.getElementById('img_mis6'); //= 'Images/Minus.gif';

    if (img6.getAttribute('src') === "chandra3.jpg") {
      document.getElementById('img_mis6').src = 'chandra3text.png';
    } else {
      document.getElementById('img_mis6').src = 'chandra3.jpg';
  }
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
