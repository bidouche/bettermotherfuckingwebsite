document.querySelector('html').onload = setTimeout(function(){
var url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
var popup = confirm('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please')
if (popup === true){window.open(url)} else{
}
},10000);


document.querySelector('button').onclick = function(){
	document.body.style.backgroundColor = "magenta";

	var x = document.getElementsByTagName("p");
					for (var i = 0; i < x.length; i++) {
						x[i].style.color = "blue";
					}
	var x = document.getElementsByTagName("ul");
					for (var i = 0; i < x.length; i++) {
						x[i].style.color = "blue";
					}			
	var x = document.getElementsByTagName("blockquote");
					for (var i = 0; i < x.length; i++) {
						x[i].style.color = "blue";
					}	
	var x = document.getElementsByTagName("h1");
					for (var i = 0; i < x.length; i++) {
						x[i].style.color = "green";
					}
	var x = document.getElementsByTagName("h2");
					for (var i = 0; i < x.length; i++) {
						x[i].style.color = "green";
					}
	var x = document.getElementsByTagName("h3");
					for (var i = 0; i < x.length; i++) {
						x[i].style.color = "green";
					}
	var x = document.getElementsByTagName("p");
					for (var i = 0; i < x.length; i++) {
						x[i].style.fontFamily = "papyrus";
					}
	var x = document.getElementsByTagName("ul");
					for (var i = 0; i < x.length; i++) {
						x[i].style.fontFamily = "papyrus";
					}
	var x = document.getElementsByTagName("h1");
					for (var i = 0; i < x.length; i++) {
						x[i].style.fontFamily = "Comic Sans MS";
					}	
	var x = document.getElementsByTagName("h2");
					for (var i = 0; i < x.length; i++) {
						x[i].style.fontFamily = "Comic Sans MS";
					}
	var x = document.getElementsByTagName("h3");
					for (var i = 0; i < x.length; i++) {
						x[i].style.fontFamily = "Comic Sans MS";
					}									
}