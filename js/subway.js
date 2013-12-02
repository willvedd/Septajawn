var fern = {
	line: "bs",
	order: 1,
	id:   "fern",
	name: "Fern Rock",
	sched_wk_sb: 		[5.00,5.15,5.30,5.45,5.56,6.06,6.16,6.24,6.32,6.39,6.46,6.53,7.00,7.07,7.14,7.21,7.28,7.35,7.42,7.49,7.56,8.03,8.10,8.17,8.24,8.31,8.38,8.45,8.52,9.00,9.08,9.16,9.24,9.32,9.40,9.48,9.56,10.04,10.12,10.20,10.28,10.36,10.44,10.52,11.00,11.08,11.16,11.24,11.32,11.40,11.48,11.56,12.04,12.12,12.20,12.28,12.36,12.44,12.52,13.00,13.08,13.16,13.24,13.32,13.40,13.48,13.56,14.04,14.12,14.20,14.28,14.36,14.44,14.52,15.00,15.08,15.16,15.24,15.32,15.40,15.48,15.56,16.03,16.10,16.17,16.24,16.31,16.38,16.45,16.52,16.59,17.06,17.13,17.20,17.27,17.34,17.41,17.48,17.55,18.02,18.10,18.20,18.30,18.40,18.50,19.00,19.10,19.20,19.30,19.40,19.50,20.00,20.12,20.24,20.36,20.48,21.00,21.12,21.24,21.36,21.48,22.00,22.12,22.24,22.36,22.48,23.00,23.12,23.24,23.36,23.49,24.03],
	sched_sat_sb: [12.30, 12.36,12.50,12.54,13.11,13.20],
	sched_sun_sb: [12.40, 12.46,12.50,12.59,13.12,13.10],
	sched_wk_nb: [5.26,5.42,5.59,6.16,6.31,6.47,7.02,7.15,7.22,7.31,7.40,7.49,7.56,8.03,8.10,8.17,8.24,8.31,8.38,8.45,8.52,8.59,9.06,9.13,9.20,9.27,9.35,9.44,9.52,10.01,10.09,10.17,10.25,10.33,10.41,10.49,10.57,11.05,11.13,11.21,11.29,11.37,11.45,11.53,12.01,12.09,12.17,12.25,12.33,12.41,12.49,12.57,13.05,13.13,13.21,13.29,13.37,13.45,13.53,14.01,14.09,14.17,14.25,14.33,14.41,14.49,14.57,15.04,15.13,15.21,15.29,15.37,15.45,15.51,15.59,16.07,16.16,16.23,16.31,16.39,16.46,16.53,17.00,17.07,17.14,17.21,17.28,17.35,17.42,17.49,17.56,18.03,18.10,18.17,18.24,18.31,18.38,18.46,18.55,19.05,19.15,19.25,19.35,19.45,19.55,20.05,20.15,20.25,20.35,20.45,20.55,21.06,21.17,21.29,21.41,21.53,22.05,22.17,22.29,22.41,22.53,23.05,23.17,23.29,23.41,23.53,24.05,24.14],
}; 
var olney = {
	line: "bs",
	order: 2,
	id:   "olney",
	name: "Olney",
	sched_wk_sb: schedule(fern.sched_wk_sb,3),
	sched_sat_sb: schedule(fern.sched_wk_sb,3),
	sched_sun_sb: schedule(fern.sched_wk_sb,3),
	sched_wk_nb: schedule(fern.sched_wk_nb,-3),
	sched_sat_nb: schedule(fern.sched_wk_nb,-3),
	sched_sun_nb: schedule(fern.sched_wk_nb,-3),
};
var logan = {
	line: "bs",
	order: 3,
	id:   "logan",
	name: "Logan",
	sched_wk_sb: schedule(olney.sched_wk_sb,2),
	sched_sat_sb: schedule(olney.sched_wk_sb,2),
	sched_sun_sb: schedule(olney.sched_wk_sb,2),
	sched_wk_nb: schedule(olney.sched_wk_nb,-2),
};
var wyoming = {
	line: "bs",
	order: 4,
	id:   "wyoming",
	name: "Wyoming",
	sched_wk_sb: schedule(logan.sched_wk_sb,2),
	sched_sat_sb: schedule(logan.sched_wk_sb,2),
	sched_sun_sb: schedule(logan.sched_wk_sb,2),
	sched_wk_nb: schedule(logan.sched_wk_nb,-2),
};
var hunt_park = {
	line: "bs",
	order: 5,
	id:   "hunt_park",
	name: "Hunting Park",
	sched_wk_sb: schedule(wyoming.sched_wk_sb,2),
	sched_sat_sb: schedule(wyoming.sched_wk_sb,2),
	sched_sun_sb: schedule(wyoming.sched_wk_sb,2),
	sched_wk_nb: schedule(wyoming.sched_wk_nb,-1),
};
var erie = {
	line: "bs",
	order: 6,
	id:   "erie",
	name: "Erie",
	sched_wk_sb: schedule(hunt_park.sched_wk_sb,2),
	sched_sat_sb: schedule(hunt_park.sched_wk_sb,2),
	sched_sun_sb: schedule(hunt_park.sched_wk_sb,2),
	sched_wk_nb: schedule(hunt_park.sched_wk_nb,-2),
};
var allegh = {
	line: "bs",
	order: 7,
	id:   "allegh",
	name: "Allegheny",
	sched_wk_sb: schedule(erie.sched_wk_sb,1),
	sched_sat_sb: schedule(erie.sched_wk_sb,1),
	sched_sun_sb: schedule(erie.sched_wk_sb,1),
	sched_wk_nb: schedule(erie.sched_wk_nb,-2),
};
var nphilly = {
	line: "bs",
	order: 8,
	id:   "nphilly",
	name: "North Philly",
	sched_wk_sb: schedule(allegh.sched_wk_sb,2),
	sched_sat_sb: schedule(allegh.sched_wk_sb,2),
	sched_sun_sb: schedule(allegh.sched_wk_sb,2),
	sched_wk_nb: schedule(allegh.sched_wk_nb,-1),
};
var susque = {
	line: "bs",
	order: 9,
	id:   "susque",
	name: "Susquehanna-Dauphin",
	sched_wk_sb: schedule(nphilly.sched_wk_sb,2),
	sched_sat_sb: schedule(nphilly.sched_wk_sb,2),
	sched_sun_sb: schedule(nphilly.sched_wk_sb,2),
	sched_wk_nb: schedule(nphilly.sched_wk_nb,-1),
};
var cecil = {
	line: "bs",
	order: 10,
	id:   "cecil",
	name: "Cecil B Moore",
	sched_wk_sb: schedule(susque.sched_wk_sb,1),
	sched_sat_sb: schedule(susque.sched_wk_sb,1),
	sched_sun_sb: schedule(susque.sched_wk_sb,1),
	sched_wk_nb: schedule(susque.sched_wk_nb,-2),
};
var girard = {
	line: "bs",
	order: 11,
	id:   "girard",
	name: "Girard",
	sched_wk_sb: schedule(cecil.sched_wk_sb,1),
	sched_sat_sb: schedule(cecil.sched_wk_sb,1),
	sched_sun_sb: schedule(cecil.sched_wk_sb,1),
	sched_wk_nb: schedule(cecil.sched_wk_nb,-2),
};
var fairmount = {
	line: "bs",
	order: 12,
	id:   "fairmount",
	name: "Fairmount",
	sched_wk_sb: schedule(girard.sched_wk_sb,2),
	sched_sat_sb: schedule(girard.sched_wk_sb,2),
	sched_sun_sb: schedule(girard.sched_wk_sb,2),
	sched_wk_nb: schedule(girard.sched_wk_nb,-2),
};
var spring = {
	line: "bs",
	order: 13,
	id:   "spring",
	name: "Spring Garden",
	sched_wk_sb: schedule(fairmount.sched_wk_sb,2),
	sched_sat_sb: schedule(fairmount.sched_wk_sb,2),
	sched_sun_sb: schedule(fairmount.sched_wk_sb,2),
	sched_wk_nb: schedule(fairmount.sched_wk_nb,-1),
};
var race = {
	line: "bs",
	order: 14,
	id:   "race",
	name: "Race-Vine",
	sched_wk_sb: schedule(spring.sched_wk_sb,1),
	sched_sat_sb: schedule(spring.sched_wk_sb,1),
	sched_sun_sb: schedule(spring.sched_wk_sb,1),
	sched_wk_nb: schedule(spring.sched_wk_nb,-1),
};
var city_hall = {
	line: "bs",
	order: 15,
	id:   "city_hall",
	name: "City Hall",
	sched_wk_sb: schedule(race.sched_wk_sb,2),
	sched_sat_sb: schedule(race.sched_wk_sb,2),
	sched_sun_sb: schedule(race.sched_wk_sb,2),
	sched_wk_nb: schedule(race.sched_wk_nb,-2),
};
var walnut = {
	line: "bs",
	order: 16,
	id:   "walnut",
	name: "Walnut-Locust",
	sched_wk_sb: schedule(city_hall.sched_wk_sb,1),
	sched_sat_sb: schedule(city_hall.sched_wk_sb,1),
	sched_sun_sb: schedule(city_hall.sched_wk_sb,1),
	sched_wk_nb: schedule(city_hall.sched_wk_nb,-2),
};
var lombard = {
	line: "bs",
	order: 17,
	id:   "lombard",
	name: "Lombard-South",
	sched_wk_sb: schedule(walnut.sched_wk_sb,1),
	sched_sat_sb: schedule(walnut.sched_wk_sb,1),
	sched_sun_sb: schedule(walnut.sched_wk_sb,1),
	sched_wk_nb: schedule(walnut.sched_wk_nb,-1),
};
var ellsworth = {
	line: "bs",
	order: 18,
	id:   "ellsworth",
	name: "Ellsworth-Federal",
	sched_wk_sb: schedule(lombard.sched_wk_sb,1),
	sched_sat_sb: schedule(lombard.sched_wk_sb,1),
	sched_sun_sb: schedule(lombard.sched_wk_sb,1),
	sched_wk_nb: schedule(lombard.sched_wk_nb,-1),
};
var tasker = {
	line: "bs",
	order: 19,
	id:   "tasker",
	name: "Tasker-Morris",
	sched_wk_sb: schedule(ellsworth.sched_wk_sb,2),
	sched_sat_sb: schedule(ellsworth.sched_wk_sb,2),
	sched_sun_sb: schedule(ellsworth.sched_wk_sb,2),
	sched_wk_nb: schedule(ellsworth.sched_wk_nb,-1),
};
var snyder = {
	line: "bs",
	order: 20,
	id:   "snyder",
	name: "Snyder",
	sched_wk_sb: schedule(tasker.sched_wk_sb,2),
	sched_sat_sb: schedule(tasker.sched_wk_sb,2),
	sched_sun_sb: schedule(tasker.sched_wk_sb,2),
	sched_wk_nb: schedule(tasker.sched_wk_nb,-1)
};
var oregon = {
	line: "bs",
	order: 21,
	id:   "oregon",
	name: "Oregon",
	sched_wk_sb: schedule(snyder.sched_wk_sb,1),
	sched_sat_sb: schedule(snyder.sched_wk_sb,1),
	sched_sun_sb: schedule(snyder.sched_wk_sb,1),
	sched_wk_nb: schedule(snyder.sched_wk_nb,-2)
};
var att = {
	line: "mf",
	order: 22,
	id:   "att",
	name: "AT&T",
	sched_wk_sb: schedule(oregon.sched_wk_sb,3),
	sched_sat: schedule(oregon.sched_wk_sb,3),
	sched_sun: schedule(oregon.sched_wk_sb,3),
	sched_wk_nb: schedule(oregon.sched_wk_sb,-3),
};

var stations = [fern,olney,logan,wyoming,hunt_park,erie,allegh,nphilly,susque,cecil,girard,fairmount,spring,race,city_hall,walnut,lombard,ellsworth,tasker,snyder,oregon,att];//Setting array of stations

function submit(){
    var start_sel = document.getElementById("start_dest");
    var start = start_sel.options[start_sel.selectedIndex].value;
    
    var end_sel = document.getElementById("end_dest");
    var end = end_sel.options[end_sel.selectedIndex].value;
    
    route(start,end,parseTime(time),parseDay()); 
    
};

function schedule(prev_station,diff){//sets schedules for all stations except fern rock
	var schedule = new Array();
	
	if(diff>0){	//for southbound schedules, positive difference
		for(i=0; i < prev_station.length; i++){
			
			schedule[i] = prev_station[i] + (diff/100);
			
			if((schedule[i] - Math.floor(schedule[i])) > .59){
				var minutes = schedule[i] - Math.floor(schedule[i]) - .60;
				schedule[i] = Math.floor(schedule[i]) + 1 + minutes;
			} 
			schedule[i] = round(schedule[i]);
		};	
	}
	else{//for northbound schedules, negative difference
		for(i=0; i < prev_station.length; i++){
			
			schedule[i] = prev_station[i] + (diff/100);
			
			if((schedule[i] - Math.floor(schedule[i])) > .59){
				var minutes = Math.ceil(schedule[i]) - schedule[i];
				schedule[i] = Math.floor(schedule[i]) + (.6 - minutes); 
			}		
			schedule[i] = round(schedule[i]);
		};
	}
	return schedule;
};





function parseTime(time){
	
	var parseOne = time.split(":"); //Splitting hour value from string
	var parseTwo = parseOne[1].split(" "); //Splitting minutes, meridan values
	
	var hrs = parseInt(parseOne[0]);// Setting hours variable,convert hrs to int
	var min = parseInt(parseTwo[0]);// Setting mins variable, convert mins to int
	var mer = parseTwo[1];// Setting meridian variable
	
	if((mer === "PM") && (hrs != 12)){	//  Converting 24hr format
		hrs = hrs + 12;
	}
	else if((mer === "AM") && (hrs === 12)){ //Midnight to hour 24 to make it easier to handle
		hrs = 24;
	};
	
	return (hrs+(min/100)); // Finally set time variable
	
};

function parseDay(){
	var day = Date().split(" "); //Gets day of the week
	
	console.log(day[0]);
	
	if(day[0] == "Sat"){
		//return "sat";
		return "wk";
	}
	else if (day[0] == "Sun"){
		//return "sun";
		return "wk";
	}
	else{
		return "wk";
	}
};

function route(start,end,time,day){ //Using form to get times
	for(i=0; i < stations.length; i++){
		if(stations[i].id == start){
			console.log("Starting from: "+stations[i].name);
			var start_station = stations[i];
		}
		else if(stations[i].id == end){
			console.log("Ending at: "+stations[i].name);
			var end_station = stations[i];
		};
	}
	if(start_station.order < end_station.order){//southbound
		if(day === "wk"){//weekday southbound scheduling
			for(i=0; i < start_station.sched_wk_sb.length; i++){
				if(start_station.sched_wk_sb[i] > time){
					var leave_time1 = start_station.sched_wk_sb[i];
					var leave_time2 = start_station.sched_wk_sb[i+1];
					var leave_time3 = start_station.sched_wk_sb[i+2];
					console.log("Leave time: "+leave_time1);
					var arrive_time1 = end_station.sched_wk_sb[i];
					var arrive_time2 = end_station.sched_wk_sb[i+1];
					var arrive_time3 = end_station.sched_wk_sb[i+2];
					console.log("Arrive time: "+arrive_time1);
					break;
				};//endif
			};//endfor
		}//endif
		else if(day === "sat"){//saturday southbound scheduling
			for(i=0; i < start_station.sched_sat_sb.length; i++){
				if(start_station.sched_sat[i] > time){
					console.log("Leave time: "+leave_time1);
					var leave_time1 = start_station.sched_sat_sb[i];
					var leave_time2 = start_station.sched_sat_sb[i+1];
					var leave_time3 = start_station.sched_sat_sb[i+2];
					console.log("Arrive time: "+arrive_time1);
					var arrive_time1 = end_station.sched_sat_sb[i];
					var arrive_time2 = end_station.sched_sat_sb[i+1];
					var arrive_time3 = end_station.sched_sat_sb[i+2];
					break;
				};
			};
		}
		else {//sunday southbound scheduling
			for(i=0; i < start_station.sched_sun_sb.length; i++){
				if(start_station.sched_sun_sb[i] > time){
					console.log("Leave time: "+leave_time1);
					var leave_time1 = start_station.sched_sun_sb[i];
					var leave_time2 = start_station.sched_sun_sb[i+1];
					var leave_time3 = start_station.sched_sun_sb[i+2];
					console.log("Arrive time: "+arrive_time1);
					var arrive_time1 = end_station.sched_sun_sb[i];
					var arrive_time2 = end_station.sched_sun_sb[i+1];
					var arrive_time3 = end_station.sched_sun_sb[i+2];
					break;
				};
			};
		}
	}	
	else{//northbound
		if(day === "wk"){//weekday northbound scheduling
			for(i=0; i < start_station.sched_wk_nb.length; i++){
				if(start_station.sched_wk_nb[i] > time){
					console.log("Leave time: "+start_station.sched_wk_nb[i]);
					var leave_time1 = start_station.sched_wk_nb[i];
					var leave_time2 = start_station.sched_wk_nb[i+1];
					var leave_time3 = start_station.sched_wk_nb[i+2];
					console.log("Arrive time: "+end_station.sched_wk_nb[i]);
					var arrive_time1 = end_station.sched_wk_nb[i];
					var arrive_time2 = end_station.sched_wk_nb[i+1];
					var arrive_time3 = end_station.sched_wk_nb[i+2];
					break;
				};//endif
			};//endfor
		}//endif
		else if(day === "sat"){//saturday northbound scheduling
			for(i=0; i < start_station.sched_sat_nb.length; i++){
				if(start_station.sched_sat[i] > time){
					
					var leave_time1 = start_station.sched_sat_nb[i];
					var leave_time2 = start_station.sched_sat_nb[i+1];
					var leave_time3 = start_station.sched_sat_nb[i+2];
					console.log("Leave time: "+leave_time1);
					console.log("Leave time: "+leave_time2);
					console.log("Leave time: "+leave_time3);
					var arrive_time1 = end_station.sched_sat_nb[i];
					var arrive_time2 = end_station.sched_sat_nb[i+1];
					var arrive_time3 = end_station.sched_sat_nb[i+2];
					console.log("Arrive time: "+end_station.sched_sat_nb[i]);
					break;
				};
			};
		}
		else {//sunday northbound scheduling
			for(i=0; i < start_station.sched_sun_nb.length; i++){
				if(start_station.sched_sun_nb[i] > time){
					console.log("Leave time: "+start_station.sched_sun_nb[i]);
					var leave_time1 = start_station.sched_sun_nb[i];
					var leave_time2 = start_station.sched_sun_nb[i+1];
					var leave_time3 = start_station.sched_sun_nb[i+2];
					console.log("Arrive time: "+end_station.sched_sun_nb[i]);
					var arrive_time1 = end_station.sched_sun_nb[i];
					var arrive_time2 = end_station.sched_sun_nb[i+1];
					var arrive_time3 = end_station.sched_sun_nb[i+2];
					break;
				};
			};
		};				
	};
	
	$('.start1').empty();
	$('.start1').append(leave_time1);
	$('.start2').empty();	
	$('.start2').append(leave_time2);
	$('.start3').empty();
	$('.start3').append(leave_time3);
	$('.end1').empty();
	$('.end1').append(arrive_time1);
	$('.end2').empty();
	$('.end2').append(arrive_time2);
	$('.end3').empty();
	$('.end3').append(arrive_time3);
	
};

function round(num){//rounding function necessary because javascript has issues adding doubles to each other.
   	return ((Math.round(num *100))/100);
   	console.log("Rounding");
};


$('#timepicker').timepicker();
    var time = timepicker.value;
    $('#timepicker').timepicker().on('changeTime.timepicker', function(e) {
        time = e.time.value;
});



