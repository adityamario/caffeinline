$(document).ready(function(){
$('.next').on('click', function(){
console.log('done');
var curr = $('.show');
var nxt = curr.next();

if(nxt.length){
    curr.removeClass('show').css('z-index', -10);
    nxt.addClass('show').css('z-index', 10);
}
});

$('.prev').on('click', function(){
    console.log('done');
    var curr = $('.show');
    var prv = curr.prev();
    
    if(prv.length){
        curr.removeClass('show').css('z-index', -10);
        prv.addClass('show').css('z-index', 10);
    }
    });
});