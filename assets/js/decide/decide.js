// on click, fetch requests
$('#fetchRequests').click(function(e){
    e.preventDefault();
    
   	// get data from hourCalendar and display on modal
   	$.get("../../php/decide/getDecide.php", function(data, status){
        var obj = jQuery.parseJSON( data );
		var str = '<tr><td>#</td><td>cusName</td><td>cusPhone</td><td>cusEmail</td><td>reqDate</td><td>reqTime</td>';
		str += '<td><button class="btn btn-success btn-block" id="accept">Accept</button><br>';
		str += '<button class="btn btn-danger btn-block" id="reject">Reject</button></td></tr>';
		
		$.each(obj, function(key, value) {
			str += '<tr><td>' + value.id + '</td>'; 
			str += '<td>' + value.cusName + '</td>';
			str += '<td>' + value.cusPhone + '</td>';
			str += '<td>' + value.cusEmail + '</td>';
			str += '<td>' + value.reqDate + '</td>';
			str += '<td>' + value.reqTime + '</td>';
			str += '<td><button class="btn btn-success btn-block" id="accept">Accept</button><br>';
			str += '<button class="btn btn-danger btn-block" id="reject">Reject</button></td></tr>';
        });
        
        alert('passed!' + str);	       
		// add data to tbody
   		$('#decisionTable').html(str);
   					        
    }); // ... get method ends
});

// EVENT: on page load calls createBookings method
/* 
document.addEventListener('DOMContentLoaded', function(){
	// load data
	$.ajax({
			  method: "GET",
			  url:    "../assets/php/fetchNewRequests.php"
			 }).done(function( data ) {
				var result = $.parseJSON(data);
				var string = '<table class="table"><tr><th>#</th><th>Name</th>'
					+ '<th>Phone</th><th>Email</th>'
					+ '<th>Requested Date</th><th>Requested Hour</th></tr>';
				
			  $.each(result, function(ket, value){
				  string += "<tr><td>" + value['id'] 
					  + "</td><td>" + value['cusName'] 
					  + "</td><td>" + value['cusPhone'] 
					  + "</td><td>" + value['cusEmail'] 
					  + "</td><td>" + value['reqDate'] 
					  + "</td><td>" + value['reqHour'] 
					  + "</td><td></td></tr>";
			  });
				string += "</table>";
				  
				$('#requestedList').html(string);
	 });
});
*/



