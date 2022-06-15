const slider = document.querySelector('.carousel-slider');
const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');
const title = document.querySelector('h1');
const touristImg = document.querySelector('.lady');
var slideNum = document.querySelector('.counter_page');

/*TODO: sa schimbi sliderurile prin touch event si progressbar jos*/

var currentSlide = 0;
var totalSlides = 9;
leftBtn.style.opacity = ".3";

changeSlideNumber();

rightBtn.addEventListener('click', function() {
	currentSlide = (currentSlide < 9) ? currentSlide + 1 : 9;
	slider.style.transform = 'translate(' + (currentSlide) * -10 + '%)';

if (currentSlide < 9) {
	rightBtn.style.opacity = "1";
	leftBtn.style.opacity = "1";
	//console.log("if, op 1, rightBtn " + "currentSlide: " + currentSlide);
} else {
	rightBtn.style.opacity = ".3";
	//console.log("else, op .3, rightBtn " + "currentSlide: " + currentSlide);
}
changeSlideNumber();
cover();
});

leftBtn.addEventListener('click', function() {
	currentSlide = (currentSlide > 0) ? currentSlide - 1 : 0;
	slider.style.transform = 'translate(' + (currentSlide) * -10 + '%)';

	if (currentSlide > 0) {
	leftBtn.style.opacity = "1";
	rightBtn.style.opacity = "1";
	//console.log("if, op 1, leftBtn " + "currentSlide: " + currentSlide);
} else {
	leftBtn.style.opacity = ".3";
	//console.log("else, op 1, leftBtn " + "currentSlide: " + currentSlide);
}
changeSlideNumber();
cover();
});

function cover() { 

if (currentSlide == 1 || currentSlide == 7) {

touristImg.style.filter = "brightness(0.6)";
} else {
	touristImg.style.filter = "brightness(1)";
	}
};

function changeSlideNumber() {
	var count = document.querySelectorAll('.counter_page');

	count.forEach(p => {
    p.innerHTML = `<b>` + (currentSlide + 1) + `/10` + `</b>`;
})
	console.log(slideNum);
}

window.addEventListener("keydown", function press(event) {
  
  if (event.code === "ArrowLeft") {
  	currentSlide = (currentSlide > 0) ? currentSlide - 1 : 0;
	slider.style.transform = 'translate(' + (currentSlide) * -10 + '%)';
		if (currentSlide > 0) {
			leftBtn.style.opacity = "1";
			rightBtn.style.opacity = "1";
		} else {
			leftBtn.style.opacity = ".3";
		}
  } else if (event.code === "ArrowRight") {
    currentSlide = (currentSlide < 9) ? currentSlide + 1 : 9;
	slider.style.transform = 'translate(' + (currentSlide) * -10 + '%)';
		if (currentSlide < 9) {
			rightBtn.style.opacity = "1";
			leftBtn.style.opacity = "1";
		} else {
			rightBtn.style.opacity = ".3";
		}
	}
 
}, true);



/*
window.onload=function(){
  document.querySelector(".counter_page").innerHTML = "pisici";
  }*/

