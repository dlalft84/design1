const observer = new IntersectionObserver((entries)=> {
	for (const entry of entries) {
		entry.target.classList.toggle("moveUp", entry.isIntersecting)
	}
}, {
	threshold: 1
}); // Action à faire une fois l'élément observé


let box = document.querySelector('#box'); // Element à observer
observer.observe(box);

let box2 = document.querySelector('#box2'); // Element à observer
observer.observe(box2);

let box3 = document.querySelector('#box3'); // Element à observer
observer.observe(box3);

let box4 = document.querySelector('#box4'); // Element à observer
observer.observe(box4);

let box5 = document.querySelector('#box5'); // Element à observer
observer.observe(box5);