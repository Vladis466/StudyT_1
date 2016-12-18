/* jshint browser: true */

//<!-- Gracefully hide from old browsers
function timeNow(i) {
  var d = new Date(),
      h = (d.getHours()<10?'0':'') + d.getHours(),
      m = (d.getMinutes()<10?'0':'') + d.getMinutes(),
      s = (d.getSeconds()<10?'0':'') + d.getSeconds();
  i.value = h + ':' + m + ':' + s;
}      

// Javascript to compute elapsed time between "Start" and "Finish" button clicks
function timestamp_class(this_current_time, this_start_time, this_end_time, this_time_difference) { 
		this.this_current_time = this_current_time;
		this.this_start_time = this_start_time;
		this.this_end_time = this_end_time;
		this.this_time_difference = this_time_difference;
		this.GetCurrentTime = GetCurrentTime;
		this.StartTiming = StartTiming;
		this.EndTiming = EndTiming;
}

	//Get current time from date timestamp
function GetCurrentTime() {
	var my_current_timestamp;
		my_current_timestamp = new Date();		//stamp current date & time
		return my_current_timestamp.getTime();
}

	//Stamp current time as start time and reset display textbox
function StartTiming(startLabel,resultBox) {
		this.this_start_time = GetCurrentTime();	//stamp current time
		currentInstance.instanceProcs[startLabel.getAttribute('ID')] = this.this_start_time;
		resultBox.value = 0;	//init textbox display to zero
		//timeNow(startLabel.value);
}

	//Stamp current time as stop time, compute elapsed time difference and display in textbox
function EndTiming(endLabel, resultBox) {
		this.this_end_time = GetCurrentTime();		//stamp current time
		currentInstance.instanceProcs[endLabel.getAttribute('ID')] = this.this_end_time;		
		this.this_time_difference = (this.this_end_time - this.this_start_time) / 1000;	//compute elapsed time
		resultBox.value = this.this_time_difference;	//set elapsed time in display box
		//timeNow(endLabel.value);
}

var time_object = new timestamp_class(0, 0, 0, 0);  //create new time object and initialize it

//-->

/*
//<!-- Gracefully hide from old browsers
function timeNow(i) {
  var d = new Date(),
      h = (d.getHours()<10?'0':'') + d.getHours(),
      m = (d.getMinutes()<10?'0':'') + d.getMinutes(),
      s = (d.getSeconds()<10?'0':'') + d.getSeconds();
  i.value = h + ':' + m + ':' + s;
}      

// Javascript to compute elapsed time between "Start" and "Finish" button clicks
function timestamp_class(this_current_time, this_start_time, this_end_time, this_time_difference) { 
		this.this_current_time = this_current_time;
		this.this_start_time = this_start_time;
		this.this_end_time = this_end_time;
		this.this_time_difference = this_time_difference;
		this.GetCurrentTime = GetCurrentTime;
		this.StartTiming = StartTiming;
		this.EndTiming = EndTiming;
}

	//Get current time from date timestamp
function GetCurrentTime() {
	var my_current_timestamp;
		my_current_timestamp = new Date();		//stamp current date & time
		return my_current_timestamp.getTime();
}

	//Stamp current time as start time and reset display textbox
function StartTiming() {
		this.this_start_time = GetCurrentTime();	//stamp current time
		document.TimeDisplayForm.TimeDisplayBox.value = 0;	//init textbox display to zero
		timeNow(document.TimeDisplayForm.startTime.value);
}

	//Stamp current time as stop time, compute elapsed time difference and display in textbox
function EndTiming() {
		this.this_end_time = GetCurrentTime();		//stamp current time
		this.this_time_difference = (this.this_end_time - this.this_start_time) / 1000;	//compute elapsed time
		document.TimeDisplayForm.TimeDisplayBox.value = this.this_time_difference;	//set elapsed time in display box
		timeNow(document.TimeDisplayForm.endTime.value);
}

var time_object = new timestamp_class(0, 0, 0, 0);  //create new time object and initialize it
*/