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

// Create Element ul
let myUl = document.createElement('ul');

// Set Attribute id the Element ul
myUl.setAttribute('id', 'pagination');

// Loop In Array the Slider and Create Elements the li
for(let i = 1; i <= slideCount; i++)
{
    // Create Element li
    let myLi = document.createElement('li');

    // Set Custom Attribute
    myLi.setAttribute('data-slide', i);

    // Set Item Content
    myLi.appendChild(document.createTextNode(i));

    // Append Items to the ul List
    myUl.appendChild(myLi);
}

// Add the Created Elements To the Page
document.getElementById('indicator').appendChild(myUl);

// Get Created Element UL By Js
let paginationUl = document.getElementById('pagination');

// Execute Function Checker
myChecker();

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

function myChecker() {
    
    slideNumStr.textContent = `Slide #${currSlide} of ${slideCount}`;

    slideImgs[currSlide - 1].classList.add('active');

    paginationUl.children[currSlide - 1].classList.add('active');
}