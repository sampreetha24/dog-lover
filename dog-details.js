

    //creating dropdown option
    $.ajax(
        {
         url:'https://dog.ceo/api/breeds/list/all',
         method:'GET',
         success:function(data){
            let allBreed=data.message;
            for(var breed in allBreed)
            {
                var s= '<option value="'+breed+'">'+ breed+'</option>'
                 $('#input-field').append(s);
            }  
         }
        }
    );

    $('#get-btn').click(function(){
    
       var name= $('#input-field').val();
       var urlName= "https://dog.ceo/api/breed/"+name+"/images/random";
        $.get(urlName,function(data){
           var dogImageUrl=data.message;
           $('#dog-image').attr('src',dogImageUrl);
        });

    });

    $('#next-btn').click(function(){
        var name= $('#input-field').val();
        var urlName= "https://dog.ceo/api/breed/"+name+"/images/random";
         $.get(urlName,function(data){
            var dogImageUrl=data.message;
            $('#dog-image').attr('src',dogImageUrl);
         });
    });

    
