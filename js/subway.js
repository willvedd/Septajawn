


console.time('JSON function');

$.getJSON('json/stations.json', function(data) {//importing JSON data
    console.time('getJSON function');
    window.stations = data;
    
    console.timeEnd('getJSON function');

    console.time("Stations");
    console.log(stations.city_hall.sat_nb);
    console.log(stations.fern);
    console.timeEnd("Stations");
});

console.timeEnd('JSON function');

//-----------------------------------------------------------

window.day = parseDay();//setting global variable for day. Needs to be global for day toolbar

var vpHeight = $(window).height(); //getting height of viewport

console.log("Height: "+vpHeight);

//-----------------------------------------------------------

$('.submit').click(function(){
    submit();
    $(this).addClass("hide");
    $(".table_and_tools").removeClass("hide");
});

function submit() {

    //window.performance.mark('mark_start_process');

    console.log("Submit executed");
    
    var start_sel = document.getElementById("start_dest");
    var start = start_sel.options[start_sel.selectedIndex].value;
    var end_sel = document.getElementById("end_dest");
    var end = end_sel.options[end_sel.selectedIndex].value;

    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes(); 
    
    var time = hours+"."+minutes;//setting time 

    route(start, end, time, day);

    if((start&&end)!=undefined){
        $('#start_dest, #end_dest').change(function() { //After initial submission, script checks for changes and dynamically updates

            var start_sel = document.getElementById("start_dest");
            var start = start_sel.options[start_sel.selectedIndex].value;
            var end_sel = document.getElementById("end_dest");
            var end = end_sel.options[end_sel.selectedIndex].value;

            route(start, end, time, day); //Prevents console errors from undefined select variables
        });
    };
    
    $('#wk').click(function(){//dynamically modifies the results based on the day buttons

        var start_sel = document.getElementById("start_dest");
        var start = start_sel.options[start_sel.selectedIndex].value;
        var end_sel = document.getElementById("end_dest");
        var end = end_sel.options[end_sel.selectedIndex].value;
        
        window.day = "wk";

        if ((start_sel != undefined) && (end_sel != undefined)) {
            route(start, end, time, "wk"); //Prevents console errors from undefined select variables
        }
    });
    $('#sat').click(function(){//dynamically modifies the results based on the day buttons

        var start_sel = document.getElementById("start_dest");
        var start = start_sel.options[start_sel.selectedIndex].value;
        var end_sel = document.getElementById("end_dest");
        var end = end_sel.options[end_sel.selectedIndex].value;
           

        window.day = "sat";

        if ((start_sel != undefined) && (end_sel != undefined)) {
            route(start, end, time, day); //Prevents console errors from undefined select variables
        }

    });
    $('#sun').click(function(){//dynamically modifies the results based on the day buttons
    
        var start_sel = document.getElementById("start_dest");
        var start = start_sel.options[start_sel.selectedIndex].value;
        var end_sel = document.getElementById("end_dest");
        var end = end_sel.options[end_sel.selectedIndex].value;
        
        window.day = "sun";

        if ((start_sel != undefined) && (end_sel != undefined)) {
            route(start, end, time, "sun");  //Prevents console errors from undefined select variables
        }
    });  
    $('#rst').click(function(){//Resets the form and removes any previous results
        
        $(".submit").removeClass("hide");
        $(".table_and_tools").addClass("hide")

        $('#start_dest').prop('selectedIndex',0);//resets station drop down box
        $('#end_dest').prop('selectedIndex',0);//resets station drop down box

        $('.times_row').remove(); //Prevents empty/ghosted <tr> from being left in the markup from previous executions
        $('.start_station').empty();
        $('.end_station').empty();
        $('.times_row').empty(); //empty the times for unique and consecutive executions
        $('.message_row').remove();//empties the special flag message, otherwise they accumulate at top of table
        $('.platter').addClass("vert_center");//vertically centers picker/platter again

        window.day = parseDay();//resets day to currenty day

        return;
    });  
};

// $('#end_dest').change(function(){//This snippet can be used if submit button isn't used. UX decision, keep submit button or ditch it?
// 	submit();
// });

//-----------------------------------------------------------

function routeInit(start, end, time, day) { //Passing form values to generate times

    console.log("Routeinit executed");

    for (i = 0; i < stations.length; i++) {
        if (stations[i].id == start) {
            var start_station = stations[i];
        } else if (stations[i].id == end) {
            var end_station = stations[i];
        };
    };

    route(start_station, end_station, day, time);
};

//-----------------------------------------------------------

function route(start_station, end_station, time, day) {//Logic that generates requested times depending on direction and day

    console.log("Route executed");

    var leave_time = new Array();
    var arrive_time = new Array();
    var i=0;
    var sb, pointer, flag;

    if(start_station.order<end_station.order){
        sb = true;
    }
    else{
        sb = false;
    }


    function subroute(start,end,close){//Magic all happens here...great comment right?
        while (i< start.length) {
            leave_time[i] = start[i];//setting leave times from the start station object
            arrive_time[i] = end[i];//setting arrive times from the end station object

            if((close != undefined)&&(start[i] > close))//logic to see if station closed
            {
                flag = "c";//setting a flag to the rendering function that it closed
                leave_time.pop();//removes the last item in leave_time array because it is one entry past close time
                arrive_time.pop();//removes the last item in leave_time array because it is one entry past close time
                break;//need to stop the while loop
            };
            if(sb){
                if((day=="wk")&&(start_station.wk_sb[i]<time)){//compares schedule to current time, indicates which one is closest
                    pointer = i+1;//assigning pointer, incremented to get the next one
                    console.log("pointer funciton");
                }
                else if ((day=="sat")&&(start_station.sat_sb[i]<time)){
                    pointer = i+1;//assigning pointer, incremented to get the next one
                }
                else if(start_station.sun_sb[i]<time){
                    pointer = i+1;//assigning pointer, incremented to get the next one
                }
            }
            else{
                if((day=="wk")&&(start_station.wk_nb[i]<time)){//compares schedule to current time, indicates which one is closest
                    pointer = i+1;//assigning pointer, incremented to get the next one
                    console.log("pointer funciton");
                }
                else if ((day=="sat")&&(start_station.sat_nb[i]<time)){
                    pointer = i+1;//assigning pointer, incremented to get the next one
                }
                else if(start_station.sun_nb[i]<time){
                    pointer = i+1;//assigning pointer, incremented to get the next one
                }
            }
            i++;

            flag = "d"//setting a flag to the rendering function that no more trains are coming
        };
    };

    if (sb) { //southbound
        if (day === "wk") { //weekday southbound scheduling
            subroute( start_station.wk_sb , end_station.wk_sb , start_station.close_wk );
        } 
        else if (day === "sat") { //saturday southbound scheduling
            subroute( start_station.sat_sb , end_station.sat_sb , start_station.close_end );
        }
        else { //sunday southbound scheduling
            subroute( start_station.sun_sb , end_station.sun_sb , start_station.close_end );
        };
    }
    else { //northbound
        if (day === "wk") { //weekday northbound scheduling
            subroute( start_station.wk_nb , end_station.wk_nb , start_station.close_wk );
        } 
        else if (day === "sat") { //saturday northbound scheduling
             subroute( start_station.sat_nb , end_station.sat_nb , start_station.close_end );
        }
        else { //sunday northbound scheduling
             subroute( start_station.sun_nb , end_station.sun_nb , start_station.close_end );
        };
    };

    console.log("Pointer: "+pointer);//This pointer tells me which table row is next/should be highlighted

    render(start_station, end_station, leave_time, arrive_time, flag, pointer, window.day);

};

//-----------------------------------------------------------

function render(start_station, end_station, leave_time, arrive_time, flag, pointer, day) {

    console.log("Render executed");

    $('.platter').removeClass("vert_center");//vertically uncenters the picker/form div

    function render_clear(){
        $('.times_row').remove(); //Prevents empty/ghosted <tr> from being left in the markup from previous executions
        $('.start_station').empty().append(start_station.name); // station name in first row
        $('.end_station').empty().append(end_station.name); // station name in first row
        $('.times_row').empty(); //empty the times for unique and consecutive executions
        $('.message_row').remove();//empties the special flag message, otherwise they accumulate at top of table
        console.log("clearing")
    };

    render_clear();

    for (var i = 0; i < leave_time.length; i++) {//function that populates times into table
        $(".times").find('tbody').append($('<tr class="times_row">').append($('<td class="start' + i + '">')));
        $(".times tr:last").append($('<td class="end' + i + '">'));
        $('.start' + i).empty().append(timeformat(leave_time[i]));
        $('.end' + i).empty().append(timeformat(arrive_time[i]));
    }

    $(".times").find('tbody').append($('<tr class="message_row">').append($('<td class="start' + i + '">'))); // Setting last row for flagged message

    if(flag == "c"){//the "c" flag or closure indicator
        if(day == "wk"){//checks if weekday or weekend
            $('.start' + i).empty().append("<span class='warn'>"+start_station.name+" CLOSED @ "+timeformat(start_station.close_wk)+"</span");
        }
        else{
            $('.start' + i).empty().append("<span class='warn'>"+start_station.name+" CLOSED @ "+timeformat(start_station.close_end)+"</span");
        }
    }
    else{//the "d" flag or the done indicator
        $('.start' + i).empty().append("No more trains running");
    }

    if (day == "wk"){
        $("#wk").addClass("active");
        $("#sat").removeClass("active");
        $("#sun").removeClass("active");
    }
    else if(day == "sat"){
        $("#wk").removeClass("active");
        $("#sat").addClass("active");
        $("#sun").removeClass("active");
    }
    else{
        $("#wk").removeClass("active");
        $("#sat").removeClass("active");
        $("#sun").addClass("active");
    };

    $('.table-wrap').height(vpHeight-150);//Sets the height of the schedule table. It is meant to fill entire screen with the toolbar, hence subtracting 150 pixels

    $('.table').fadeIn("slow");//fading the table in to soften the UX

    $('.start'+pointer).addClass('pointer');//adds class to highlight closest upcoming time, can't address both start and end simultaneously in jquery
    $('.end'+pointer).addClass('pointer');//""
 
    // $('.table-wrap').animate(
    // {   top: $('.start'+pointer).offset().top,
    //     left: 0}, 
    // 500); 
    //This snippet is for the autoscrolling behavior to highlight the most relevant time currently buggy

};

//-----------------------------------------------------------

function timeformat(time,start_station,day) { //formats time from a double into hh:mm for rendering purposes only

    if ((time >= 12) && (time < 24)) {
        var meridian = "PM";

        if (time > 12.59) {
            time = round((time) - 12.00) //Formatting time from 24hr to 12hr style
        };
    } else {
        var meridian = "AM"
    };

    time = time.toString().split("."); //Converting time variable to a string and splitting to get minutes and hours

    if (time[1] === undefined) { //If minutes are undefined,
        time[1] = "00"; //Converts undefined minutes to hh:00;
    };

    if (time[0] == 24) { //If the hour is 24, set it to 12
        time[0] = 12
    };

    if (time[1].length == 1) {
        time[1] = time[1] * 10; //Adds trailing zero to hh:m0 numbers that otherwise display as hh:m;
    };

    return (time[0] + ":" + time[1] + " " + meridian); //returning a string of the time
};

//-----------------------------------------------------------

function parseDay() {//returns "wk","sat","sun" depending on day of week

    console.log("Parseday executed");

    var day = Date().split(" "); //Gets raw day of the week

    console.log(day[0]);

    if (day[0] == "Sat") {
        //return "sat";
        return "sat";
    } else if (day[0] == "Sun") {
        //return "sun";
        return "sun";
    } else {
        return "wk";
    }
};

//-----------------------------------------------------------

function round(num) { //rounding function necessary because javascript has issues adding doubles to each other.
    return ((Math.round(num * 100)) / 100);
};

//-----------------------------------------------------------

$('.line1').ready(function() { //Function that populates starting station list and other display functions

    var lineval1 = $('.line1');

    console.log("made it here5");

    $(".line1").change(function() {
        $('.submit').removeClass("hide");
        $('.table_and_tools').addClass('hide');
        $('.platter').addClass('vert_center');

        console.log("made it here6");

        if (lineval1.is(":checked")) {

            var linevalue1 = "mf";
            setTimeout(color_delay, 250); //This delay makes the CSS changes smoother in conjunction with the fade in/out of the times table
            function color_delay() {
                $('.label1').removeClass("bs");//changes color of switch button labels
                $('.label2').addClass("mf");//changes color of switch button labels
            }
            console.log("made it here7");
            $('.station').addClass("mf").removeClass("bs");//Changes color of table header

        } else {
            var linevalue1 = "bs";
            setTimeout(color_delay2, 250); //This delay makes the CSS changes smoother in conjunction with the fade in/out of the times table
            function color_delay2() {
                $('.label1').addClass("bs");//changes color of switch button labels
                $('.label2').removeClass("mf");//changes color of switch button labels
            }

            $('.station').addClass("bs").removeClass("mf");//Changes color of table header
        };

        console.log("made it here8");


        $('#start_dest').empty();
        $('#end_dest').empty();

        $('#start_dest').append('<option value="" disabled="disabled" selected="selected">Starting from...</option>');
        $('#end_dest').append('<option value="" disabled="disabled" selected="selected">Ending at...</option>');

        for (i = 0; i < stations.length; i++) {
            if (linevalue1 == stations[i].line) {
                $('#start_dest').append("<option value='" + stations[i].id + "'>" + stations[i].name + "</option>");
            }
        }
        console.log("made it here9");
    });
});

//-----------------------------------------------------------

$('#start_dest').change(function() { //Function sees start destination and removes it as an option for end destination

    console.log("made it here1");

    var selection = document.getElementById("start_dest").options[document.getElementById("start_dest").selectedIndex].value;

    var selection_end = document.getElementById("end_dest").options[document.getElementById("end_dest").selectedIndex].value;

    console.log("made it here2");

    if ((selection_end == "") || (selection == selection_end)) { //Resets drop down list if end isn't defined or if start and end are the s
        $('#end_dest').empty();
        console.log("made it here3");
        $('#end_dest').append("<option value='' disabled='disabled' selected='selected'>Ending at...</option>");


        if ($('.line1').is(":checked")) {
            var linevalue1 = "mf";

        } else {
            var linevalue1 = "bs";
        };

        for (i = 0; i < stations.length; i++) {
            if (selection != stations[i].id && linevalue1 == stations[i].line) {
                $('#end_dest').append("<option value='" + stations[i].id + "'>" + stations[i].name + "</option>");
            };
        };
    };
    console.log("made it here4");
});

//-----------------------------------------------------------


   








