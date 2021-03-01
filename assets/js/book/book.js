// on click, capture calendar day
$('#calendarForm').find('td').click(function(){
   						
    // add focus on new selection
 $(this).addClass('focus');
 $(this).css('background', '#333');
    $(this).css('color','#fff');

    // Remove focus from selection
    $('td').removeClass('focus');
    $(this).css('background', '#fff');
    $(this).css('color','#222');

 
    // save the date text inside cell
    var reqDate = '';
    reqDate = $(this).text();
                        
    // get data from hourCalendar and display on modal
    $.get("../../php/book/getBook.php", function(data, status){
     var obj = jQuery.parseJSON( data );
     var str = '';
                         
     $.each(obj, function(key,value) {
         if(value.id == reqDate){
             str += '<td>' + value.crTime + '</td>';
         } else if(reqDate >= 11){
             str = 'unavailable';
         }
     });
                         
     // add data to modal tbody
        $('#hoursDiv').html(str);
                            
 }); // ... get method ends
                        
    // trigger modal pop up
 $(this).attr('data-toggle','modal');
    $(this).attr('data-target','#calModal');
                        
                            
    // put selected date on modal header
    $('#selectedDate').html(reqDate); 
                        
    
    // SAVING HOUR SELECTION
 // if modal td selected, post data
 $('#hoursDiv').on('click', function(e){
     // e.preventDefault();
     
     var reqHour = $("#hoursDiv").text();
     
     // dismiss modal after selection
     $(this).attr('data-dismiss','modal');
                         
     // fetch data from form
     var cusName = $("#cusName").val();
     var cusPhone = $("#cusPhone").val();
     var cusEmail = $("#cusEmail").val();
                         
     // display selected time to customer
     var s = 'Requested Date: <span class="text-success">' + reqDate + '</span><br>'
         + 'Reqested Hour: <span class="text-success">' + reqHour + '</span>';
     $('#shortData').html('<h3>' + s + '</h3>');
     
         
     // on button click, post request to database
     $('#sendRequest').click(function(){
         // fetch data from form
         var cusName = $("#cusName").val();
         var cusPhone = $("#cusPhone").val();
         var cusEmail = $("#cusEmail").val();
         
 // 		alert("cusName: " + cusName + ", \ncusPhone: " + cusPhone 
 // 		    + ", cusEmail: " + cusEmail + ", \nreqDate: " + reqDate
 // 		    + ", reqHour: " + reqHour + ", \nBooked!!!");
         alert('Request Sent Successfully!!');
         
         $.post("../../php/book/postBook.php",
         {
             // name: "Donald Duck",
             cusName: cusName,
             cusPhone: cusPhone,
             cusEmail: cusEmail,
             reqDate: reqDate,
             reqHour: reqHour
         },
         function(data, status){
             // alert("Data: " + data + "\nStatus: " + status);
         });
     });
     
 });
 
 
});






