// on click, fetch requests
$('#fetchRequests').click(function(e){
    e.preventDefault();
    
   	// get data from hourCalendar and display on modal
   	$.get("fetchRequests.php", function(data, status){
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

// $(document).ready(function(){
//     $('#accept').click(function(e){
//         alert('Accepted!');
//         var row = $(this).parents().parents().text();
//         // .parent().previousSibling();
//         // alert(row);
//     });
// });





