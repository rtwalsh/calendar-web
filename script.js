/*
 *  Web-Based Month View Calendar
 *
 *  Author: Robert Walsh
 *  Date:   September 10, 2024
 */

const MONTHS = [ "January", "February", "March", 
                 "April", "May", "June",
                 "July", "August", "September",
                 "October", "November", "December" ];

let calendar;

function initialize() {
    let date = new Date();
    calendar = {
        month: date.getMonth(),
        year: date.getFullYear()
    }
    
    console.log("The current month is " + calendar.month);
    console.log("The current year is " + calendar.year);

    setHeading();
}

function setHeading() {
    let month = MONTHS[calendar.month];
    let element = document.getElementById("month_and_year");
    element.textContent = month + " " + calendar.year;
}
