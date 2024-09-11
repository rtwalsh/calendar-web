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
    layoutMonthView(date);
}

function setHeading() {
    let month = MONTHS[calendar.month];
    let element = document.getElementById("month_and_year");
    element.textContent = month + " " + calendar.year;
}

function layoutMonthView(date) {
    date.setDate(1);    // go to the first day of the month

    let dayOfWeek = date.getDay();  // Sunday = 0
    let column = dayOfWeek + 1;
    let row = 1;
    let id;

    // Skip squares until we reach the first day of the month
    let unusedColumn = 1;
    while (unusedColumn < column) {
        // Construct a value for the id of the element we want to manipulate.
        // For row 1 column 1, the id should be "r1c1".
        id = "r" + row + "c" + unusedColumn;
        document.getElementById(id).textContent = "skip";
        ++unusedColumn;     // this is shorthand for unusedColumn = unusedColumn + 1
    }

    // Set the day number for each "used" square
    id = "r" + row + "c" + column;
    document.getElementById(id).textContent = date.getDate(); // returns the day of the month

    // Continue while we are in the same month
    let month = date.getMonth();
    date.setDate(date.getDate() + 1);   // Move to the next day of the month
    while (date.getMonth() == month) {
        column += 1;        // this is also shorthand for column = column + 1
        if (column > 7) {   // do we need to move to the next row?
            column = 1;
            row += 1;
        }
        id = "r" + row + "c" + column;
        document.getElementById(id).textContent = date.getDate();
        date.setDate(date.getDate() + 1);
    }

    // Skip all the remaining squares
    while (row != 7) {
        column += 1;
        if (column > 7) {
            column = 1;
            row += 1;
        }

        if (row < 7) {
            id = "r" + row + "c" + column;
            document.getElementById(id).textContent = "skip";
            date.setDate(date.getDate() + 1);
        }
    }
}