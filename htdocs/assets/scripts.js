jQuery(document).ready(function($){
    let invalid = ('')
    let name = prompt('what is your name?','');
    let age = prompt('how old are you?','');
    let location = prompt('where do you live?','');
    alert(`alright your name is ${name} you are ${age} and live in ${location}`);
    let social = prompt('what is your social?','');
    alert(`joking we don't want that.${invalid}`);
    alert('we reccomend going to java script page and clicking the link')
    let body =  {
        name: name,
        age: age,
        location: location,
    };
    function populate(){
        $('.users input[type="text"]#name').val(body.name)
        $('.users input[type="numbers"]#age').val(body.age)
        $('.users input[type="text"]#location').val(body.location)
       
    }

    $('#clickme').on('click',function(e){
    populate()});
            
        $("#enable").on("click",function(e){
            setTimeout(function() {
            $('#clickme').removeAttr('disabled')

         }, 3000);
        });

buttons =  {  
                   
            type:"button", name:"john", id:"something" }

            
    
            for(x=0;x<5;x++ ){
            counter = x+1;
            

                $('.users').append("<input type='"+buttons.type+"' name='john' value='"+counter+"' id='"+buttons.id+counter+"'/>")
            
            };
                
           
        });
    

            
                
            

       
    
   

   
    
    

