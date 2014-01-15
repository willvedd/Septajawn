//Broad Street Line
var fern = {
	line: "bs",
	order: -14,
	id:   "fern",
	name: "Fern Rock",
	sched_wk_sb: [5.00,5.15,5.30,5.45,5.56,6.06,6.16,6.24,6.32,6.39,6.46,6.53,7.00,7.07,7.14,7.21,7.28,7.35,7.42,7.49,7.56,8.03,8.10,8.17,8.24,8.31,8.38,8.45,8.52,9.00,9.08,9.16,9.24,9.32,9.40,9.48,9.56,10.04,10.12,10.20,10.28,10.36,10.44,10.52,11.00,11.08,11.16,11.24,11.32,11.40,11.48,11.56,12.04,12.12,12.20,12.28,12.36,12.44,12.52,13.00,13.08,13.16,13.24,13.32,13.40,13.48,13.56,14.04,14.12,14.20,14.28,14.36,14.44,14.52,15.00,15.08,15.16,15.24,15.32,15.40,15.48,15.56,16.03,16.10,16.17,16.24,16.31,16.38,16.45,16.52,16.59,17.06,17.13,17.20,17.27,17.34,17.41,17.48,17.55,18.02,18.10,18.20,18.30,18.40,18.50,19.00,19.10,19.20,19.30,19.40,19.50,20.00,20.12,20.24,20.36,20.48,21.00,21.12,21.24,21.36,21.48,22.00,22.12,22.24,22.36,22.48,23.00,23.12,23.24,23.36,23.49,24.03],
	sched_sat_sb: [12.30, 12.36,12.50,12.54,13.11,13.20],
	sched_sun_sb: [12.40, 12.46,12.50,12.59,13.12,13.10],
	sched_wk_nb: [5.26,5.42,5.59,6.16,6.31,6.47,7.02,7.15,7.22,7.31,7.40,7.49,7.56,8.03,8.10,8.17,8.24,8.31,8.38,8.45,8.52,8.59,9.06,9.13,9.20,9.27,9.35,9.44,9.52,10.01,10.09,10.17,10.25,10.33,10.41,10.49,10.57,11.05,11.13,11.21,11.29,11.37,11.45,11.53,12.01,12.09,12.17,12.25,12.33,12.41,12.49,12.57,13.05,13.13,13.21,13.29,13.37,13.45,13.53,14.01,14.09,14.17,14.25,14.33,14.41,14.49,14.57,15.04,15.13,15.21,15.29,15.37,15.45,15.51,15.59,16.07,16.16,16.23,16.31,16.39,16.46,16.53,17.00,17.07,17.14,17.21,17.28,17.35,17.42,17.49,17.56,18.03,18.10,18.17,18.24,18.31,18.38,18.46,18.55,19.05,19.15,19.25,19.35,19.45,19.55,20.05,20.15,20.25,20.35,20.45,20.55,21.06,21.17,21.29,21.41,21.53,22.05,22.17,22.29,22.41,22.53,23.05,23.17,23.29,23.41,23.53,24.05,24.14],
}; 
var olney = {
	line: "bs",
	order: -13,
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
	order: -12,
	id:   "logan",
	name: "Logan",
	sched_wk_sb: schedule(olney.sched_wk_sb,2),
	sched_sat_sb: schedule(olney.sched_wk_sb,2),
	sched_sun_sb: schedule(olney.sched_wk_sb,2),
	sched_wk_nb: schedule(olney.sched_wk_nb,-2),
};
var wyoming = {
	line: "bs",
	order: -11,
	id:   "wyoming",
	name: "Wyoming",
	sched_wk_sb: schedule(logan.sched_wk_sb,2),
	sched_sat_sb: schedule(logan.sched_wk_sb,2),
	sched_sun_sb: schedule(logan.sched_wk_sb,2),
	sched_wk_nb: schedule(logan.sched_wk_nb,-2),
};
var hunt_park = {
	line: "bs",
	order: -10,
	id:   "hunt_park",
	name: "Hunting Park",
	sched_wk_sb: schedule(wyoming.sched_wk_sb,2),
	sched_sat_sb: schedule(wyoming.sched_wk_sb,2),
	sched_sun_sb: schedule(wyoming.sched_wk_sb,2),
	sched_wk_nb: schedule(wyoming.sched_wk_nb,-1),
};
var erie = {
	line: "bs",
	order: -9,
	id:   "erie",
	name: "Erie",
	sched_wk_sb: schedule(hunt_park.sched_wk_sb,2),
	sched_sat_sb: schedule(hunt_park.sched_wk_sb,2),
	sched_sun_sb: schedule(hunt_park.sched_wk_sb,2),
	sched_wk_nb: schedule(hunt_park.sched_wk_nb,-2),
};
var allegh = {
	line: "bs",
	order: -8,
	id:   "allegh",
	name: "Allegheny",
	sched_wk_sb: schedule(erie.sched_wk_sb,1),
	sched_sat_sb: schedule(erie.sched_wk_sb,1),
	sched_sun_sb: schedule(erie.sched_wk_sb,1),
	sched_wk_nb: schedule(erie.sched_wk_nb,-2),
};
var nphilly = {
	line: "bs",
	order: -7,
	id:   "nphilly",
	name: "North Philly",
	sched_wk_sb: schedule(allegh.sched_wk_sb,2),
	sched_sat_sb: schedule(allegh.sched_wk_sb,2),
	sched_sun_sb: schedule(allegh.sched_wk_sb,2),
	sched_wk_nb: schedule(allegh.sched_wk_nb,-1),
};
var susque = {
	line: "bs",
	order: -6,
	id:   "susque",
	name: "Susquehanna-Dauphin",
	sched_wk_sb: schedule(nphilly.sched_wk_sb,2),
	sched_sat_sb: schedule(nphilly.sched_wk_sb,2),
	sched_sun_sb: schedule(nphilly.sched_wk_sb,2),
	sched_wk_nb: schedule(nphilly.sched_wk_nb,-1),
};
var cecil = {
	line: "bs",
	order: -5,
	id:   "cecil",
	name: "Cecil B Moore",
	sched_wk_sb: schedule(susque.sched_wk_sb,1),
	sched_sat_sb: schedule(susque.sched_wk_sb,1),
	sched_sun_sb: schedule(susque.sched_wk_sb,1),
	sched_wk_nb: schedule(susque.sched_wk_nb,-2),
};
var girard = {
	line: "bs",
	order: -4,
	id:   "girard",
	name: "Girard",
	sched_wk_sb: schedule(cecil.sched_wk_sb,1),
	sched_sat_sb: schedule(cecil.sched_wk_sb,1),
	sched_sun_sb: schedule(cecil.sched_wk_sb,1),
	sched_wk_nb: schedule(cecil.sched_wk_nb,-2),
};
var fairmount = {
	line: "bs",
	order: -3,
	id:   "fairmount",
	name: "Fairmount",
	sched_wk_sb: schedule(girard.sched_wk_sb,2),
	sched_sat_sb: schedule(girard.sched_wk_sb,2),
	sched_sun_sb: schedule(girard.sched_wk_sb,2),
	sched_wk_nb: schedule(girard.sched_wk_nb,-2),
};
var spring = {
	line: "bs",
	order: -2,
	id:   "spring",
	name: "Spring Garden",
	sched_wk_sb: schedule(fairmount.sched_wk_sb,2),
	sched_sat_sb: schedule(fairmount.sched_wk_sb,2),
	sched_sun_sb: schedule(fairmount.sched_wk_sb,2),
	sched_wk_nb: schedule(fairmount.sched_wk_nb,-1),
};
var race = {
	line: "bs",
	order: -1,
	id:   "race",
	name: "Race-Vine",
	sched_wk_sb: schedule(spring.sched_wk_sb,1),
	sched_sat_sb: schedule(spring.sched_wk_sb,1),
	sched_sun_sb: schedule(spring.sched_wk_sb,1),
	sched_wk_nb: schedule(spring.sched_wk_nb,-1),
};
var city_hall = {
	line: "bs",
	order: 0,
	id:   "city_hall",
	name: "City Hall",
	sched_wk_sb: schedule(race.sched_wk_sb,2),
	sched_sat_sb: schedule(race.sched_wk_sb,2),
	sched_sun_sb: schedule(race.sched_wk_sb,2),
	sched_wk_nb: schedule(race.sched_wk_nb,-2),
};
var walnut = {
	line: "bs",
	order: 1,
	id:   "walnut",
	name: "Walnut-Locust",
	sched_wk_sb: schedule(city_hall.sched_wk_sb,1),
	sched_sat_sb: schedule(city_hall.sched_wk_sb,1),
	sched_sun_sb: schedule(city_hall.sched_wk_sb,1),
	sched_wk_nb: schedule(city_hall.sched_wk_nb,-2),
};
var lombard = {
	line: "bs",
	order: 2,
	id:   "lombard",
	name: "Lombard-South",
	sched_wk_sb: schedule(walnut.sched_wk_sb,1),
	sched_sat_sb: schedule(walnut.sched_wk_sb,1),
	sched_sun_sb: schedule(walnut.sched_wk_sb,1),
	sched_wk_nb: schedule(walnut.sched_wk_nb,-1),
};
var ellsworth = {
	line: "bs",
	order: 3,
	id:   "ellsworth",
	name: "Ellsworth-Federal",
	sched_wk_sb: schedule(lombard.sched_wk_sb,1),
	sched_sat_sb: schedule(lombard.sched_wk_sb,1),
	sched_sun_sb: schedule(lombard.sched_wk_sb,1),
	sched_wk_nb: schedule(lombard.sched_wk_nb,-1),
};
var tasker = {
	line: "bs",
	order: 4,
	id:   "tasker",
	name: "Tasker-Morris",
	sched_wk_sb: schedule(ellsworth.sched_wk_sb,2),
	sched_sat_sb: schedule(ellsworth.sched_wk_sb,2),
	sched_sun_sb: schedule(ellsworth.sched_wk_sb,2),
	sched_wk_nb: schedule(ellsworth.sched_wk_nb,-1),
};
var snyder = {
	line: "bs",
	order: 5,
	id:   "snyder",
	name: "Snyder",
	sched_wk_sb: schedule(tasker.sched_wk_sb,2),
	sched_sat_sb: schedule(tasker.sched_wk_sb,2),
	sched_sun_sb: schedule(tasker.sched_wk_sb,2),
	sched_wk_nb: schedule(tasker.sched_wk_nb,-1)
};
var oregon = {
	line: "bs",
	order: 6,
	id:   "oregon",
	name: "Oregon",
	sched_wk_sb: schedule(snyder.sched_wk_sb,1),
	sched_sat_sb: schedule(snyder.sched_wk_sb,1),
	sched_sun_sb: schedule(snyder.sched_wk_sb,1),
	sched_wk_nb: schedule(snyder.sched_wk_nb,-2)
};
var att = {
	line: "bs",
	order: 7,
	id:   "att",
	name: "AT&T",
	sched_wk_sb: schedule(oregon.sched_wk_sb,3),
	sched_sat: schedule(oregon.sched_wk_sb,3),
	sched_sun: schedule(oregon.sched_wk_sb,3),
	sched_wk_nb: schedule(oregon.sched_wk_sb,-3),
};
//Market Frankford Line
var frank = {
	line: "mf",
	order: -17,
	id:   "frank",
	name: "Frankford",
	sched_wk_sb: [5.0,5.14,5.27,5.39,5.41,5.5,6.0,6.09,6.17,6.24,6.3,6.35,6.4,6.44,6.48,6.52,6.56,7.0,7.08,7.16,7.24,7.32,7.4,7.48,7.56,8.04,8.12,8.20,8.28,8.36,8.44,8.52,9,9.04,9.08,9.12,9.17,9.23,9.29,9.35,9.41,9.47,9.53,9.59,10.05,10.11,10.17,10.23,10.29,10.35,10.41,10.47,10.53,10.59,11.05,11.11,11.17,11.23,11.29,11.35,11.41,11.47,11.53,11.59,12.05,12.11,12.17,12.23,12.29,12.35,12.41,12.47,12.53,12.59,13.05,13.11,13.17,13.23,13.29,13.35,13.40,13.45,13.50,13.56,14.0,14.04,14.09,14.14,14.19,14.24,14.29,14.34,14.39,14.44,14.49,14.54,14.59,15.04,15.09,15.14,15.19,15.24,15.29,15.32,15.36,15.40,15.44,15.48,15.52,15.56,16.00,16.04,16.08,16.12,16.16,16.20,16.24,16.28,16.32,16.36,16.40,16.44,16.48,16.52,16.56,17.00,17.04,17.08,17.12,17.16,17.20,17.24,17.28,17.32,17.36,17.40,17.45,17.50,17.55,18.00,18.05,18.11,18.18,18.26,18.35,18.45,18.55,19.05,19.15,19.25,19.35,19.45,19.55,20.05,20.15,20.25,20.35,20.45,20.56,21.07,21.19,21.31,21.43,21.55,22.07,22.19,22.31,22.43,22.55,23.08,23.21,23.36,23.51,24.01],
	sched_sat_sb: [1,2,3],
	sched_sun_sb: [1,2,3],
	sched_wk_nb: [5.4,5.54,6.06,6.16,6.25,6.33,6.39,6.45,6.51,6.57,7.03,7.09,7.14,7.19,7.23,7.27,7.31,7.35,7.42,7.50,7.58,8.06,8.14,8.22,8.30,8.38,8.46,8.54,9.02,9.10,9.18,9.26,9.34,9.39,9.44,9.49,9.55,10.01,10.07,10.13,10.19,10.25,10.31,10.37,10.43,10.49,10.55,11.01,11.07,11.13,11.19,11.25,11.31,11.37,11.43,11.49,11.55,12.01,12.07,12.13,12.19,12.25,12.34,12.37,12.43,12.49,12.55,13.01,13.07,13.13,13.19,13.25,13.31,13.37,13.43,13.49,13.55,14.01,14.06,14.12,14.17,14.22,14.27,14.32,14.37,14.42,14.47,14.52,14.57,15.02,15.07,15.12,15.17,15.22,15.27,15.33,15.38,15.42,15.46,15.50,15.54,15.58,16.02,16.06,16.10,16.14,16.18,16.22,16.26,16.30,16.34,16.42,16.50,16.58,17.06,17.14,17.22,17.30,17.38,17.46,17.54,18.02,18.10,18.15,18.19,18.24,18.29,18.35,18.42,18.50,18.59,19.05,19.09,19.19,19.29,19.39,19.49,19.59,20.09,20.19,20.29,20.39,20.49,21.01,21.13,21.25,21.37,21.49,22.01,22.13,22.25,22.37,22.49,23.01,23.13,23.25,23.39,23.54,24.09,24.24,24.39,24.54],
	sched_sat_nb: [1,2,3],
	sched_sun_nb: [1,2,3],
};
var marg = {
	line: "mf",
	order: -16,
	id:   "marg",
	name: "Margaret-Orthodox",
	sched_wk_sb: schedule(frank.sched_wk_sb,2),
	sched_sat: schedule(frank.sched_wk_sb,2),
	sched_sun: schedule(frank.sched_wk_sb,2),
	sched_wk_nb: schedule(frank.sched_wk_nb,-2),
};
var church = {
	line: "mf",
	order: -15,
	id:   "church",
	name: "Church",
	sched_wk_sb: schedule(marg.sched_wk_sb,1),
	sched_sat: schedule(marg.sched_wk_sb,1),
	sched_sun: schedule(marg.sched_wk_sb,1),
	sched_wk_nb: schedule(marg.sched_wk_nb,-1),
};
var eriet = {
	line: "mf",
	order: -14,
	id:   "eriet",
	name: "Erie-Torresdale",
	sched_wk_sb: schedule(church.sched_wk_sb,2),
	sched_sat: schedule(church.sched_wk_sb,2),
	sched_sun: schedule(church.sched_wk_sb,2),
	sched_wk_nb: schedule(church.sched_wk_nb,-2),
};
var tioga = {
	line: "mf",
	order: -13,
	id:   "tioga",
	name: "Tioga",
	sched_wk_sb: schedule(eriet.sched_wk_sb,1),
	sched_sat: schedule(eriet.sched_wk_sb,1),
	sched_sun: schedule(eriet.sched_wk_sb,1),
	sched_wk_nb: schedule(eriet.sched_wk_nb,-1),
};
var alleghmf = {
	line: "mf",
	order: -12,
	id:   "alleghmf",
	name: "Allegheny (MF)",
	sched_wk_sb: schedule(tioga.sched_wk_sb,1),
	sched_sat: schedule(tioga.sched_wk_sb,1),
	sched_sun: schedule(tioga.sched_wk_sb,1),
	sched_wk_nb: schedule(tioga.sched_wk_nb,-1),
};
var somer = {
	line: "mf",
	order: -11,
	id:   "somer",
	name: "Somerset",
	sched_wk_sb: schedule(alleghmf.sched_wk_sb,2),
	sched_sat: schedule(alleghmf.sched_wk_sb,2),
	sched_sun: schedule(alleghmf.sched_wk_sb,2),
	sched_wk_nb: schedule(alleghmf.sched_wk_nb,-2),
};
var hunt = {
	line: "mf",
	order: -10,
	id:   "hunt",
	name: "Huntingdon",
	sched_wk_sb: schedule(somer.sched_wk_sb,1),
	sched_sat: schedule(somer.sched_wk_sb,1),
	sched_sun: schedule(somer.sched_wk_sb,1),
	sched_wk_nb: schedule(somer.sched_wk_nb,-1),
};
var york = {
	line: "mf",
	order: -9,
	id:   "york",
	name: "York-Dauphin",
	sched_wk_sb: schedule(hunt.sched_wk_sb,1),
	sched_sat: schedule(hunt.sched_wk_sb,1),
	sched_sun: schedule(hunt.sched_wk_sb,1),
	sched_wk_nb: schedule(hunt.sched_wk_nb,-1),
};
var berks = {
	line: "mf",
	order: -8,
	id:   "berks",
	name: "Berks",
	sched_wk_sb: schedule(york.sched_wk_sb,2),
	sched_sat: schedule(york.sched_wk_sb,2),
	sched_sun: schedule(york.sched_wk_sb,2),
	sched_wk_nb: schedule(york.sched_wk_nb,-2),
};
var girardmf = {
	line: "mf",
	order: -7,
	id:   "girardmf",
	name: "Girard (MF)",
	sched_wk_sb: schedule(berks.sched_wk_sb,2),
	sched_sat: schedule(berks.sched_wk_sb,2),
	sched_sun: schedule(berks.sched_wk_sb,2),
	sched_wk_nb: schedule(berks.sched_wk_nb,-2),
};
var springmf = {
	line: "mf",
	order: -6,
	id:   "springmf",
	name: "Spring Garden (MF)",
	sched_wk_sb: schedule(girardmf.sched_wk_sb,2),
	sched_sat: schedule(girardmf.sched_wk_sb,2),
	sched_sun: schedule(girardmf.sched_wk_sb,2),
	sched_wk_nb: schedule(girardmf.sched_wk_nb,-2),
};
var second = {
	line: "mf",
	order: -5,
	id:   "second",
	name: "2nd St",
	sched_wk_sb: schedule(springmf.sched_wk_sb,2),
	sched_sat: schedule(springmf.sched_wk_sb,2),
	sched_sun: schedule(springmf.sched_wk_sb,2),
	sched_wk_nb: schedule(springmf.sched_wk_nb,-2),
};
var fifth = {
	line: "mf",
	order: -4,
	id:   "fifth",
	name: "5th St",
	sched_wk_sb: schedule(second.sched_wk_sb,1),
	sched_sat: schedule(second.sched_wk_sb,1),
	sched_sun: schedule(second.sched_wk_sb,1),
	sched_wk_nb: schedule(second.sched_wk_nb,-1),
};
var eight = {
	line: "mf",
	order: -3,
	id:   "eight",
	name: "8th St",
	sched_wk_sb: schedule(fifth.sched_wk_sb,1),
	sched_sat: schedule(fifth.sched_wk_sb,1),
	sched_sun: schedule(fifth.sched_wk_sb,1),
	sched_wk_nb: schedule(fifth.sched_wk_nb,-1),
};
var elev = {
	line: "mf",
	order: -2,
	id:   "elev",
	name: "11th St",
	sched_wk_sb: schedule(eight.sched_wk_sb,1),
	sched_sat: schedule(eight.sched_wk_sb,1),
	sched_sun: schedule(eight.sched_wk_sb,1),
	sched_wk_nb: schedule(eight.sched_wk_nb,-1),
};
var thirteen = {
	line: "mf",
	order: -1,
	id:   "thirteen",
	name: "13th St",
	sched_wk_sb: schedule(elev.sched_wk_sb,1),
	sched_sat: schedule(elev.sched_wk_sb,1),
	sched_sun: schedule(elev.sched_wk_sb,1),
	sched_wk_nb: schedule(elev.sched_wk_nb,-1),
};
var fif = {
	line: "mf",
	order: 0,
	id:   "fif",
	name: "15th St",
	sched_wk_sb: schedule(thirteen.sched_wk_sb,1),
	sched_sat: schedule(thirteen.sched_wk_sb,1),
	sched_sun: schedule(thirteen.sched_wk_sb,1),
	sched_wk_nb: schedule(thirteen.sched_wk_nb,-1),
};
var thirty = {
	line: "mf",
	order: 1,
	id:   "thirty",
	name: "30th St",
	sched_wk_sb: schedule(fif.sched_wk_sb,2),
	sched_sat: schedule(fif.sched_wk_sb,2),
	sched_sun: schedule(fif.sched_wk_sb,2),
	sched_wk_nb: schedule(fif.sched_wk_nb,-2),
};
var thirtyfour = {
	line: "mf",
	order: 2,
	id:   "thirtyfour",
	name: "34th St",
	sched_wk_sb: schedule(thirty.sched_wk_sb,1),
	sched_sat: schedule(thirty.sched_wk_sb,1),
	sched_sun: schedule(thirty.sched_wk_sb,1),
	sched_wk_nb: schedule(thirty.sched_wk_nb,-1),
};
var fourty = {
	line: "mf",
	order: 3,
	id:   "forty",
	name: "40th St",
	sched_wk_sb: schedule(thirtyfour.sched_wk_sb,2),
	sched_sat: schedule(thirtyfour.sched_wk_sb,2),
	sched_sun: schedule(thirtyfour.sched_wk_sb,2),
	sched_wk_nb: schedule(thirtyfour.sched_wk_nb,-2),
};
var fourtysix = {
	line: "mf",
	order: 4,
	id:   "fourtysix",
	name: "46th St",
	sched_wk_sb: schedule(fourty.sched_wk_sb,2),
	sched_sat: schedule(fourty.sched_wk_sb,2),
	sched_sun: schedule(fourty.sched_wk_sb,2),
	sched_wk_nb: schedule(fourty.sched_wk_nb,-2),
};
var fiftytwo = {
	line: "mf",
	order: 5,
	id:   "fiftytwo",
	name: "52nd St",
	sched_wk_sb: schedule(fourtysix.sched_wk_sb,1),
	sched_sat: schedule(fourtysix.sched_wk_sb,1),
	sched_sun: schedule(fourtysix.sched_wk_sb,1),
	sched_wk_nb: schedule(fourtysix.sched_wk_nb,-1),
};
var fiftysix = {
	line: "mf",
	order: 6,
	id:   "fiftytwo",
	name: "52nd St",
	sched_wk_sb: schedule(fiftytwo.sched_wk_sb,1),
	sched_sat: schedule(fiftytwo.sched_wk_sb,1),
	sched_sun: schedule(fiftytwo.sched_wk_sb,1),
	sched_wk_nb: schedule(fiftytwo.sched_wk_nb,-1),
};
var sixty = {
	line: "mf",
	order: 7,
	id:   "sixty",
	name: "60th St",
	sched_wk_sb: schedule(fiftysix.sched_wk_sb,2),
	sched_sat: schedule(fiftysix.sched_wk_sb,2),
	sched_sun: schedule(fiftysix.sched_wk_sb,2),
	sched_wk_nb: schedule(fiftysix.sched_wk_nb,-2),
};
var sixtythree = {
	line: "mf",
	order: 8,
	id:   "sixtythree",
	name: "63rd St",
	sched_wk_sb: schedule(sixty.sched_wk_sb,1),
	sched_sat: schedule(sixty.sched_wk_sb,1),
	sched_sun: schedule(sixty.sched_wk_sb,1),
	sched_wk_nb: schedule(sixty.sched_wk_nb,-1),
};
var milb = {
	line: "mf",
	order: 9,
	id:   "milb",
	name: "Milbourne",
	sched_wk_sb: schedule(sixtythree.sched_wk_sb,2),
	sched_sat: schedule(sixtythree.sched_wk_sb,2),
	sched_sun: schedule(sixtythree.sched_wk_sb,2),
	sched_wk_nb: schedule(sixtythree.sched_wk_nb,-2),
};
var sixtynine = {
	line: "mf",
	order: 10,
	id:   "sixtynine",
	name: "69th St",
	sched_wk_sb: schedule(milb.sched_wk_sb,4),
	sched_sat_sb: schedule(milb.sched_wk_sb,4),
	sched_sun_sb: schedule(milb.sched_wk_sb,4),
	sched_wk_nb: schedule(milb.sched_wk_nb,-1),
};

//-----------------------------------------------------------

var stations = [fern,olney,logan,wyoming,hunt_park,erie,allegh,nphilly,susque,cecil,girard,fairmount,spring,race,city_hall,walnut,lombard,ellsworth,tasker,snyder,oregon,att,frank,marg,church,eriet,tioga,alleghmf,somer,hunt,york,berks,girardmf,springmf,second,fifth,eight,elev,thirteen,fif,thirty,thirtyfour,fourty,fourtysix,fiftytwo,fiftysix,sixty,sixtythree,milb,sixtynine];//Setting array of stations

//-----------------------------------------------------------


function submit(){

    var start_sel = document.getElementById("start_dest");
    var start = start_sel.options[start_sel.selectedIndex].value;
    var end_sel = document.getElementById("end_dest");
    var end = end_sel.options[end_sel.selectedIndex].value;
        
    routeInit(start,end,parseTime(time),parseDay());

    $('#start_dest, #end_dest').change(function(){

    	var start_sel = document.getElementById("start_dest");
	    var start = start_sel.options[start_sel.selectedIndex].value;
	    var end_sel = document.getElementById("end_dest");
	    var end = end_sel.options[end_sel.selectedIndex].value;
	        
	    routeInit(start,end,parseTime(time),parseDay());
    });

};

//-----------------------------------------------------------

function schedule(prev_station,diff){//sets schedules for all stations except fern rock
	var schedule = new Array();
	
	if(diff>0){	//for southbound and westbound schedules, positive difference
		for(i=0; i < prev_station.length; i++){
			
			schedule[i] = prev_station[i] + (diff/100);
			
			if((schedule[i] - Math.floor(schedule[i])) > .59){
				var minutes = schedule[i] - Math.floor(schedule[i]) - .60;
				schedule[i] = Math.floor(schedule[i]) + 1 + minutes;
			} 
			schedule[i] = round(schedule[i]);
		};	
	}
	else{//for northbound and eastbound schedules, negative difference
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

//-----------------------------------------------------------

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

//-----------------------------------------------------------

function timeformat(time){//formats time from a double into hh:mm
	
	if (time == "X"){
		return "No scheduled trains";
	}
	if((time >= 12) && (time < 24)){
		var meridian = "PM";
		
		if (time > 12.59){
		time = round((time) - 12.00)//Formatting time from 24hr to 12hr style
		};
	}
	else {
		var meridian = "AM"
	};
	
	time = time.toString().split("."); //Converting time variable to a string and splitting to get minutes and hours
	
	if(time[1] === undefined){//If minutes are undefined,
		time[1] = "00"; //Converts undefined minutes to hh:00;
	};

	if (time[0] == 24){//If the hour is 24, set it to 12
		time[0] = 12};

	if(time[1].length == 1 ){
		time[1] = time[1]*10; //Adds trailing zero to hh:m0 numbers that otherwise display as hh:m;
	};
	
	return (time[0]+":"+time[1]+" "+meridian);//returning a string of the time
};

//-----------------------------------------------------------

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

//-----------------------------------------------------------

function routeInit(start,end,time,day){ //Using form to get times
	for(i=0; i < stations.length; i++){
		if(stations[i].id == start){
			console.log("Starting from: "+stations[i].name);
			var start_station = stations[i];
		}
		else if(stations[i].id == end){
			console.log("Ending at: "+stations[i].name);
			var end_station = stations[i];
		};
	};
	
	/*
if(start_station.line != end_station.line){
		route3(start_station,end_station,day,time);
	}
	else{
		route2(start_station,end_station,day,time);
	};
*/
	route2(start_station,end_station,day,time);
};

//-----------------------------------------------------------

function route2(start_station,end_station,day,time){
	
	$('.transfer_station').remove();
	$('.transfer1').remove();
	$('.transfer2').remove();
	$('.transfer3').remove();
	
	if(start_station.order < end_station.order){//southbound
		if(day === "wk"){//weekday southbound scheduling
			for(i=0; i < start_station.sched_wk_sb.length; i++){
				if(start_station.sched_wk_sb[i] > time){
					var leave_time1 = start_station.sched_wk_sb[i];
					var leave_time2 = start_station.sched_wk_sb[i+1];
					var leave_time3 = start_station.sched_wk_sb[i+2];
					var arrive_time1 = end_station.sched_wk_sb[i];
					var arrive_time2 = end_station.sched_wk_sb[i+1];
					var arrive_time3 = end_station.sched_wk_sb[i+2];
					break;
				};//endif
			};//endfor
		}//endif
		else if(day === "sat"){//saturday southbound scheduling
			for(i=0; i < start_station.sched_sat_sb.length; i++){
				if(start_station.sched_sat[i] > time){
					var leave_time1 = start_station.sched_sat_sb[i];
					var leave_time2 = start_station.sched_sat_sb[i+1];
					var leave_time3 = start_station.sched_sat_sb[i+2];
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
					var leave_time1 = start_station.sched_sun_sb[i];
					var leave_time2 = start_station.sched_sun_sb[i+1];
					var leave_time3 = start_station.sched_sun_sb[i+2];
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
					var leave_time1 = start_station.sched_wk_nb[i];
					var leave_time2 = start_station.sched_wk_nb[i+1];
					var leave_time3 = start_station.sched_wk_nb[i+2];
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
					var arrive_time1 = end_station.sched_sat_nb[i];
					var arrive_time2 = end_station.sched_sat_nb[i+1];
					var arrive_time3 = end_station.sched_sat_nb[i+2];
					break;
				};
			};
		}
		else {//sunday northbound scheduling
			for(i=0; i < start_station.sched_sun_nb.length; i++){
				if(start_station.sched_sun_nb[i] > time){
					var leave_time1 = start_station.sched_sun_nb[i];
					var leave_time2 = start_station.sched_sun_nb[i+1];
					var leave_time3 = start_station.sched_sun_nb[i+2];
					var arrive_time1 = end_station.sched_sun_nb[i];
					var arrive_time2 = end_station.sched_sun_nb[i+1];
					var arrive_time3 = end_station.sched_sun_nb[i+2];
					break;
				};
			};
		};				
	};
	
	if((leave_time1 || arrive_time1) == undefined){
		leave_time1 = "X";
		arrive_time1 = "X";
	}
	if((leave_time2 || arrive_time2) == undefined){
		leave_time2 = "X";
		arrive_time2 = "X";
	}
	if((leave_time3 || arrive_time3) == undefined){
		leave_time3 = "X";
		arrive_time3 = "X";
	}
	
	render2(start_station,end_station,leave_time1,leave_time2,leave_time3,arrive_time1,arrive_time2,arrive_time3);	
	
};

//-----------------------------------------------------------

/*
function route3(start_station,end_station,day,time){
	
	if(start_station.line == "bs"){
		var transfer_station = city_hall;
		var transfer_station2 = fif;
	}
	else{
		var transfer_station = fif;
		var transfer_station2 = city_hall;
	};//Setting appropriate transfer stations
	
	if(start_station.order < 0){//Iniital southbound trip
		if(day === "wk"){
			for(i=0; i < start_station.sched_wk_sb.length; i++){
				if(start_station.sched_wk_sb[i] > time){
					var leave_time1 = start_station.sched_wk_sb[i];
					var leave_time2 = start_station.sched_wk_sb[i+1];
					var leave_time3 = start_station.sched_wk_sb[i+2];
					var transfer_time1a = transfer_station.sched_wk_sb[i];
					var transfer_time2a = transfer_station.sched_wk_sb[i+1];
					var transfer_time3a = transfer_station.sched_wk_sb[i+2];
					break;
				};	
			};
			
			if(0 < end_station.order){
				for(i=0; i < transfer_station2.sched_wk_sb.length; i++){
					if(transfer_station2.sched_wk_nb[i] > transfer_time1a){
						var transfer_time1b = transfer_station2.sched_wk_sb[i]; 
						var transfer_time2b = transfer_station2.sched_wk_sb[i+1];
						var transfer_time3b = transfer_station2.sched_wk_sb[i+2];						
						var arrive_time1 = end_station.sched_wk_sb[i];
						var arrive_time2 = end_station.sched_wk_sb[i+1];
						var arrive_time3 = end_station.sched_wk_sb[i+2];
						break;
					};
				};//End of transfer for
			}//End of transfer if
			
			else{
				for(i=0; i < transfer_station2.sched_wk_nb.length; i++){
					if(transfer_station2.sched_wk_nb[i] > transfer_time1a){
						var transfer_time1b = transfer_station2.sched_wk_nb[i]; 
						var transfer_time2b = transfer_station2.sched_wk_nb[i+1];
						var transfer_time3b = transfer_station2.sched_wk_nb[i+2];						
						var arrive_time1 = end_station.sched_wk_nb[i];
						var arrive_time2 = end_station.sched_wk_nb[i+1];
						var arrive_time3 = end_station.sched_wk_nb[i+2];
						break;
					};
				};//End of transfer for
			}; //end of transfer if
		}
		else if (day ==="sat"){
			for(i=0; i < start_station.sched_sat_sb.length; i++){
				if(start_station.sched_sat_sb[i] > time){
					var leave_time1 = start_station.sched_sat_sb[i];
					var leave_time2 = start_station.sched_sat_sb[i+1];
					var leave_time3 = start_station.sched_sat_sb[i+2];
					var transfer_time1 = transfer_station.sched_sat_sb[i];
					var transfer_time2 = transfer_station.sched_sat_sb[i+1];
					var transfer_time3 = transfer_station.sched_sat_sb[i+2];
					break;
				};
			};
			
			if(0 < end_station.order){
				for(i=0; i < transfer_station2.sched_sat_sb.length; i++){
					if(transfer_station2.sched_sat_sb[i] > transfer_time1a){
						var transfer_time1b = transfer_station2.sched_sat_sb[i]; 
						var transfer_time2b = transfer_station2.sched_sat_sb[i+1];
						var transfer_time3b = transfer_station2.sched_sat_sb[i+2];						
						var arrive_time1 = end_station.sched_sat_sb[i];
						var arrive_time2 = end_station.sched_sat_sb[i+1];
						var arrive_time3 = end_station.sched_sat_sb[i+2];
						break;
					};
				};//End of transfer for
			}//End of transfer if
			
			else{
				for(i=0; i < transfer_station2.sched_sat_nb.length; i++){
					if(transfer_station2.sched_sat_nb[i] > transfer_time1a){
						var transfer_time1b = transfer_station2.sched_sat_nb[i]; 
						var transfer_time2b = transfer_station2.sched_sat_nb[i+1];
						var transfer_time3b = transfer_station2.sched_sat_nb[i+2];						
						var arrive_time1 = end_station.sched_sat_nb[i];
						var arrive_time2 = end_station.sched_sat_nb[i+1];
						var arrive_time3 = end_station.sched_sat_nb[i+2];
						break;
					};
				};//End of transfer for
			}; //end of transfer if
			
		}
		else{
			for(i=0; i < start_station.sched_sun_sb.length; i++){
				if(start_station.sched_sun_nb[i] > time){
					var leave_time1 = start_station.sched_sun_nb[i];
					var leave_time2 = start_station.sched_sun_nb[i+1];
					var leave_time3 = start_station.sched_sun_nb[i+2];
					var transfer_time1 = transfer_station.sched_sun_nb[i];
					var transfer_time2 = transfer_station.sched_sun_nb[i+1];
					var transfer_time3 = transfer_station.sched_sun_nb[i+2];
					break;
				};
			};
			if(0 < end_station.order){
				for(i=0; i < transfer_station2.sched_sun_sb.length; i++){
					if(transfer_station2.sched_sun_sb[i] > transfer_time1a){
						var transfer_time1b = transfer_station2.sched_sun_sb[i]; 
						var transfer_time2b = transfer_station2.sched_sun_sb[i+1];
						var transfer_time3b = transfer_station2.sched_sun_sb[i+2];						
						var arrive_time1 = end_station.sched_sun_sb[i];
						var arrive_time2 = end_station.sched_sun_sb[i+1];
						var arrive_time3 = end_station.sched_sun_sb[i+2];
						break;
					};
				};//End of transfer for
			}//End of transfer if
			
			else{
				for(i=0; i < transfer_station2.sched_sun_nb.length; i++){
					if(transfer_station2.sched_sun_nb[i] > transfer_time1a){
						var transfer_time1b = transfer_station2.sched_sun_nb[i]; 
						var transfer_time2b = transfer_station2.sched_sun_nb[i+1];
						var transfer_time3b = transfer_station2.sched_sun_nb[i+2];						
						var arrive_time1 = end_station.sched_sun_nb[i];
						var arrive_time2 = end_station.sched_sun_nb[i+1];
						var arrive_time3 = end_station.sched_sun_nb[i+2];
						break;
					};
				};//End of transfer for
			}; //end of transfer if
		};
	}
	
	
	
	
	else{//Initial northbound trip
		if(day === "wk"){
			for(i=0; i < start_station.sched_wk_nb.length; i++){
				if(start_station.sched_wk_nb[i] > time){
					var leave_time1 = start_station.sched_wk_nb[i];
					var leave_time2 = start_station.sched_wk_nb[i+1];
					var leave_time3 = start_station.sched_wk_nb[i+2];
					var transfer_time1a = transfer_station.sched_wk_nb[i];
					var transfer_time2a = transfer_station.sched_wk_nb[i+1];
					var transfer_time3a = transfer_station.sched_wk_nb[i+2];
					break;
				};
			};
			if(0 < end_station.order){
				for(i=0; i < transfer_station2.sched_wk_sb.length; i++){
					if(transfer_station2.sched_wk_sb[i] > transfer_time1a){
						var transfer_time1b = transfer_station2.sched_wk_sb[i]; 
						var transfer_time2b = transfer_station2.sched_wk_sb[i+1];
						var transfer_time3b = transfer_station2.sched_wk_sb[i+2];						
						var arrive_time1 = end_station.sched_wk_sb[i];
						var arrive_time2 = end_station.sched_wk_sb[i+1];
						var arrive_time3 = end_station.sched_wk_sb[i+2];
						break;
					};
				};//End of transfer for
			}//End of transfer if
			
			else{
				for(i=0; i < transfer_station2.sched_wk_nb.length; i++){
					if(transfer_station2.sched_wk_nb[i] > transfer_time1a){
						var transfer_time1b = transfer_station2.sched_wk_nb[i]; 
						var transfer_time2b = transfer_station2.sched_wk_nb[i+1];
						var transfer_time3b = transfer_station2.sched_wk_nb[i+2];						
						var arrive_time1 = end_station.sched_wk_nb[i];
						var arrive_time2 = end_station.sched_wk_nb[i+1];
						var arrive_time3 = end_station.sched_wk_nb[i+2];
						break;
					};
				};//End of transfer for
			}; //end of transfer if
		}
		else if (day === "sat"){
			for(i=0; i < start_station.sched_sat_nb.length; i++){
				if(start_station.sched_sat_nb[i] > time){
					var leave_time1 = start_station.sched_sat_nb[i];
					var leave_time2 = start_station.sched_sat_nb[i+1];
					var leave_time3 = start_station.sched_sat_nb[i+2];
					var transfer_time1 = transfer_station.sched_sat_nb[i];
					var transfer_time2 = transfer_station.sched_sat_nb[i+1];
					var transfer_time3 = transfer_station.sched_sat_nb[i+2];
					break;
				};
			};
			
			if(0 < end_station.order){
				for(i=0; i < transfer_station2.sched_sat_sb.length; i++){
					if(transfer_station2.sched_sat_sb[i] > transfer_time1a){
						var transfer_time1b = transfer_station2.sched_sat_sb[i]; 
						var transfer_time2b = transfer_station2.sched_sat_sb[i+1];
						var transfer_time3b = transfer_station2.sched_sat_sb[i+2];						
						var arrive_time1 = end_station.sched_sat_sb[i];
						var arrive_time2 = end_station.sched_sat_sb[i+1];
						var arrive_time3 = end_station.sched_sat_sb[i+2];
						break;
					};
				};//End of transfer for
			}//End of transfer if
			
			else{
				for(i=0; i < transfer_station2.sched_sat_nb.length; i++){
					if(transfer_station2.sched_sat_nb[i] > transfer_time1a){
						var transfer_time1b = transfer_station2.sched_sat_nb[i]; 
						var transfer_time2b = transfer_station2.sched_sat_nb[i+1];
						var transfer_time3b = transfer_station2.sched_sat_nb[i+2];						
						var arrive_time1 = end_station.sched_sat_nb[i];
						var arrive_time2 = end_station.sched_sat_nb[i+1];
						var arrive_time3 = end_station.sched_sat_nb[i+2];
						break;
					};
				};//End of transfer for
			}; //end of transfer if
		}
		else{
			for(i=0; i < start_station.sched_sun_nb.length; i++){
				if(start_station.sched_sun_nb[i] > time){
					var leave_time1 = start_station.sched_wk_nb[i];
					var leave_time2 = start_station.sched_wk_nb[i+1];
					var leave_time3 = start_station.sched_wk_nb[i+2];
					var transfer_time1 = transfer_station.sched_wk_nb[i];
					var transfer_time2 = transfer_station.sched_wk_nb[i+1];
					var transfer_time3 = transfer_station.sched_wk_nb[i+2];
					break;
				};
			};
			
			if(0 < end_station.order){
				for(i=0; i < transfer_station2.sched_sun_sb.length; i++){
					if(transfer_station2.sched_sun_sb[i] > transfer_time1a){
						var transfer_time1b = transfer_station2.sched_sun_sb[i]; 
						var transfer_time2b = transfer_station2.sched_sun_sb[i+1];
						var transfer_time3b = transfer_station2.sched_sun_sb[i+2];						
						var arrive_time1 = end_station.sched_sun_sb[i];
						var arrive_time2 = end_station.sched_sun_sb[i+1];
						var arrive_time3 = end_station.sched_sun_sb[i+2];
						break;
					};
				};//End of transfer for
			}//End of transfer if
			
			else{
				for(i=0; i < transfer_station2.sched_sun_nb.length; i++){
					if(transfer_station2.sched_sun_nb[i] > transfer_time1a){
						var transfer_time1b = transfer_station2.sched_sun_nb[i]; 
						var transfer_time2b = transfer_station2.sched_sun_nb[i+1];
						var transfer_time3b = transfer_station2.sched_sun_nb[i+2];						
						var arrive_time1 = end_station.sched_sun_nb[i];
						var arrive_time2 = end_station.sched_sun_nb[i+1];
						var arrive_time3 = end_station.sched_sun_nb[i+2];
						break;
					};
				};//End of transfer for
			}; //end of transfer if
		};
	};
						
				render3(start_station,end_station,transfer_station,leave_time1,leave_time2,leave_time3,transfer_time1a,transfer_time2a,transfer_time3a,transfer_time1b,transfer_time2b,transfer_time3b,arrive_time1,arrive_time2,arrive_time3);	
	
};
*/


//-----------------------------------------------------------

function render2(start_station,end_station,leave_time1,leave_time2,leave_time3,arrive_time1,arrive_time2,arrive_time3){
	
	$('.start_station').empty();
	$('.start_station').append(start_station.name);
	$('.end_station').empty();
	$('.end_station').append(end_station.name);
	$('.start1').empty();
	$('.start1').append(timeformat(leave_time1));
	$('.start2').empty();	
	$('.start2').append(timeformat(leave_time2));
	$('.start3').empty();
	$('.start3').append(timeformat(leave_time3));
	$('.end1').empty();
	$('.end1').append(timeformat(arrive_time1));
	$('.end2').empty();
	$('.end2').append(timeformat(arrive_time2));
	$('.end3').empty();
	$('.end3').append(timeformat(arrive_time3));
	$('.table').fadeIn("slow");
};


//-----------------------------------------------------------

/*
function render3(start_station,end_station,transfer_station,leave_time1,leave_time2,leave_time3,transfer_time1a,transfer_time2a,transfer_time3a,transfer_time1b,transfer_time2b,transfer_time3b,arrive_time1,arrive_time2,arrive_time3){

	$('.start_station').empty();
	$('.start_station').append(start_station.name);
	$('.transfer_station').remove();
	$('.start_station').after('<td class="transfer_station">'+transfer_station.name+' (Transfer) </td>');
	$('.end_station').empty();
	$('.end_station').append(end_station.name);
	$('.start1').empty();
	$('.start1').append(timeformat(leave_time1));
	$('.transfer1').remove();
	$('.start1').after('<td class="transfer1">'+transferWindow(transfer_time1a,transfer_time1b)+' Mins </td>');
	$('.start2').empty();	
	$('.start2').append(timeformat(leave_time2));
	$('.transfer2').remove();
	$('.start2').after('<td class="transfer2">'+transferWindow(transfer_time2a,transfer_time2b)+' Mins </td>');
	$('.start3').empty();
	$('.start3').append(timeformat(leave_time3));
	$('.transfer3').remove();
	$('.start3').after('<td class="transfer3">'+transferWindow(transfer_time3a,transfer_time3b)+' Mins </td>');
	$('.end1').empty();
	$('.end1').append(timeformat(arrive_time1));
	$('.end2').empty();
	$('.end2').append(timeformat(arrive_time2));
	$('.end3').empty();
	$('.end3').append(timeformat(arrive_time3));
	$('.table').fadeIn("slow");
	
	console.log("Transfer window: "+transferWindow(transfer_time1a,transfer_time1b));
	console.log("Transfer A: "+transfer_time1a);
	console.log("Transfer B: "+transfer_time1b);
};
*/

//-----------------------------------------------------------

function round(num){//rounding function necessary because javascript has issues adding doubles to each other.
   	return ((Math.round(num *100))/100);
};

//-----------------------------------------------------------

function transferWindow(transfer_time_a,transfer_time_b){
	return round((transfer_time_b - transfer_time_a)*100);
};

//-----------------------------------------------------------
	$('#timepicker').timepicker().on('changeTime.timepicker', function(e) {
        time = e.time.value;
	});
 
 $('#timepicker').timepicker();//Following code is used to set time picker to current time
    var time = timepicker.value;
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes(); 
    if(hours > 11){
	    var meridian = "PM";
	    if(hours != 12){
	    	var hours = hours - 12;
	    };
    }
    else{
	    var meridian = "AM"
    };
 $('#timepicker').timepicker('setTime', hours+":"+minutes+" "+meridian);
    



//-----------------------------------------------------------

$('.line1').ready(function(){//Function that populates starting station list
	$(".line1").change(function(){
		
		console.log("It Changed!");
		
		var lineval1 = $('.line1');
		
		if(lineval1.is(":checked")) {
			var linevalue1 = "mf";
		}
		else{
			var linevalue1 = "bs";
		};
		
		$('#start_dest').empty();
		$('#end_dest').empty();
		
		$('#start_dest').append('<option value="" disabled="disabled" selected="selected">--Starting Station--</option>');
		$('#end_dest').append('<option value="" disabled="disabled" selected="selected">--Ending Station--</option>');
		
		for (i=0; i<stations.length; i++){
  			if(linevalue1 == stations[i].line){
  				$('#start_dest').append("<option value='"+stations[i].id+"'>"+stations[i].name+"</option>");
  			}
  		}
	});
});

//-----------------------------------------------------------

$('#start_dest').change(function(){//Function sees start destination and removes it as an option for end destination
	
	var selection = document.getElementById("start_dest").options[document.getElementById("start_dest").selectedIndex].value;
	
	var selection_end = document.getElementById("end_dest").options[document.getElementById("end_dest").selectedIndex].value;

	if( (selection_end == "") || (selection==selection_end) ){//Resets drop down list if end isn't defined or if start and end are the s
		$('#end_dest').empty();
	
		$('#end_dest').append("<option value='' disabled='disabled' selected='selected'>--Ending Station--</option>");
		
		
		if($('.line1').is(":checked")) {
			var linevalue1 = "mf";
		}
		else{
			var linevalue1 = "bs";
		};
		
		for (i=0; i<stations.length; i++){
			if(selection != stations[i].id && linevalue1 == stations[i].line){
				$('#end_dest').append("<option value='"+stations[i].id+"'>"+stations[i].name+"</option>");
			};
		};
	};
});

//-----------------------------------------------------------

$('.line1').switchButton({//initializes and configures subway line slider UI
  on_label: 'MF',
  off_label: 'BSL',
  width: 40,
  height: 15,
  button_width: 25
});




