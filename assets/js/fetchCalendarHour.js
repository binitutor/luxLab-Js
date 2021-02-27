$(function(){
        $("#getHours").on('click', function(){
            $.ajax({
              method: "GET",
              url:    "../php/fetchCalendarHour.php"
             }).done(function( data ) {
                var result = $.parseJSON(data);
                var string = '<table width="100%"><tr><th>#</th><th>Name</th><th>Phone</th><th>Email</th></tr>';
                
              $.each(result, function(ket, value){
                  string += "<tr><td>" + value['id'] + "</td><td>" + 
                    value['first_name'] + "</td><td>" + value['last_name'] + 
                    "</td><td>" + value['email'] + "</td></tr>";
              });
                string += "</table>";
                  
                $('#records').html(string);
            });
        });
     });