/* Footer Align
 * Aligns the footer to the bottom of the browser window (removes the footer from normal content flow)
 * If the browser height is so small that the footer is not immediately visible, restore footer to normal content flow
 */

window.onload=function(){
	height = document.getElementById("header").offsetHeight + document.getElementById("content").offsetHeight + footer.offsetHeight;
	height = document.getElementsByTagName("body")[0].offsetHeight;
	footer = document.getElementById("footer");
	if(window.innerHeight >= height){
		footer.style.position = "fixed";
		footer.style.top = (window.innerHeight - footer.offsetHeight) + "px";
		footer.style.width = "100%";
	} else {
		footer.style.position = "relative";
		footer.style.top = 0;
	}
}
window.onresize=function(){
	footer = document.getElementById("footer");
	if(window.innerHeight >= height){
		footer.style.position = "fixed";
		footer.style.top = (window.innerHeight - footer.offsetHeight) + "px";
		footer.style.width = "100%";
	} else {
		footer.style.position = "relative";
		footer.style.top = 0;
	}
}