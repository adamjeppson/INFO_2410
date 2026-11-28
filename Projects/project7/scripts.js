// JavaScript Document
PrintButton1 = new Image
PrintButton2 = new Image
logo1 = new Image
logo2 = new Image
if (document.images) {
	PrintButton1.src = "images/print1.jpg"
	PrintButton2.src = "images/print2.jpg"
	logo1.src = "images/logo.png"
	logo2.src = "images/logo2.png"
}


var imgArray = new Array(
	'image1Lg.jpg',
	'image2Lg.jpg',
	'image3Lg.jpg',
	'image4Lg.jpg'


);


var titleArray = new Array(
	'Dog Performing a Trick',
	'Two Dogs',
	'Dog and Bird',
	'Snake'

);

var imgPath = "images/fullsize/";

function swapImage(imgID) {

	var theImage = document.getElementById('theImage');
	var textDiv = document.getElementById('bottomText');

	var newImg;
	var textTitle;

	newImg = imgArray[imgID];
	theImage.src = imgPath + newImg;

	textTitle=titleArray[imgID];

		textDiv.innerHTML = textTitle;
}

function preloadImages() {		
	for(var i = 0; i < imgArray.length; i++) {
		var tmpImg = new Image;
		tmpImg.src = imgPath + imgArray[i];
	}
}

