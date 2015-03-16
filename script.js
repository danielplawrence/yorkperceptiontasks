$(document).ready(function() {

//initialize output array
output= new String;
user="Daniel";
//image stimuli
var image1 = {file:"images/M_Y_MC_L.png",age:"Y",gender:"M",soc:"M",loc:"L"};
var image2 = {file:"images/M_O_MC_L.png",age:"O",gender:"M",soc:"M",loc:"L"};
var image3 = {file:"images/M_Y_WC_L.png",age:"Y",gender:"M",soc:"W",loc:"L"};
var image4 = {file:"images/M_O_WC_L.png",age:"O",gender:"M",soc:"W",loc:"L"};
var image5 = {file:"images/M_Y_MC_NL.png",age:"Y",gender:"M",soc:"M",loc:"N"};
var image6 = {file:"images/M_O_MC_NL.png",age:"O",gender:"M",soc:"M",loc:"N"};
var image7 = {file:"images/M_Y_WC_NL.png",age:"Y",gender:"M",soc:"W",loc:"N"};
var image8 = {file:"images/M_O_WC_NL.png",age:"O",gender:"M",soc:"W",loc:"N"};

var images =[image1,image2,image3,image4,image5,image6,image7,image8];
//trials
//older, choose class and localness
var trial1 ={images:[image2,image4,image6,image8],constant:"age",value:"O"};
//younger, choose class and localness
var trial2= {images:[image1,image3,image5,image7],constant:"age",value:"Y"}
//wc,choose age and localness
var trial3={images:[image3,image4,image7,image8],constant:"soc",value:"W"};
//mc,choose class and localness
var trial4={images:[image1,image2,image5,image6],constant:"soc",value:"M"};
//local, choose age/class
var trial5={images:[image1,image2,image3,image4],constant:"loc",value:"L"};
//n local, choose age/class
var trial6={images:[image5,image6,image7,image8],constant:"loc",value:"N"};

//array of trials
var items=[trial1,trial2,trial3,trial4,trial5,trial6];
items=shuffle(items);
//array of audio stimuli

//randomize arrays

//loop through array and present items
//function to set an image
function changeImage(target,source){
	$(target).attr("src",source.file);
}
//function to set a trial
function setTrial(trial){
trial=shuffle(trial);
changeImage("#topleftimg",trial.images[0]);
changeImage("#toprightimg",trial.images[1]);
changeImage("#bottomleftimg",trial.images[2]);
changeImage("#bottomrightimg",trial.images[3]);
console.log("Trial "+i);
console.log("TL "+trial.images[0].file);
console.log("TR  "+trial.images[1].file);
console.log("BL "+trial.images[2].file);
console.log("BR "+trial.images[3].file);
}
 //Keypress detection
 //temp var for logging trials
 var i=0;
 var itemslength=items.length;
$(document).keydown(function(event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  console.log(keycode);
  console.log(i);
  var ans= getResponse(keycode);
  //get the time
  var t=new Date();
  //
  var info=[user,t,i];
  var trialinfo= [items[i].constant,items[i].value];
  thistrial_output=ans.concat(trialinfo);
  thistrial_output=info.concat(thistrial_output);
  console.log("This trial data:" + thistrial_output);
  thistrial_output=thistrial_output.toString();
    console.log("This trial data as string:" + thistrial_output);
  thistrial_output+="\r\n";
  console.log("This trial data as string with newline:" + thistrial_output);
    output=output.concat(thistrial_output);
 	console.log(output);

  //e=69 d=68 i=73 j=74 
setTrial(items[i]);
i++

if (i>=itemslength){
	//this will eventually be where we terminate the experiment.
	 $.post("http://blake.ppls.ed.ac.uk/~s1122689/script.php",
    {
        inputData: output
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
}
});

//work out which image was being displayed, log it to array of responses
function getResponse(key){
//get the source of all images
var tl = $("#topleftimg").attr("src");
var tr = $("#toprightimg").attr("src");
var bl = $("#bottomleftimg").attr("src");
var br = $("#bottomrightimg").attr("src");

//work out which one was selected
if (key==69){var sel=tl;}
if (key==68){var sel=bl;}
if (key==73){var sel=tr;}
if (key==74){var sel=br;}

console.log("Selected "+sel);
var obj = images.filter(function ( obj ) {
    return obj.file === sel;
})[0];
if (undefined!=obj){
return([obj.file,obj.gender,obj.age,obj.soc,obj.loc,tl,bl,tr,br]);
} else {
	return([]);
}

}
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

});
