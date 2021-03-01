// on click, create booking hours on date for calendar 
$("#saveRecord").on('click', function(e){
    e.preventDefault();
	// get values from form: date and time
	var crDate    = $("#crDate").val();       
    var crTime    = $("#crTime").val();
    var available = "available";
    
    $.post("./assets/php/create/postCreate.php",
    {
        crDate: crDate,
        crTime: crTime,
        available: available
    });              
    alert("Data saved Successfully!");
    
    var str = '<h3>Date: <span class="text-primary">' + crDate + '</span> <br>Time: <span class="text-primary">' + crTime + '</span></h3>';
    $('#createdHours').html(str);
});



$('#fetchHours').click(function(e){
    e.preventDefault();
    // get data from hourCalendar and display on modal
   	$.get("./assets/php/create/getCreate.php", function(data, status){
        var obj = jQuery.parseJSON( data );
		var str = '<tr><th>#</th><th>Date</th><th>Time</th><th>Availability</th></tr>'; 
							
		$.each(obj, function(key,value) {
		    str += '<tr><td>' + value.id + '</td>';
    		str += '<td>' + value.crDate + '</td>';
    		str += '<td>' + value.crTime + '</td>';
    		str += '<td>' + value.available + '</td></tr>';
		    /*
		    if(value.date.trim() === "null"){
		        str += '<tr><td>Row escaped!</td></tr>';
		    }
		    else {
    			str += '<tr><td>' + value.id + '</td>';
    			str += '<td>' + value.crDate + '</td>';
    			str += '<td>' + value.crTime + '</td>';
    			str += '<td>' + value.available + '</td></tr>';
		    }
		  */
        });
		
		str += '';	      
		
		// add data to modal tbody
   		$('#createdHoursDb').html(str);
   					        
    }); // ... get method ends
}); 




