// user interface
class BookingUI {
    static createBookings() {
        // get already created bookings from storage.
        // in this case, local storage
        const bookings = BookingLocalStorage.getBookingsFromStorage();

        // Api call data currently saved
        // const bookings = ApiCall.getBookingsFromStorage();

        // loop through the item metadata and pass to display
        bookings.forEach( 
            (booking) => BookingUI.displayBookings(booking) 
        );
    }
    
    // displays booking metadata on table
    static displayBookings(booking) {
        // create a table row for each data passed
        const row = document.createElement('tr');

        // add table data to the row
        // it should be suitable to be in a calendar form!!
        row.innerHTML = (`
            <td>${booking.bookDate}</td>
            <td>${booking.bookTime}</td>
            <td><a class="btn btn-danger btn-sm deleteBook"> X </a></td>
        `);

        // add row to table
        document.querySelector('#bookList').appendChild(row);
    }
    
    // this method clears the input fields after submission
    static clearField() {
        document.querySelector('#bookDate').value = '';
        document.querySelector('#bookTime').value = '';
    }

    // this method deletes created bookings
    static deleteBook(cell) {
        if(cell.classList.contains('deleteBook')) {
            cell.parentElement.parentElement.remove();
            BookingUI.displayAlerts('Book Removed', 'danger');
        }
    }
    
    // display notifications and warnings
    static displayAlerts(message, classField) {
        // create a div for messages
        const div = document.createElement('div');

        // add a bootstrap class name to the div
        div.className = `alert alert-${classField}`;

        // add message to the div
        div.appendChild( document.createTextNode(message) );

        // select the location you want this div to appear, container
        const container = document.querySelector('.container');

        // select the form
        const hourTable = document.querySelector('#hourTable');

        // display the div inside the container before the form
        container.insertBefore(div, hourTable);

        // make the message vanish in 3 seconds
        setTimeout( () => document.querySelector('.alert').remove(), 3000);
    }
}
    
// EVENT: on page load calls createBookings method
document.addEventListener('DOMContentLoaded', BookingUI.createBookings);









