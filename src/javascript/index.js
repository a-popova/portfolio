import '../sass/styles.scss';

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = "none";
    }
  });
}

const iframeContainer = document.querySelector(".iframe-container");
const iframe = document.querySelector(".iframe-container iframe");

let width = 0;

document.querySelectorAll(".js-preview").forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.add("hide-overflow");
    iframe.src = element.dataset.src;
    width = element.dataset.width;
    iframeContainer.classList.remove("hidden");
  })
});

const backButton = document.querySelector(".js-back"); 
backButton.addEventListener("click", () => {
  iframeContainer.classList.add("hidden");
  iframe.src = "";
  document.body.classList.remove("hide-overflow");
  iframe.classList.remove("mobile");
  iframe.style.width = "100%";
});

const switchButton = document.querySelector(".js-switch");
switchButton.addEventListener("click", () => {
  if (iframe.classList.contains("mobile")) {
    iframe.style.width = "100%";
    iframe.classList.remove("mobile");
  } else {
    iframe.classList.add("mobile");
    iframe.style.width = width + 'px';
  }
  
})


let slideIndex = 1;
showSlides(slideIndex);

document.querySelector('.left').addEventListener("click", prevSlide);
document.querySelector('.right').addEventListener("click", nextSlide);

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('.slide');

  if (n > slides.length){
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

const container = document.querySelector('.projects--container'); 
container.addEventListener("touchstart", startTouch, false);
container.addEventListener("touchmove", touchMove, false);
container.addEventListener("touchend", touchEnd, false);

let initialX = null;
let finishX = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
};

function touchMove(e) {
  finishX = e.touches[0].clientX;
}
 
function touchEnd(e) {
  console.log(e);
  if (initialX === null || finishX === null) {
    return;
  }

  var diffX = initialX - finishX;
 
    if (diffX > 0) {
      nextSlide();
    } else {
      prevSlide();
    }  
 
  initialX = null;
  finishX = null;
   
  e.preventDefault();
};