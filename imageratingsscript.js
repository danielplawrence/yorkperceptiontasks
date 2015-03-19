$(document).ready(function() {
//cycle through entire set of images, display, get ratings, add to array
ratings=[];
images=sessvars.images;
console.log(images);
images=shuffle(images);
console.log(images);
i=0;
nimages=images.length;

$("#next").click(function(){
  console.log("click!");
//here is where the cycling happens
if (i<nimages){
///add form contents to array of responses
response=logResponse();
ratings.push(response);
changeImage("#topleftimg",images[i]);
i=i+1
} else {
sessvars.imageRatings=ratings;
window.location.replace("exit.html")
}
    });

function logResponse(){
//get slider values
var image_age = $('input[name=age]').val();
var image_soc = $('input[name=soc]').val();
var image_loc = $('input[name=loc]').val();
var image_rating = $('input[name=age]').val();
var image_net = $('input[name=net]').val();
var file = $("#topleftimg").attr("src")
return([file,image_age,image_soc,image_loc,image_rating,image_net]);
}


//change the image
function changeImage(target,source){
	$(target).attr("src",source.file);
}

//Functions for preloading of images and audio
function loadImage(uri)
{
    var img = new Image();
    img.onload = isAppLoaded;
    img.src = uri;
    return img;
}

function loadAudio(uri)
{
    var audio = new Audio();
    audio.addEventListener('canplaythrough', isAppLoaded, false); 
    audio.src = uri;
    return audio;
}

function isAppLoaded()
{
    filesLoaded++;
    if (filesLoaded >= filesToLoad){console.log("loaded")};
}


//randomization function
//Fischer-yates shuffle
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
//slider listener


});