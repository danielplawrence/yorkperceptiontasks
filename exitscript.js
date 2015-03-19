$(document).ready(function() {
   


   console.log(sessvars.myObj);
   console.log(sessvars.images);
      console.log(sessvars.imageRatings);

/////////////////Save time later by adding image ratings to each line of sessvars.myObj
/////////////////Format: userinfo, all trial info, rating for the selected image, newline
var dataarray=sessvars.myObj.split("\r\n");
var images=sessvars.imageRatings;
var nimage=images.length;
var totaln=dataarray.length;
var testarray=[];
for (i=0;i<totaln;i++){
  var target=dataarray[i].split(',')[3]
  for (j=0;j<nimage;j++){
    if (target==images[j][0]){
      var stringtoadd=images[j].toString();
      dataarray[i]= dataarray[i]+","+stringtoadd+",";
    }
}

  }





///////////////////////////////////////////////////////////////////////////////////////////


$(function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-80:-18",
    });
  });

//Send data to server/////////////////////////////////////////////////////////////////////
$("#send").click(function(){
       partData=$("#form1").serializeArray();
       console.log(partData);
       console.log(sessvars.myObj);
       var biodata=partData[0].value+","+partData[1].value+","+partData[2].value+","+partData[3].value+","+partData[4].value;
       for (i=0;i<totaln;i++){
      dataarray[i]= dataarray[i]+","+biodata+"\r\n";}
      output=dataarray.toString();
      console.log(output);
       });


       //$.post("http://blake.ppls.ed.ac.uk/~s1122689/script.php",
//    {
 //       inputData: output
 //   },
 //   function(data, status){
  //      alert("Data: " + data + "\nStatus: " + status);
  //  });
//window.location.replace("debrief.html");
//return(false);
////////////////////////////////////////////////////////////////////////////////////////////

});

