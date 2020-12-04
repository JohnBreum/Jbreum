jQuery(document).ready(function($){
  
    
    
    let allowed = [
        13,
        106,
        107,
        109,
        111,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        48,
        189,
        187,
        191,
        27,
        8,
        96,
        110,
        16,
        17,
        18,
        106,
        110,
        88,
        8,
        67,
        27,
    ];
    clear = [ 
        27,8,67
    ];
    array = [
        {   //1
            parent: "grid-results",
            "class": "grid-item result",
            type: "div",
            value: "",
        },        
        {   //2
            parent: "grid-results",
            "class": "grid-item equals",
            type: "div",
            value: "=",
        },        
        {   //3
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "7",
        },
        {   //4
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "8",
        },    
        {   //5
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "9",
        },    
        {   //6
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "x",
        },        
        {   //7
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "4",
        },        
        {   //8
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "5",
        },        
        {   //9
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "6",
        }, 
        {   //10
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "/",
        },               
        {   //11
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "1",
        },        
        {   //12
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "2",
        },        
        {   //13
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "3",
        },        
        {   //14
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "-",
        },
        {   //15
            parent: "grid-buttons",
            "class": "grid-item clear",
            type: "div",
            value: "c",
        },                
        {   //16
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "0",
        },        
        {   //17
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: ".",
        },        
        {   //18
            parent: "grid-buttons",
            "class": "grid-item",
            type: "div",
            value: "+",
        },        
    ];
    for(x=0;x<array.length;x++){
        
        el = "<"+array[x].type+" />";
        // if (array[x].parent.length != 'undefined')  {
        //     append = array[x].parent;
        // }else{
        //     append = 'grid-buttons'
        // }   
           
        $(el, {
            id: 'div'+x,
            class: array[x].class,
            text: array[x].value,
        }).appendTo("."+array[x].parent);
       
        // $('.grid-container');
        // console.log([x])
    }
    
    $('.grid-item:not(.result, .equals, .clear)').on('click',function(e) {
        
        clicked = $(this).text();
        if (clicked == "x") {
            clicked = "*";
        }else {


        }

        result = $(".result").text();
        // clicked = $(this).text();

        $('.result').text(result+clicked)
    
        // console.log($(this).text())
    });
    
    $('.equals').on('click', function(e){

        chars = $('.result').text();
        result = eval(chars);
        $('.result').text(result)
        console.log(result)
        
        // for (x=0; x<chars.length; x++){
            // console.log(chars[x]);

        

    });
    $('.clear').on('click', function(e){ 
        $('.result').text('');


    });
    
    
    
    $(document).on('keyup', function(e){
        // console.log(e.keyCode)
        
        if (!allowed.includes(e.keyCode)){ return false;}
        
        button= $('.grid-item:contains("'+e.key+'")');
        
        pressed = e.key;
        
        if (e.keyCode == 8)  {
            // text = $('.result').text();
            // result = text.slice(0, -1);
            $('.result').text($('.result').text().slice(0, -1))
            }
        
        $('.grid-buttons div, .equals .clear').each(function(key,value){
            
            if (e.keyCode == 13){
                pressed = "="
            }
            if (e.keyCode == 106){
                pressed = 'x'
            };
            if (e.keyCode == 67 || e.keyCode == 27){
                pressed = 'c'
                
            }
            
            
            if (pressed == $(this).text()){
                $(this).click()
                return false;
            }else{
                // console.log('nippeee')
            }
            
            
            
        })
    });

});