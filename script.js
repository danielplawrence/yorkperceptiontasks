$(document).ready(function() {
//declare global variables
var t= new Date();
var trialinfo= [];
var soundinfo=[];
//initialize output array
output= new String;
user="Daniel";
var stime=$.now();
//put preloading here//
filesToLoad = 2;
filesLoaded = 0;
//image stimuli
var image1 = {file:"images/M_Y_MC_L.png",age:"Y",gender:"M",soc:"M",loc:"L"};
var image2 = {file:"images/M_O_MC_L.png",age:"O",gender:"M",soc:"M",loc:"L"};
var image3 = {file:"images/M_Y_WC_L.png",age:"Y",gender:"M",soc:"W",loc:"L"};
var image4 = {file:"images/M_O_WC_L.png",age:"O",gender:"M",soc:"W",loc:"L"};
var image5 = {file:"images/M_Y_MC_NL.png",age:"Y",gender:"M",soc:"M",loc:"N"};
var image6 = {file:"images/M_O_MC_NL.png",age:"O",gender:"M",soc:"M",loc:"N"};
var image7 = {file:"images/M_Y_WC_NL.png",age:"Y",gender:"M",soc:"W",loc:"N"};
var image8 = {file:"images/M_O_WC_NL.png",age:"O",gender:"M",soc:"W",loc:"N"};
//audio stimuli
var sound1 = {file:loadAudio('audio/Bill_northern_bus_auto_spliced.wav'),name:'Bill_northern_bus_auto_spliced.wav',speaker:"Bill",vowel:"AH",variant:"UH"};
var sound2 = {file:loadAudio('audio/Bill_northern_bus_auto_spliced.wav'),name:'Bill_northern_bus_auto_spliced.wav',speaker:"Bill",vowel:"AH",variant:"UH"};
var sound3 = {file:loadAudio('audio/Bill_northern_bus_auto_spliced.wav'),name:'Bill_northern_bus_auto_spliced.wav',speaker:"Bill",vowel:"AH",variant:"UH"};
var sound4 = {file:loadAudio('audio/Bill_northern_bus_auto_spliced.wav'),name:'Bill_northern_bus_auto_spliced.wav',speaker:"Bill",vowel:"AH",variant:"UH"};
var sound5 = {file:loadAudio('audio/Bill_northern_bus_auto_spliced.wav'),name:'Bill_northern_bus_auto_spliced.wav',speaker:"Bill",vowel:"AH",variant:"UH"};
var sound6 = {file:loadAudio('audio/Bill_northern_bus_auto_spliced.wav'),name:'Bill_northern_bus_auto_spliced.wav',speaker:"Bill",vowel:"AH",variant:"UH"};
var sound7 = {file:loadAudio('audio/Bill_northern_bus_auto_spliced.wav'),name:'Bill_northern_bus_auto_spliced.wav',speaker:"Bill",vowel:"AH",variant:"UH"};
var sound8 = {file:loadAudio('audio/Bill_northern_bus_auto_spliced.wav'),name:'Bill_northern_bus_auto_spliced.wav',speaker:"Bill",vowel:"AH",variant:"UH"};
var sound9 = {file:loadAudio('audio/Bill_northern_bus_auto_spliced.wav'),name:'Bill_northern_bus_auto_spliced.wav',speaker:"Bill",vowel:"AH",variant:"UH"};
var sound10 = {file:loadAudio('audio/Bill_northern_bus_auto_spliced.wav'),name:'Bill_northern_bus_auto_spliced.wav',speaker:"Bill",vowel:"AH",variant:"UH"};


//experimental design////////////////////////////////////////////////////////
//array of visual stimuli
var images =[image1,image2,image3,image4,image5,image6,image7,image8];
var nimages=images.length;
sessvars.images=images;
//array of audio stimuli
var sounds =[sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8,sound9,sound10];
var nsounds=sounds.length;
//older, choose class and localness
var trial1 ={images:[image2,image4,image6,image8],constant:"age",value:"O",sound:""};
//younger, choose class and localness
var trial2= {images:[image1,image3,image5,image7],constant:"age",value:"Y",sound:""}
//wc,choose age and localness
var trial3={images:[image3,image4,image7,image8],constant:"soc",value:"W",sound:""};
//mc,choose class and localness
var trial4={images:[image1,image2,image5,image6],constant:"soc",value:"M",sound:""};
//local, choose age/class
var trial5={images:[image1,image2,image3,image4],constant:"loc",value:"L",sound:""};
//n local, choose age/class
var trial6={images:[image5,image6,image7,image8],constant:"loc",value:"N",sound:""};
var trials=[trial1,trial2,trial3,trial4,trial5,trial6];
var ntrials=trials.length;
///////////////////////////////////////////////////////////////////////////
//each trial set needs to appear with each stimulus item yielding 60 basic trials
//sound can be included as part of the trial object
//this loop creates ntrials*nsounds trials with each sound added to each combination
var items=[];
var itemnames=[];
for (j=0;j<nsounds;j++){
  var soundn=j+1;
    for (k=0;k<ntrials;k++){
          var trialn=k+1;
          var trial_name=["trial",soundn*trialn].join('');
           window[trial_name]=trials[k];
           window[trial_name].sound=sounds[j];
            items.push(window[trial_name]);
            itemnames.push(trial_name);
        }
}

var itemslength=items.length;
console.log(itemnames);

items=shuffle(items);
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
////set up first trial
function present(){
  //get the time
  stime=$.now();
  t=new Date();
  trialinfo= [items[i].constant,items[i].value];
 soundinfo=[items[i].sound.name,items[i].sound.speaker,items[i].sound.vowel,items[i].sound.variant];
    setTrial(items[i]);
  playSound(items[i].sound.file);

}


$("#start").click(function(){

present();

});


$(document).keydown(function(event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
if (keycode==69|keycode==68|keycode==73|keycode==74|keycode==13){

  //log trial ouput
  var info=[user,t,i];

  var keycode = (event.keyCode ? event.keyCode : event.which);
  console.log(keycode);
  console.log(i);
  var ans= getResponse(keycode);

  var thistrial_output=ans.concat(trialinfo);
  thistrial_output=thistrial_output.concat(soundinfo);
  thistrial_output=info.concat(thistrial_output);

  console.log("This trial data:" + thistrial_output);
  thistrial_output=thistrial_output.toString();
    console.log("This trial data as string:" + thistrial_output);
  thistrial_output+="\r\n";
  console.log("This trial data as string with newline:" + thistrial_output);
  output=output.concat(thistrial_output);

  i++
if (i>=itemslength){
	//this will eventually be where we terminate the experiment.
window.location.replace("imageratings.html");
  sessvars.myObj=output;
} else {
  present();
}
}
});

//work out which image was being displayed, log it to array of responses
function getResponse(key){
time=stime;
stime=$.now();
var rtime=stime-time;
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
if (key==13){window.location.replace("imageratings.html");}
console.log("Selected "+sel);
var obj = images.filter(function ( obj ) {
    return obj.file === sel;
})[0];
if (undefined!=obj){
return([obj.file,obj.gender,obj.age,obj.soc,obj.loc,rtime,tl,bl,tr,br]);
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
//Play a sound -- takes my sound objects as input
function playSound(sound){
sound.play();
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
});
