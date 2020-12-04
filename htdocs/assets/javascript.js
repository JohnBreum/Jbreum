jQuery(document).ready(function($) {        
    $('#mean-gridz-input').on('change', function(e) {        
        percent = 100 / $(this).val() - 3;       
         // Show Second options
        $('.mean-gridz-container .mean-gridz-item').css("width", `${percent}%`);
        $('.displayKeyInput').slideDown(500);    
    });

    $('.displayKeyInput').on('click', '#button_v_2', function(e) {
        type = $('#select_option option:selected').val();         
        value = $('#input_value').val();
        if (value =='') return false;                     
         
         switch (type) {
            case 'img': $('.mean-gridz-container').append("<div class='mean-gridz-item'><img src='"+value+"' /></div>");            
            break;
            case 'color':$('.mean-gridz-container').append("<div class='mean-gridz-item' style='background-color:"+value+"'>&nbsp;</div>");            
            break;
            case 'width':$('.mean-gridz-container').append("<div class='mean-gridz-item'><div style='width:"+value+"%;background-color:red;'>&nbsp;</div></div>");            
            break;
            case 'text':$('.mean-gridz-container').append("<div class='mean-gridz-item'>"+value+"</div>");            
            break;
            case 'progress':
                
                prog_value = 0;
                
                increment_value = +value;
                
                if (!$('.progress').length) {
                   
                    $('.mean-gridz-container').append("<div class='mean-gridz-item'><div class='progress' style='width:"+value+"%;background-color:green;'>"+value+"</div></div>");
                   
                   
                    my_int = setInterval(function(){

                        
                        prog_value += increment_value;
                        increment_value = getRandomInt(1, 20);
                        
                        if(prog_value > 100) prog_value = 100;
                             
                            
                            $('.progress').css('width', prog_value+"%").text(prog_value+"%");
                            
                            if (prog_value >= 100){
                                clearInterval(my_int);
                            }
                       
                    },5000 /( 100 / getRandomInt(50, 500)));
                }            
                console.log(Math.random())
                // width = $('.progress').text();
                
                // new_width = (+width + +value > 100) ? 100 : +width + +value;
                

                  
            break;        
        }    
    });
    grid_option_to_input_type = {        
                                text: 'text',        
                                color: 'color',        
                                width: 'number',        
                                image: 'text',        
                                progress: 'number',
        }
    $('#select_option').on('change', function(e) {                
        grid_option = $("option:selected", this).val();                
        $('#input_value').attr('type', grid_option_to_input_type[grid_option]);    
    });    
    function getRandomInt(min,max){
            min = Math.ceil(min);
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1) + min);
    }
    $('.typing').on('click', '#button_v_3',function (e){
    
        let sentence = $('#inputtext').val()
        var delay = [];
    
    
        for(let x=0;x<sentence.length;x++){
        
            let  sent = sentence[x]
            let increment_value = getRandomInt(30, 150);
            delay.push(increment_value)
            

            var sum = delay.reduce(function(a, b){
                return a + b;
            }, 0);

            setTimeout((sent) =>    {
            
                let   result = $('#textinput').val()
                let  results = $('#textinput').val(result+sent)
            
            },sum,sent)

            
        }
    })
    $('#clearbutton').on('click', function(e){
        // let sent = $('#textinput').val('')
        result = $('#textinput').val()
        var delay = [];
        for(x=result.length;x--;x=0){
            let number = getRandomInt(0,result.length)
            ressult = result[number]
            // let result2 = ressult.substr(0,result[number])
            let resssult = $(ressult).val()
            console.log(resssult)
              
            // $().val()
            // console.log(result2)
            // setTimeout((result2)=>{
                
            // },1000,result2) 
            // return false;   
        
               
                // let backup = $().()
                // console.log(backup)
                // $(backup).val() 
                

                

        
            }
    })


});