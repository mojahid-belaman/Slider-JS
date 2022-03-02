// Get Slider Items | Array.from [ES6 feature]
let slideImgs = Array.from(document.querySelectorAll('.slide-container img'));

// Get Number Of Slider
let slideCount = slideImgs.length;

// Set Current Slider
let currSlide = 1;

// Slider Number String
let slideNumStr = document.getElementById('slide-number');

//Previous and Next Button
let btnNext = document.getElementById('next');
let btnPrev = document.getElementById('prev');

// Hundle Click On Previous and Next Button
btnNext.onclick = funNext;
btnPrev.onclick = funPrev;


// Next Slide Function
function funNext() {
    console.log('next');
}

// Previous Slide Function
function funPrev() {
    console.log('previous');
}