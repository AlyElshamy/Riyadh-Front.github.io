function changebg() {
    if (
      document.getElementById("slide").className == "" ||
      document.getElementById("slide").className == "slide1-animation-reverse"
    ) {
      document.getElementById("header-anchor").style.transform =
        "rotate(180deg)";
      document
        .getElementById("slide")
        .classList.remove("slide1-animation-reverse");
      document
        .getElementById("secslide")
        .classList.remove("secslideanimation-reverse");
      document.getElementById("slide").classList.add("slide1-animation");
      document.getElementById("secslide").classList.add("secslideanimation");
    } else {
      document.getElementById("header-anchor").style.transform = "rotate(0deg)";
      document.getElementById("slide").classList.remove("slide1-animation");
      document.getElementById("secslide").classList.remove("secslideanimation");
      document
        .getElementById("slide")
        .classList.add("slide1-animation-reverse");
      document
        .getElementById("secslide")
        .classList.add("secslideanimation-reverse");
    }
  }

  function firstsecanimation() {
    if (document.getElementById("first-anchor").className == "active") {
      document.getElementById("first-section-img1").style.transform =
        "rotate(-3deg) translate(-137%, 11%)";
      document.getElementById("first-section-img1").style.opacity = "0";

      document.getElementById("first-section-img2").style.transform =
        "rotate(-3deg) translate(-174%, 23%)";
      document.getElementById("first-section-img2").style.opacity = "1";

      document.getElementById("first-anchor").classList.remove("active");
      document.getElementById("first-anchor").style.pointerEvents = "none";

      document.getElementById("secound-anchor").classList.add("active");
      document.getElementById("secound-anchor").style.pointerEvents = "auto";
    } else {
      document.getElementById("first-anchor").classList.add("active");
      document.getElementById("first-anchor").style.pointerEvents = "auto";

      document.getElementById("secound-anchor").classList.remove("active");
      document.getElementById("secound-anchor").style.pointerEvents = "none";

      document.getElementById("first-section-img2").style.transform =
        "rotate(-3deg) translate(0%, 23%)";
      document.getElementById("first-section-img2").style.opacity = "0";

      document.getElementById("first-section-img1").style.transform =
        "rotate(-3deg) translate(7%, 11%)";
      document.getElementById("first-section-img1").style.opacity = "1";
    }
  }

  function secsecanimation() {
    if (document.getElementById("sec-secound-anchor").className == "active") {
      document.getElementById("sec-secound-anchor").classList.remove("active");
      document.getElementById("sec-secound-anchor").style.pointerEvents =
        "none";
      document.getElementById("sec-first-anchor").classList.add("active");
      document.getElementById("sec-first-anchor").style.pointerEvents = "auto";

      document.getElementById("sec-section-1stimg").style.transform =
        "translateX(165%)";
      document.getElementById("sec-section-1stimg").style.opacity = "0";

      document.getElementById("sec-section-2ndimg").style.transform =
        " translateX(392%)";
      document.getElementById("sec-section-2ndimg").style.opacity = "1";

      document.getElementById("balmainlogo").style.transform =
        "translateX(109%)";
      document.getElementById("balmainlogo").style.opacity = "0";

      document.getElementById("hmlogo").style.transform = "translateX(320%)";
      document.getElementById("hmlogo").style.opacity = "1";

      document.getElementById("animatednum1").style.transform =
        "translateY(-100px)";
      document.getElementById("animatednum2").style.transform =
        "translateY(-50px)";
      document.getElementById("animatednum3").style.transform =
        "translateY(0px)";
    } else {
      document.getElementById("sec-secound-anchor").classList.add("active");
      document.getElementById("sec-secound-anchor").style.pointerEvents =
        "auto";

      document.getElementById("sec-first-anchor").classList.remove("active");
      document.getElementById("sec-first-anchor").style.pointerEvents = "none";

      document.getElementById("sec-section-1stimg").style.transform =
        "translateX(0%)";
      document.getElementById("sec-section-1stimg").style.opacity = "1";

      document.getElementById("sec-section-2ndimg").style.transform =
        " translateX(190%)";
      document.getElementById("sec-section-2ndimg").style.opacity = "0";

      document.getElementById("balmainlogo").style.transform =
        "translateX(-7%)";
      document.getElementById("balmainlogo").style.opacity = "1";

      document.getElementById("hmlogo").style.transform = "translateX(130%)";
      document.getElementById("hmlogo").style.opacity = "0";

      document.getElementById("animatednum1").style.transform =
        "translateY(0px)";
      document.getElementById("animatednum2").style.transform =
        "translateY(50px)";
      document.getElementById("animatednum3").style.transform =
        "translateY(100px)";
    }
  }
  const loading = document.querySelector(".loading");
  const content = document.querySelector(".content");
  setTimeout(() => {
    loading.style.opacity = "0";
    content.style.opacity = "1";
  }, 3000);