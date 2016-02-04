/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false */
/*jshint browser:true */
/*jslint smarttabs:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
	
 var Uname = "";
 var userLocation;
 function register_event_handlers()
 {
 //Global username variable is used throughout the project

 
      
        /* button  Login */
    $(document).on("click", ".uib_w_76", function(evt)
    {
        /* your code goes here */ 
		Uname = document.getElementById("nameInput").value; 
		var Upass = document.getElementById("passInput").value;
		if (Uname === "" || Upass === "")
		{
			document.getElementById("authResponse").innerHTML = "Please fill out the fields";
		} else
		{
			intel.xdk.device.getRemoteData("http://proj2-1095.appspot.com/UserAuth", "POST", "userName=" + Uname + "&passWord=" + Upass + "&Choice=Login", "authenticate_User",                                                    "POSTerror_handler");			
		}

		
		
    });
    
        /* button  Register */
	 //Register an account to begin adding timestudies and procedures
    $(document).on("click", ".uib_w_79", function(evt)
    {
        /* your code goes here */ 
		Uname = document.getElementById("nameInput").value; 
		var Upass = document.getElementById("passInput").value;
		
		if (Uname === "" || Upass === "")
		{
			document.getElementById("authResponse").innerHTML = "Please fill out the fields";
		} else
		{		
			intel.xdk.device.getRemoteData("http://proj2-1095.appspot.com/UserAuth", "POST", "userName=" + Uname + "&passWord=" + Upass + "&Choice=Register", "register_User",                                                    "POSTerror_handler");
		}
    });
    
        /* button  New Study */
    
    
        /* button  YOULIKETHAT ??? What does this do?*/
    
    
        /* button  Pass */
    $(document).on("click", ".uib_w_84", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_3"); 
    });
    
        /* button  Cancel Study */
    $(document).on("click", ".uib_w_83", function(evt)
    {
        /* your code goes here */ 
		document.getElementById("studyResults").innerHTML = "";
		activate_subpage("#instance-view");
    });
    
        /* listitem  Study Instances */
    
    
        /* listitem  Study Instances */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_4"); 
    });
    
    }
	
	
    
        /* button  Return --return to previous page*/
    $(document).on("click", ".uib_w_55", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_page_2"); 
    });
    
    
        /* button  Back to resources */
    $(document).on("click", ".uib_w_56", function(evt)
    {
        /* your code goes here */ 
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });
    
	 
	 
        /* button  Alert */
    $(document).on("click", ".uib_w_58", function(evt)
    {
        /* your code goes here */
		document.getElementById("frontPage").innerHTML = ".....testing.....";
    });


    
        /* button  Get current studies */
    $(document).on("click", ".uib_w_59", function(evt)
    {
        /* your code goes here */ 
		intel.xdk.device.getRemoteData("http://proj2-1095.appspot.com/TimeStudies", "GET", "", "study_Results", "error_handler");
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_61", function(evt)
    {
        /* your code goes here */ 
		intel.xdk.device.getRemoteData("http://proj2-1095.appspot.com/studyProcedures", "GET", "", "procedure_Results", "error_handler");
    });
    
        /* button  .uib_w_62 */
    $(document).on("click", ".uib_w_62", function(evt)
    {
        /* your code goes here */ 
		intel.xdk.device.getRemoteData("http://proj2-1095.appspot.com/TSinstance" + "?user=" + Uname, "GET","", "instance_Results", "error_handler");
    });
    
        /* button  Secret! */
    $(document).on("click", ".uib_w_51", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#boobeer"); 
    });
    
        /* button  Clear */
    $(document).on("click", ".uib_w_63", function(evt)
    {
        /* your code goes here */ 
		document.getElementById("studyResults").innerHTML = "";
		document.getElementById("procedureResults").innerHTML = "";
		document.getElementById("instanceResults").innerHTML = "";
		document.getElementById("frontPage").innerHTML = "";
		document.getElementById("TimeDisplayBox").value = "";
		document.getElementById("endTime").value = "";
		document.getElementById("startTime").value = "";
    });
    
        /* button  Add a study */
    $(document).on("click", ".uib_w_64", function(evt)
    {
        /* your code goes here */ 
		var Tkeys = document.getElementById("studyKeys").value; 
		var Tname = document.getElementById("studyName").value;

		intel.xdk.device.getRemoteData("http://proj2-1095.appspot.com/TimeStudies", "POST", "name=" + Tname + "&procedures[]=" + Tkeys, "POSTsuccess_handler", "POSTerror_handler");
		
		document.getElementById("studyResults").innerHTML = "TimeStudy: " + Tname + "<br>was added succesfully with the following keys:" +
																		    "<br><br>" + Tkeys;
		
		
    });
    
        /* button  Add a Procedure */
    $(document).on("click", ".uib_w_68", function(evt)
    {
        /* your code goes here */ 
		var Pname = document.getElementById("procName").value; 
		var Piter = document.getElementById("procIter").value;
	    if (isNaN(Piter)) 
		{
			alert("Must input numbers");
			return false;
		} else
		{
		intel.xdk.device.getRemoteData("http://proj2-1095.appspot.com/studyProcedures", "POST", "name=" + Pname + "&iter=" + Piter, "POSTsuccess_handler", "POSTerror_handler");
		
		document.getElementById("procedureResults").innerHTML = "Procedure: " + Pname + "<br>was added succesfully running the following iteration:" +
																		    "<br><br>" + Piter;

		}		
    });
	
	
	// Uses TimeStudy name, sends request to API to create procedure instances for ts instance
	// studyName: name of the Time Study,   Uname: User name for this study
	// UserLoc: Get location of user during study
	// If successful, data outputs to function 'TSinstance_handler'
    $(document).on("click", ".uib_w_71", function(evt)
    {
        /* your code goes here */
		var studyName = document.getElementById("instName").value; 
		//get users location to input into the model
		var userLoc = navigator.geolocation.getCurrentPosition(onSuccess, onError);
		
	  //STILL NEED TO FIX THE GEOLOCATION, NOT RETURNING CORRECTLY --->lol function variables maaaaan
		intel.xdk.device.getRemoteData("http://proj2-1095.appspot.com/TSinstance", "POST", "name=" + studyName + "&user=" + 
									   Uname + "&location=" + userLocation, "TSInstance_handler", "POSTerror_handler");

    });
	

//These two functions handle getting the geolocation of the app.

    var onSuccess = function(position) 
	{  
		
		  userLocation =

          position.coords.latitude.toFixed(2)     +    ','   +
          position.coords.longitude.toFixed(2)    ;   
          /*'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + "<br>" +
          'Timestamp: ' +"<br>" + position.timestamp                + "<br>";*/
		document.getElementById("frontPage").innerHTML = userLocation; 
		//alert(typeof(userLocation));
     };
    
	function onError(error) 
	{
	document.getElementById("frontPage").innerHTML = 'code: '    + error.code    + '\n' + 'message: ' + error.message + '\n';
    }	

	
 document.addEventListener("app.Ready", register_event_handlers, false);
	
})();




        



//Functions for displaying the data returned from the API
function study_Results(data) { document.getElementById("studyResults").innerHTML = "Current Existing TimeStudies: " + "<br>" + "<br>" + parseStudies(data); } 
function procedure_Results(data) { document.getElementById("procedureResults").innerHTML = "Current Existing TimeStudy Procedures: " + "<br>" + "<br>" + parseProcedures(data); } 
function instance_Results(data) { document.getElementById("instanceResults").innerHTML = "Current Existing TimeStudy Instances: " + "<br>" + "<br>" + parseInstances(data); } 
function error_handler(data) { alert("error: " + data); }
   


function parseProcedures(theData)
{
	//The variables procObjects splits the incoming data by the entity it is associated to in the 
	//Google App engine. We can then iterate through these entity's and extract the data that is needed.
	var procObjects = theData.split("StudyProcedures(key=Key('StudyProcedures', ");
	var re = /\d+/;
	var reName = /Pname=u'(.+?(?='))/;
	var reIter = /iteration=(.+?(?=,))/;
	var theKey = [];
	var procName = [];
	var iterCnt = [];
	var Statement = "";
	
	
	for(var i = 1; i < procObjects.length; i++)
	{
		theKey[i-1] = procObjects[i].match(re);
		procName[i-1] = procObjects[i].match(reName);
		iterCnt[i-1] = procObjects[i].match(reIter);
		Statement += "Procedure Name: " + procName[i-1][1] + "<br>" + 
					 "Your Key: "       + theKey[i-1]      + "<br>" + 
					 "Iteration: "      + iterCnt[i-1][1]  + "<br>" + "<br>";
	}
		
		
	return Statement;
}


function parseInstances(theData)
{
	//The variables procObjects splits the incoming data by the entity it is associated to in the 
	//Google App engine. We can then iterate through these entity's and extract the data that is needed.
	var procObjects = theData.split("TSInstance(key=Key('TSInstance', ");
	var re = /\d+/;
	var reName = /TSname=u'(.+?(?='))/;
	var reIter = /iteration=(.+?(?=,))/;
	var reUser = /user=u'(.+?(?='))/;
	var theKey = [];
	var studyName = [];
	var iterCnt = [];
	var userCnt = [];
	var Statement = "";
	
	
	for(var i = 1; i < procObjects.length; i++)
	{
		theKey[i-1] = procObjects[i].match(re);
		studyName[i-1] = procObjects[i].match(reName);
		iterCnt[i-1] = procObjects[i].match(reIter);
		userCnt[i-1] = procObjects[i].match(reUser);
		Statement += "Existing Instance: " + studyName[i-1][1] + "<br>" + 
					 "Your Key: "          + theKey[i-1]       + "<br>" + 
					 "Iteration: "         + iterCnt[i-1][1]   + "<br>" +
					 "User: "              + userCnt[i-1][1]   + "<br>" + "<br>";
	}
		
		
	return Statement;
}


function parseStudies(theData)
{
	//The variables procObjects splits the incoming data by the entity it is associated to in the 
	//Google App engine. We can then iterate through these entity's and extract the data that is needed.
	var procObjects = theData.split("TimeStudy(key=Key('TimeStudy', ");
	var re = /\d+/;
	var reName = /name=u'(.+?(?='))/;
	var reProcs = /s', (.+?(?=\)))/;
	var theKey = [];
	var studyName = [];
	var procKeys = [];
	var Statement = "";
	
	
	for(var i = 1; i < procObjects.length; i++)
	{
		theKey[i-1] = procObjects[i].match(re);
		studyName[i-1] = procObjects[i].match(reName);
		procKeys[i-1] = procObjects[i].match(reProcs);
		Statement += "Time Study: "           + studyName[i-1][1] + "<br>" + 
					 "TimeStudy Key: "        + theKey[i-1]       + "<br>" + 
					 "Procedure Keys: "       + procKeys[i-1][1]  + "<br>" + "<br>";
	}
		
		
	return Statement;
}



function authenticate_User(data)
{
	if (String(data) == "yes")
		{	
			$.ui.loadContent("#mainpage",false,false,"pop");			
		}
	else
		{
			
		document.getElementById("authResponse").innerHTML = "Incorrect Credentials";	
		}
	
		
		
	
		
}

//Used to register a user on the LOGIN screen
function register_User(data)
{

	if (String(data) == "Registered")
		document.getElementById("authResponse").innerHTML = "It worked, please log in.";	
	if (String(data) == "nope")
		document.getElementById("authResponse").innerHTML = "Incorrect Credentials";
}


//The following functions deal with responses when altering, adding, or removing INSTANCES from the datastore. --> Start  Study page
//Recieve response from datastore when we add an instance with the KEY of each specific procedure
function POSTsuccess_handler (data) {  
	alert("Meow :)");
}
function POSTerror_handler(data) {  
	document.getElementById("instanceResults").innerHTML = "There was an error connecting to the database. Check your internet connection."; 
}



function TSInstance_handler (data) {  
	if (data === "5")
	{
		//document.getElementById("frontPage").innerHTML
		//alert("Root Procedure does not exist, data is corrupted." + data);
		document.getElementById("instanceResults").innerHTML = "A Root Procedure does not exist, the timestudy is corrupted.";

	}
	else
	{
		activate_subpage("#uib_page_3");
		// Gather the data and turn it into a javasscript object.
		var studyDetails = JSON.parse(data);
		//How do we send the time stamp data back? Layer the object and then transform it into a layered dict?
		document.getElementById("study_title").innerHTML  = '<h2>' + studyDetails.studyName + '</h2>';
		//For each item in studyDetails initialize a new timestamp. Print out html for a new timer(cut that)
		
		for (var key in studyDetails.instanceProcs) {
			if (studyDetails.instanceProcs.hasOwnProperty(key)) {
				var str = '' + key;
				$(
			'<h3>'+key+'</h3>'																																															+   
					'<div class="button-grouped flex widget uib_w_85 d-margins" data-uib="app_framework/button_group" data-ver="2">'																					+
             '<a class="button widget green" data-uib="app_framework/button" data-ver="1" value="Start" onclick="timeNow(startTime'+key+');'																		    +
					'time_object.StartTiming(startTime'+key+', TimeDisplayBox'+key+');" ;="" name="StartButton" style="width:100px;">Start<br>(Reset)</a>'																			+
             '<a class="button widget red" data-uib="app_framework/button" data-ver="1" value="Finish" onclick="timeNow(endTime'+key+');'                                                                               +
					'time_object.EndTiming(endTime'+key+', TimeDisplayBox'+key+');" ;="" name="EndButton" style="width:100px;" >Finish</a>'																				+
                   '<!--</div>'																																														    +
					'<div class="col uib_col_3 col-0_12-12" data-uib="layout/col" data-ver="0">-->'																														+
						'<form name="TimeDisplayForm'+key+'">'																																							+
							'<input name="startTime'+key+'" id="startTime'+key+'" value="start time" disabled="">'																										+
							'<input name="endTime'+key+'" id="endTime'+key+'" value="end time" disabled="">'																											+
							'<input type="text" id="TimeDisplayBox'+key+'" name="TimeDisplayBox'+key+'"  size="3">'																										+
						'</form>'																																														+
					'</div>'
							
							
				 ).appendTo("#timer_container");
				//alert(key + " -> " + studyDetails.instanceProcs[key]);
				//EVENT listeners for TSInstance_handler
		  }
		}
	}

	
}





















