"use strict";
const btnRight = document.querySelector(".slide__btn-right");
const btnLeft = document.querySelector(".slide__btn-left");
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
let curSlid = 0;
let maxSlide = slides.length;
function gotoSlide(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
    s.classList.toggle("hidden");
  });
}
function nextSlide() {
  if (curSlid === maxSlide - 1) curSlid = 0;
  else curSlid++;
  gotoSlide(curSlid);
}
function preSlide() {
  if (curSlid === 0) curSlid = maxSlide - 1;
  else curSlid--;
  gotoSlide(curSlid);
}
function init() {
  gotoSlide(0);
}
btnLeft.addEventListener("click", nextSlide);
btnRight.addEventListener("click", preSlide);
