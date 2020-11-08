function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


//CHANGES LOCK IN NAVBAR
function hover(word){
	word.setAttribute('src', '../Img/lockedP2.png')
}

function unhover(word){
	word.setAttribute('src', '../Img/locked3.png')
}

// Retain unlock position when on page: *Work In Progress*
var on_page=document.getElementsByTagName("body");

on_page.addEventListener("pageshow", keep_unlock());

/*
function keep_unlock(){
	alert("In Function");
	var class_lock=document.querySelector("img."+string(on_page.className));
	class_lock.src="../Img/locked3.png";
}*/


//add-show
var slideIndex = 1;
slide(slideIndex);

function slide_mover(n) {
  slide(slideIndex += n);
}

function slide_num(n) {
  slide(slideIndex = n);
}

function slide(n) {
  var i;
  var slides = document.getElementsByClassName("next_slide");
  var dots = document.getElementsByClassName("order");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



// ABOUT US - flashcard
function flip(){
	var back = document.getElementById("gu_back");
	var front = document.getElementById("gu_front");

	if (front.style.display == "block"){
		back.style.display = "block";
		back.classList.remove('ani_fadeOut');
		back.classList.add('ani_fadeIn');
		front.classList.remove('ani.fadeIn');
		front.classList.add('ani_fadeOut')
		front.style.display = "none";
	} 
	else {
		back.classList.remove('ani_fadeIn');
		back.classList.add('ani_fadeOut');
		back.style.display = "none";
		front.classList.remove('ani_fadeOut');
		front.classList.add('ani_fadeIn');
		front.style.display = "block";
	}
}

function flip2(){
	var back = document.getElementById("gi_back");
	var front = document.getElementById("gi_front");

	if (front.style.display == "block"){
		back.style.display = "block";
		back.classList.remove('ani_fadeOut');
		back.classList.add('ani_fadeIn');
		front.classList.remove('ani.fadeIn');
		front.classList.add('ani_fadeOut')
		front.style.display = "none";
	} 
	else {
		back.classList.remove('ani_fadeIn');
		back.classList.add('ani_fadeOut');
		back.style.display = "none";
		front.classList.remove('ani_fadeOut');
		front.classList.add('ani_fadeIn');
		front.style.display = "block";
	}
}


function flip3(){
	var back = document.getElementById("gs_back");
	var front = document.getElementById("gs_front");

	if (front.style.display == "block"){
		back.style.display = "block";
		back.classList.remove('ani_fadeOut');
		back.classList.add('ani_fadeIn');
		front.classList.remove('ani.fadeIn');
		front.classList.add('ani_fadeOut')
		front.style.display = "none";
	} 
	else {
		back.classList.remove('ani_fadeIn');
		back.classList.add('ani_fadeOut');
		back.style.display = "none";
		front.classList.remove('ani_fadeOut');
		front.classList.add('ani_fadeIn');
		front.style.display = "block";
	}
}

/*
function changepic(){
	var section=document.getElementById("gs_unknown");
	section.style.backgroundImage="url('../Img/roads2.png')";	
}

function changeback(){
	var section=document.getElementById("gs_unknown");
	section.style.backgroundImage="url('../Img/roads3.png')";	
}*/