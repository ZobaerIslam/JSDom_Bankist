'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////


// ** Selecting elements **
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// create and store NodeList --> document.querySelector();
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// create and store HTMLCollection --> document.getElementById();
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));



// ** Creating and inserting elements **
// .insertAdjacentHTML 
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.'
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie"> Got it!</button>';

// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

header.before(message);
// header.after(message);



// ** Delete elements **
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  // message.parentElement.removeChild(message);
  message.remove();
})

/*

// ** Styles **
message.style.backgroundColor = '#37383d';
message.style.width = '90%';
message.style.margin = 'auto';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(getComputedStyle(message).height);


document.documentElement.style.setProperty('--color-primary', 'orangered');


// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

// Non-standard 
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('compamy', 'Banklist');

console.log(logo.src);  // Absolute logo src
// Relative logo src
console.log(logo.getAttribute('src'));  

const link = document.querySelector('.twitter-link');
// both are Absolute link
console.log(link.href);
console.log(link.getAttribute('href'));

const nav_link = document.querySelector('.nav__link--btn');
console.log('Absolute link:', nav_link.href);   // Absolute nav link
console.log('Relative link:', nav_link.getAttribute('href'));   // Relative nav link


// Data attribute
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');  // not includes

// Don't use  # overwrite all classes into this class name
// logo.className = 'siam';

*/

// ** Implement Smooth Scrolling **
// 1st way: old style
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect()); // relative to viewport

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // View port height and width (dimension)
  console.log(
    'height / width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // 1st way: old style

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset
  // );

  // // Smooth scrolling
  // window.scrollTo( {
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  // 2nd way: mordern or new style
  section1.scrollIntoView({behavior: 'smooth'});

});


// ** Types of Events and Events Handlers **

const h1 = document.querySelector('h1');

const alertH1 = function(e) {
  alert('addEventListener: Great! You are reading the heading :D');

  // remove event listerner
  h1.removeEventListener('mouseenter', alertH1);
};

// 1st way: new way
h1.addEventListener('mouseenter', alertH1);

// // 2nd way: old way
// h1.onmouseenter = function(e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// // remove event listerner after 3s passed
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); 


// 3rd way: old way
// -- by using HTML attribute in html file.

