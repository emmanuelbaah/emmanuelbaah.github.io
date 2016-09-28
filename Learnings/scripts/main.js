var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/adventure_time_straw_hat_pirates.jpg'){
		//alert("1");
		myImage.setAttribute('src','images/adventure_time_gang2.jpg');
	}else if(mySrc === 'images/adventure_time_gang2.jpg'){
		//alert("2");
		myImage.setAttribute('src','images/straw_hat_pirates.jpg');
	}else if(mySrc === 'images/straw_hat_pirates.jpg'){
		//alert("3");
		myImage.setAttribute('src','images/adventure_time_finn_and_jake.jpg');
	}else{
		//alert("4");
		myImage.setAttribute('src','images/adventure_time_straw_hat_pirates.jpg');
	}
}

function changePic(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/adventure_time_straw_hat_pirates.jpg'){
		//alert("1");
		myImage.setAttribute('src','images/adventure_time_gang2.jpg');
		return;
	}else if(mySrc === 'images/adventure_time_gang2.jpg'){
		//alert("2");
		myImage.setAttribute('src','images/straw_hat_pirates.jpg');
		return;
	}else if(mySrc === 'images/straw_hat_pirates.jpg'){
		//alert("3");
		myImage.setAttribute('src','images/adventure_time_finn_and_jake.jpg');
		return;
	}else{
		//alert("4");
		myImage.setAttribute('src','images/adventure_time_straw_hat_pirates.jpg');
		return;
	}	
}

//var newVar = setInterval(changePic,1000);

//var stopPic = document.querySelector('html');
//stopPic.onclick = clearTimeout(newVar);

var myButton = document.querySelector('button');
/*function multiply(num1, num2){
	return num1 * num2;
}
document.querySelector("img").onclick = function(){
	alert(multiply(4,7));	
}
*/

