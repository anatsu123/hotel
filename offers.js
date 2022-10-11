days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
months = ["January", "February", "March" ,"April", "May","June", "July", "August", "September", "October", "November", "December"];

const offerText = document.querySelector(".offer-time");
const deadline = document.querySelector(".content-container");

const daysDisplay = document.querySelector(".days");
const hoursDisplay = document.querySelector(".hours");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const tempDate = new Date(2023,08,25,23,59,59);

const tempYear = tempDate.getFullYear();

const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();
const WeekDay = tempDate.getDay();
const tempHour = tempDate.getHours();
const tempMin = tempDate.getMinutes();
const tempSec = tempDate.getSeconds();

offerText.textContent = `Offer ends on ${days[WeekDay-1]}, ${tempDay} ${months[tempMonth]} ${tempYear} ${tempHour}: ${tempMin} pm`

const timeRemaining = tempDate.getTime();

function timeLeft(){
const today = new Date().getTime();

const t = timeRemaining - today;


const oneDay = 60*60*24*1000;
const oneHour = 60*60*1000;
const oneMin = 60*1000;

let days = Math.floor( t / oneDay);

let hours = Math.floor((t % oneDay) / oneHour);

let minutes = Math.floor((t % oneHour) / oneMin);

let seconds = Math.floor((t % oneMin)/1000);


totalTime = [days, hours, minutes, seconds];

daysDisplay.textContent = totalTime[0];
hoursDisplay.textContent = totalTime[1];
minutesDisplay.textContent =totalTime[2];
secondsDisplay.textContent = totalTime[3];
if(t<0){

clearInterval(countdown);

    deadline.textContent = `Offer has already expired`;
    deadline.style.color = "red";
    
    }
};
//updating each second
let countdown = setInterval(timeLeft,1000);

timeLeft();