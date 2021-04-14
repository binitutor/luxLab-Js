var today = new Date(); // Fri Mar 05 2021 12:09:34 GMT-0500 (EST)
var currentMonth = today.getMonth(); // 2, it is march (3)
var currentYear = today.getFullYear(); // 2021
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");

// find name of clicked date
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dateName = weekdays[today.getDay()]; // Friday

// get current month name
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var calMonth = months[date.getMonth()];
// get current year
var calYear = today.getFullYear();

// dropdown list, year
var createYear = generate_year_range(currentYear - 5, currentYear + 5);

function generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}
document.getElementById("year").innerHTML = createYear;


var calendar = document.getElementById("calendarForm");
var lang = calendar.getAttribute('data-lang');

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// setting table header
var dayHeader = "<tr>";
for (day in days) {
    dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
}
dayHeader += "</tr>";
document.getElementById("thead-month").innerHTML = dayHeader;


// setting month title
monthAndYear = document.getElementById("monthAndYear");

showCalendar(currentMonth, currentYear);

function showCalendar(month, year) {

    var firstDay = (new Date(year, month)).getDay();

    tbl = document.getElementById("calendar-body");

    tbl.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    var date = 1;
    for (var i = 0; i < 6; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";
                cell.innerHTML = "<span>" + date + "</span>";

                // cell.css('background', 'orange');
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.className = "date-picker selected";
                }
                row.appendChild(cell);
                date++;

                // check if cell has same datename, date, month name and year
                // if so set the cell background to orange
            }

        }

        tbl.appendChild(row);
    }

}

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}