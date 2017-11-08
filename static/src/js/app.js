
import TouchScroll from "touch-scroll-diy";

document.ontouchmove = function(){return false;};


window.onload = function(){

	let oMain = document.getElementsByClassName("main")[0];
	for(let i=0; i<200; i++){
		let oLi = document.createElement("li");
		oLi.innerText = i;
		oMain.appendChild(oLi);
	}

	let myScroll = new TouchScroll('.wrap');

};