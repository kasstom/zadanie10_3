$(function(){
	console.log('DOM loaded - you can have fun');

function carousel() {
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 3000);

	function changeSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		carouselList.animate({'marginLeft': -400}, 1500, moveFirstSlide);
			
		function moveFirstSlide() {
				lastItem.after(firstItem);	
				carouselList.css({marginLeft:0});
		};
	};
};
carousel();
});