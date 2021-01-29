let currentImg=0;
let images=document.getElementsByClassName("allImgInCarousel");
let numOfImages=images.length;

function next(){

	if(currentImg<numOfImages-1) {

	currentImg++;
	
	images[currentImg].className="carouselImg allImgInCarousel";
	for(let a=0;a<numOfImages;a++)
	{
		if(a!=currentImg){
		images[a].className="nonVisibleImg allImgInCarousel";
		}
	}
	
}
}
function prev()
{

	if(currentImg>0) {

	currentImg--;
	
	images[currentImg].className="carouselImg allImgInCarousel";
	for(let a=0;a<numOfImages;a++)
	{
		if(a!=currentImg){
		images[a].className="nonVisibleImg allImgInCarousel";
		}
	}
	}

}