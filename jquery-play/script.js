// I'm  some Javascript!

// $('body').css('background','blue')
// $('h1').click(
//     function(){
//         $('body').toggleClass('purple')
//     }
// )

// let rainbow = 0

// let colorVal = `hsl(rainbow,100,100)`
// $('.button').click(
//     function(){
//         rainbow + 30
//         $('body').css('background', colorVal)
//     }
// )

$('.one').click(
    function(){
        $('.kitties').attr('src','http://placekitten.com/400/401')
    }
)
$('.two').click(
    function(){
        $('.kitties').attr('src','http://placekitten.com/400/402')
    }
)
$('.three').click(
    function(){
        $('.kitties').attr('src','http://placekitten.com/405/401')
    }
)
