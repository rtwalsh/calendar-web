/*
 *  Web-Based Month View Calendar
 *
 *  Author: Robert Walsh
 *  Date:   September 10, 2024
 */

let calendar;

function initialize() {
    let date = new Date();
    calendar = {
        month: date.getMonth(),
        year: date.getFullYear()
    }
    
    console.log("The current month is " + calendar.month);
    console.log("The current year is " + calendar.year);
}
