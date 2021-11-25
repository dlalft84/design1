// Observer

// Animation moveUp
const observer = new IntersectionObserver((entries)=> {
	for (const entry of entries) {
		entry.target.classList.toggle("moveUp", entry.isIntersecting)
	}
}, {
	threshold: 1
}); // Action à faire une fois l'élément observé

// Animation moveRight
const observer2 = new IntersectionObserver((entries)=> {
	for (const entry of entries) {
		entry.target.classList.toggle("moveRight", entry.isIntersecting)
	}
}, {
	threshold: 1
}); // Action à faire une fois l'élément observé

// Animation moveRight
const observer3 = new IntersectionObserver((entries)=> {
	for (const entry of entries) {
		entry.target.classList.toggle("moveLeft", entry.isIntersecting)
	}
}, {
	threshold: 1
}); // Action à faire une fois l'élément observé

// Animation zoomIn
const observer4 = new IntersectionObserver((entries)=> {
	for (const entry of entries) {
		entry.target.classList.toggle("zoomIn", entry.isIntersecting)
	}
}, {
	threshold: 1
}); // Action à faire une fois l'élément observé

let box = document.querySelector('#box'); // Element à observer
observer.observe(box);

let box2 = document.querySelector('#box2'); // moveUp
observer.observe(box2);

let box3 = document.querySelector('#box3'); // moveUp
observer.observe(box3);

let box4 = document.querySelector('#box4'); // moveUp
observer.observe(box4);

let box5 = document.querySelector('#box5'); // moveUp
observer.observe(box5);

let box6 = document.querySelector('#box6'); // moveRight
observer2.observe(box6);

let box7 = document.querySelector('#box7'); // moveLeft
observer3.observe(box7);

let box8 = document.querySelector('#box8'); // moveRight
observer2.observe(box8);

let box9 = document.querySelector('#box9'); // moveLeft
observer3.observe(box9);

let box10 = document.querySelector('#box10'); // moveRight
observer2.observe(box10);

let box11 = document.querySelector('#box11'); // zoomIn
observer4.observe(box11);
