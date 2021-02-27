
        // user interface
        class BookingUI {
            static createHardcodedData(){
                // hardcoded booking requests data
                const requestBookings = [
                    {
                        custName: 'Bini Alex',
                        custEmail: 'bini@gmail.com',
                        custPhone: '7030000101',
                        reqDate: '2021/01/30',
                        reqTime: '9:00am - 10:00am'
                    },
                    {
                        custName: 'Tsi Alex',
                        custEmail: 'tsi@gmail.com',
                        custPhone: '5715550101',
                        reqDate: '2021/01/31',
                        reqTime: '10:00am - 11:00am'
                    },
                    {
                        custName: 'Betty Alex',
                        custEmail: 'betty@gmail.com',
                        custPhone: '6462120101',
                        reqDate: '2021/01/29',
                        reqTime: '11:00am - 12:00pm'
                    }
                ];

                // get the bookings meta data and pass them to displayBooks()
                requestBookings.forEach( (request) => BookingUI.displayBookingRequests(request) );
                
                // hardcoded decisions data
                const bookingDecisions = [
                    {
                        custName: 'Bini Alex',
                        custEmail: 'bini@gmail.com',
                        custPhone: '7030000101',
                        reqDate: '2021/01/30',
                        reqTime: '9:00am - 10:00am',
                        decision: 'Accepted', 
                        decisionClass: 'success'
                    },
                    {
                        custName: 'Tsi Alex',
                        custEmail: 'tsi@gmail.com',
                        custPhone: '5715550101',
                        reqDate: '2021/01/31',
                        reqTime: '10:00am - 11:00am',
                        decision: 'Rejected',
                        decisionClass: 'danger'
                    },
                    {
                        custName: 'Betty Alex',
                        custEmail: 'betty@gmail.com',
                        custPhone: '6462120101',
                        reqDate: '2021/01/29',
                        reqTime: '11:00am - 12:00pm',
                        decision: 'Accepted',
                        decisionClass: 'success'
                    }
                ];

                // get the bookings meta data and pass them to displayBooks()
                bookingDecisions.forEach( (decision) => BookingUI.displayDecisions(decision) );
            }
        
            //
        static displayBookingRequests(request) {
                // get the tbody from table
                const list = document.querySelector('#requestedList');

                // create a table row
                const row = document.createElement('tr');

                // add book data to table row
                row.innerHTML = (`
                    <td>${request.custName}</td>
                    <td>${request.custEmail}</td>
                    <td>${request.custPhone}</td>
                    <td>${request.reqDate}</td>
                    <td>${request.reqTime}</td>
                    <td>
                        <a class="btn btn-success btn-sm acceptRequest">
                        Accept
                        </a><br><br>
                        <a class="btn btn-danger btn-sm deleteRequest">
                        Reject
                        </a>
                    </td>
                `);

                // add row to table
                list.appendChild(row);
        }

            //
        static displayDecisions(decision) {
                // get the tbody from table
                const list = document.querySelector('#decidedList');

                // create a table row
                const row = document.createElement('tr');

                // add book data to table row
                row.innerHTML = (`
                    <td>${decision.custName}</td>
                    <td>${decision.custEmail}</td>
                    <td>${decision.custPhone}</td>
                    <td>${decision.reqDate}</td>
                    <td>${decision.reqTime}</td>
                    <td class="">${decision.decision}</td>
                `);

                if(decision.decisionClass === 'success') {
                    row.classList.add('table-success');
                } else if(decision.decisionClass === 'danger') {
                    row.classList.add('table-danger');
                }
                // add row to table
                list.appendChild(row);
        }
        }

        // EVENT: listen for all page load and call displayBooks method
        document.addEventListener('DOMContentLoaded', BookingUI.createHardcodedData);




