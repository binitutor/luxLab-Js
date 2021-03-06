$(document).ready(function () {

    /*
        this function updates bootstrap modal header section with selected date and time
        it receives two parameters: date & time
        to call the function: MODAL_Loader(reqDate, reqTime);
    */
    // MODAL Loader
    function MODAL_Loader(date, time) {
        // update modal with date and time
        $('#modalDate').html(date);
        $('#modalTime').html(time);
    }

    /* 
        this function holds json of date and time
        mimics the data received from server
        to get the data obj, call this function: var varName = jsonData();

    */
    function jsonData() {
        // json of date and time
        var dateTimeData = [
            {
                crDate: "Monday, March 1, 2021",
                crTime: "10:00am - 12:00pm"
            },
            {
                crDate: "Tuesday, March 2, 2021",
                crTime: "9:00am - 10:00am"
            },
            {
                crDate: "Wednesday, March 3, 2021",
                crTime: "11:00am - 12:00pm"
            },
            {
                crDate: "Wednesday, March 3, 2021",
                crTime: "2:00pm - 3:00pm"
            },
            {
                crDate: "Thursday, March 4, 2021",
                crTime: "2:00pm - 3:00pm"
            },
            {
                crDate: "Friday, March 5, 2021",
                crTime: "2:00pm - 3:00pm"
            },
            {
                crDate: "Saturday, March 6, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Saturday, March 6, 2021",
                crTime: "12:00pm - 2:00pm"
            },
            {
                crDate: "Sunday, March 7, 2021",
                crTime: "12:00pm - 2:00pm"
            },
            {
                crDate: "Monday, March 8, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Tuesday, March 9, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Tuesday, March 9, 2021",
                crTime: "11:00am - 12:00pm"
            },
            {
                crDate: "Wednesday, March 10, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, March 11, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, March 4, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, March 11, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Friday, March 12, 2021",
                crTime: "2:00pm - 3:00pm"
            },
            {
                crDate: "Saturday, March 13, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Sunday, March 14, 2021",
                crTime: "12:00pm - 2:00pm"
            },
            {
                crDate: "Monday, March 15, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Tuesday, March 16, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Tuesday, March 16, 2021",
                crTime: "11:00am - 12:00pm"
            },
            {
                crDate: "Wednesday, March 17, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, March 18, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, March 18, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, March 18, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Friday, March 19, 2021",
                crTime: "2:00pm - 3:00pm"
            },
            {
                crDate: "Saturday, March 20, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Sunday, March 21, 2021",
                crTime: "12:00pm - 2:00pm"
            },
            {
                crDate: "Monday, March 22, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Tuesday, March 23, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Tuesday, March 23, 2021",
                crTime: "11:00am - 12:00pm"
            },
            {
                crDate: "Wednesday, March 24, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, March 25, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, March 25, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, March 25, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Friday, March 26, 2021",
                crTime: "2:00pm - 3:00pm"
            },
            {
                crDate: "Saturday, March 27, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Sunday, March 28, 2021",
                crTime: "12:00pm - 2:00pm"
            },
            {
                crDate: "Monday, March 29, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Tuesday, March 30, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Tuesday, March 30, 2021",
                crTime: "11:00am - 12:00pm"
            },
            {
                crDate: "Wednesday, March 31, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, April 1, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, April 1, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, April 1, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Friday, April 2, 2021",
                crTime: "2:00pm - 3:00pm"
            },
            {
                crDate: "Saturday, April 3, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Sunday, April 4, 2021",
                crTime: "12:00pm - 2:00pm"
            },
            {
                crDate: "Monday, April 5, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Tuesday, April 6, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Tuesday, April 6, 2021",
                crTime: "11:00am - 12:00pm"
            },
            {
                crDate: "Wednesday, April 7, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, April 8, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, April 8, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Thursday, April 8, 2021",
                crTime: "8:00am - 10:00am"
            },
            {
                crDate: "Friday, April 9, 2021",
                crTime: "2:00pm - 3:00pm"
            },
            {
                crDate: "Saturday, April 10, 2021",
                crTime: "8:00am - 10:00am"
            }
        ];

        return dateTimeData;
    }

    /* 
        this function receives json file, and a div ID
        It loops through the data and output the values to the div
        to call this func: json_Loop(jDATAName, divIDName, fullDateName);
        specify is a rule for if crDate includes the str input
    */
    function json_Loop(jDATA, divID, specify) {
        var str = '';
        $.each(jDATA, function (key, value) {
            if (value.crDate.includes(specify)) {
                str += '<div class="col-md-3">';
                str += '<div class="col-md-12 card-on calendarForm">';
                str += '<h5 class="tblDate">' + value.crDate + '</h5>';
                str += '<h6 class="tblTime">' + value.crTime + '</h6>';
                str += '<button class="btn btn-primary btn-block" data-toggle = "modal" data-target = "#calModal">Book</button>';
                str += '</div>';
                str += '</div>';
            }
        });

        $(divID).html(str);
    }


    /* 
        loops through json for daily table
    */
    function json_Loop_daily(jDATA, divIDToday, divID, today) {
        var str1 = '', str2 = '';
        var counter = 0;
        $.each(jDATA, function (key, value) {
            if (value.crDate === today) {
                str1 += '<div class="col-md-3">';
                str1 += '<div class="col-md-12 card-on calendarForm">';
                str1 += '<h5 class="tblDate">' + value.crDate + '</h5>';
                str1 += '<h6 class="tblTime">' + value.crTime + '</h6>';
                str1 += '<button class="btn btn-primary btn-block" data-toggle = "modal" data-target = "#calModal">Book</button>';
                str1 += '</div>';
                str1 += '</div>';

                counter++;
            } else {
                // generating views from json
                str2 += '<div class="col-md-3">';
                str2 += '<div class="col-md-12 card-on calendarForm">';
                str2 += '<h5 class="tblDate">' + value.crDate + '</h5>';
                str2 += '<h6 class="tblTime">' + value.crTime + '</h6>';
                str2 += '<button class="btn btn-primary btn-block" data-toggle = "modal" data-target = "#calModal">Book</button>';
                str2 += '</div>';
                str2 += '</div>';
            }

        });

        if (counter == 0) {
            // set today to unavailable
            str1 = '<div class="col-md-3">';
            str1 += '<div class="col-md-12 card-off calendarForm">';
            str1 += '<h5>unavailable</h5>';
            str1 += '<button class="btn btn-secondary btn-block" disabled data-toggle = "modal" data-target = "#calModal">Book</button>';
            str1 += '</div>';
            str1 += '</div>';
        }

        // adding data to today div
        $(divIDToday).html(str1);

        // adding data to div
        $(divID).html(str2);
    }

    /* 
        loops through json for weekly table
    */
    function json_Loop_weekly(jDATA, divID, specify, counter) {
        var str = '';
        $.each(jDATA, function (key, value) {
            if (value.crDate.includes(specify)) {
                str += '<div class="col-md-3">';
                str += '<div class="col-md-12 card-on calendarForm">';
                str += '<h5 class="tblDate">' + value.crDate + '</h5>';
                str += '<h6 class="tblTime">' + value.crTime + '</h6>';
                str += '<button class="btn btn-primary btn-block" data-toggle = "modal" data-target = "#calModal">Book</button>';
                str += '</div>';
                str += '</div>';

                // counter
                counter++;
            }
        });

        if (counter == 0) {
            str = '<div class="col-md-3">';
            str += '<div class="col-md-12 card-off calendarForm">';
            str += '<h5>Unavailable</h5>';
            str += '<button class="btn btn-secondary btn-block" disabled data-toggle = "modal" data-target = "#calModal">Book</button>';
            str += '</div>';
            str += '</div>';
        }

        $(divID).html(str);
    }

    /* 
        this function makes ajax call to server: POST
        it receives two arguments: the url and the data
        then it sends data to server
        to call this func: ajax_call(url, data);
    */

    function ajax_call(reqDate, reqTime) {
        // Popup Screen: on submit click, send booking request
        $('#sendBookingRequest').click(function (e) {
            // fetch customer data from the form
            var cusName = $("#cusName").val();
            var cusPhone = $("#cusPhone").val();
            var cusEmail = $("#cusEmail").val();

            // url
            var myURL = "URL goes here ...";

            // send data to database: POST
            var data = {
                name: cusName,
                phone: cusPhone,
                email: cusEmail,
                date: reqDate,
                time: reqTime
            };

            // this calls for a function that makes ajax call
            $.ajax({
                type: "POST",
                url: myURL,
                dataType: "json",
                crossDomain: "true",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data),

                success: function () {
                    // clear form and show a success message
                    alert("Thank you for your feedback");
                },
                error: function () {
                    // show an error message
                    alert("Request UnSuccessfull!!");
                }
            });

        });
    }

    /* 
        this function produces an array of date data
        date_call[0] - date - current date: Sat Mar 06 2021 06:05:55 GMT-0500 (Eastern Standard Time)
        date_call[1] - dateNum - current date num: 6
        date_call[2] - dateName - current date num: Saturday
        date_call[3] - calMonthNum - current month num: 2 (starts count from 0)
        date_call[4] - calMonthNumCorrected - adds 1 to month: 3
        date_call[5] - calMonthName - current month name: March
        date_call[6] - theYear - adds 1 to month: 2021
        date_call[7] - weekdays - weedays array 
        date_call[8] - months - months array

        it receives one arguments: the array number
        then it returns the required date value
        to call this func: var today = date_call(n);
    */
    function date_call(num) {
        var date = new Date(); //Sat Mar 06 2021 06:05:55 GMT-0500 (Eastern Standard Time)
        var dateNum = date.getDay(); // 6
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var dateName = weekdays[date.getDay()]; // Saturday 
        var calMonthNum = date.getMonth(); // 2 (starts from 0)
        var calMonthNumCorrected = date.getMonth() + 1; // 3
        var months = [
            "January", "February", "March",
            "April", "May", "June", "July", "August",
            "September", "October", "November", "December"];
        var calMonthName = months[date.getMonth()]; // March
        var theYear = date.getFullYear(); // 2021

        var dateArr = [
            date, dateNum, dateName, calMonthNum,
            calMonthNumCorrected, calMonthName, theYear,
            weekdays, months
        ]; // holds date formats

        return dateArr[num];
    }


    /*
        // MODAL Loader
        // saving data to DynamoDb: reqDate, reqTime, cusName, cusPhone, cusEmail
        // when clicked 'book', capture calendar date and time
    */
    function MODAL_Ajax_Call_Loader() {
        // MODAL Loader ... for month
        $(".calendarForm").find("button").click(function () {
            var btnParent = $(this).parent(); // parent div for button
            var reqDate = $(btnParent).find(".tblDate").text(); // tuesday ...
            var reqTime = $(btnParent).find(".tblTime").text(); // 6:00am 

            // update modal with date and time
            MODAL_Loader(reqDate, reqTime);

            // Popup Screen: on submit click, send booking request
            ajax_call(reqDate, reqTime);

        });
    }


    // daily.html script
    // getting data from database
    // data types: crDate: created date, and crTime: created time
    $(function () {
        var dateDivToday = $('#dateDivToday'); // todays

        var dateDiv = $('#dateDiv'); // other days

        // json of date and time
        var dateTimeData = jsonData();

        var dateName = date_call(2); // Thursday
        var dateNum = date_call(1); // 4
        var month = date_call(5); // March
        var year = date_call(6); // 2021

        var today = dateName + ", " + month + " " + dateNum + ", " + year; // Thursday, March 4, 2021

        json_Loop_daily(dateTimeData, dateDivToday, dateDiv, today);
    }); // generating hardcoded date ends !!!


    // weekly.html script
    $(function () {
        // Sunday
        var su = $('#su').text(), mo = $('#mo').text(), tu = $('#tu').text(), we = $('#we').text(), th = $('#th').text(), fr = $('#fr').text(), sa = $('#sa').text();

        // div
        var suDiv = $('#suDiv'), moDiv = $('#moDiv'), tuDiv = $('#tuDiv'), weDiv = $('#weDiv'), thDiv = $('#thDiv'), frDiv = $('#frDiv'), saDiv = $('#saDiv');

        var counter = 0;

        // json of date and time
        var dateTimeData = jsonData();

        // update div with json data
        json_Loop_weekly(dateTimeData, suDiv, su, counter);
        json_Loop_weekly(dateTimeData, moDiv, mo, counter);
        json_Loop_weekly(dateTimeData, tuDiv, tu, counter);
        json_Loop_weekly(dateTimeData, weDiv, we, counter);
        json_Loop_weekly(dateTimeData, thDiv, th, counter);
        json_Loop_weekly(dateTimeData, frDiv, fr, counter);
        json_Loop_weekly(dateTimeData, saDiv, sa, counter);

    });

    // monthly.html script
    $(function () {
        // json of date and time
        var dateTimeData = jsonData();

        $("#calendarForm").find("td").click(function () {
            var reqDate = $(this).text(); // this refers to the td cell

            var newDay = date_call(0); // current date full format

            newDay.setDate(reqDate); // clicked sets the date, changes day 1-31

            var weekdays = date_call(7); // weekdays array
            var newDateName = weekdays[newDay.getDay()]; // gets name of date selected from table
            var calMonthName = date_call(5); // March
            var theYear = date_call(6); // 2021
            // convert it to string format // Thursday, March 4, 2021
            var fullDateName = newDateName + ', ' + calMonthName + ' ' + reqDate + ', ' + theYear;

            // update div with json data
            json_Loop(dateTimeData, '#monthDiv', fullDateName);

            // MODAL and ajax call
            MODAL_Ajax_Call_Loader();

        });
    });


    // MODAL Loader
    // saving data to DynamoDb: reqDate, reqTime, cusName, cusPhone, cusEmail
    // when clicked 'book', capture calendar date and time
    $(function () {
        // MODAL and ajax call
        MODAL_Ajax_Call_Loader();
    }); // saving data to db ends !!


}); // docu.ready ends !!








