function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});



let footerTitle = document.querySelectorAll('.column-questions__btn');
let footerColumn = document.querySelectorAll('.column-questions__main');


footerTitle.forEach((item, index, parent) => {
	item.addEventListener("click", function () {
		footerColumn[index].classList.toggle("_active");
	});
});

footerTitle.forEach((item, index, parent) => {
	item.addEventListener("click", function () {
		footerTitle[index].classList.toggle("_rot");
	});
});

let burger = document.querySelector('.header__menu');
let burherClick = document.querySelector('.header__burger');
let wrap = document.querySelector('body');


burherClick.addEventListener("click", function () {
	burger.classList.toggle("_burger");
	wrap.classList.toggle('_lock')
	burherClick.classList.toggle('_transform')




});


