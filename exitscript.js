$(document).ready(function() {

$(function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "-80:-18",
    });
  });


$("#send").click(function(){
       partData=$("#form1").serializeArray();
       console.log(partData);
       console.log(sessvars.myObj);


       //$.post("http://blake.ppls.ed.ac.uk/~s1122689/script.php",
//    {
 //       inputData: output
 //   },
 //   function(data, status){
  //      alert("Data: " + data + "\nStatus: " + status);
  //  });
window.location.replace("debrief.html");
return(false);
    });

});