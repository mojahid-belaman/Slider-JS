// Get Slider Items | Array.from [ES6 feature]
let slideImgs = document.querySelectorAll('.slide-container img');

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

    myLi.setAttribute('id', 'slide' + i);

    // Set Item Content
    myLi.appendChild(document.createTextNode(i));

    // Append Items to the ul List
    myUl.appendChild(myLi);
}

// Add the Created Elements To the Page
document.getElementById('indicator').appendChild(myUl);

// Get Created Element UL By Js
let paginationUl = document.getElementById('pagination');

// Get Created Element LI By JS
let myLi = Array.from(document.querySelectorAll('#pagination li'))

// On Click The Element Li Make New Slider
for (let i = 0; i < myLi.length; i++)
{
    myLi[i].onclick = function () {
        currSlide = myLi[i].getAttribute('data-slide');
        myChecker();
    }
}

// Execute Function Checker every Two Second 
window.onload = function () {

    myChecker();
    let myVar = setInterval(() => {
        myChecker();
        funNext();
        if (currSlide == slideCount)
        {
            currSlide = 1;
            myChecker();
            clearInterval(myVar);
        }
    }, 2000)
    
}

// Hundle Click On Previous and Next Button
btnNext.onclick = funNext;
btnPrev.onclick = funPrev;


// Next Slide Function
function funNext() {
    
    if (currSlide != slideCount)
    {
        currSlide++;
        myChecker();
    }

}

// Previous Slide Function
function funPrev() {

    if (currSlide > 1)
    {
        currSlide--;
        myChecker();
    }
}

function myChecker() {

    // Set String Slider With Number the Slider and Count Slider
    slideNumStr.textContent = `Slide #${currSlide} of ${slideCount}`;

    // Remove All Class active
    removeClassActive();
    
    slideImgs[currSlide - 1].classList.add('active');
    
    // Add Class Active In Element Li To Apply CSS
    paginationUl.children[currSlide - 1].classList.add('active');

    // Check First Li and Last Li To Disable Button
    (currSlide == 1) ? btnPrev.classList.add('disable') : btnPrev.classList.remove('disable');
    
    (currSlide == slideCount) ? btnNext.classList.add('disable') : btnNext.classList.remove('disable');
    
}

// Remove All Class Active
function removeClassActive() {
    
    // Loop Slider Images and Remove Class Active
    for (const elem of slideImgs) {
        elem.classList.remove('active');
    }
    
    // Loop Element li and Remove Class Active
    for (const elem of paginationUl.children) {
        elem.classList.remove('active');
    }

}