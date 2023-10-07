
$(function start(){
$('img').animate({
    opacity: 0.5, marginLeft: '90%'},2000)
    .animate({
        opacity: 1,
        marginLeft: '0%',
    },2000, start)
})

$(function start(){
    $('#teg').animate({
       'fontSize': '20px', 
    },2000).animate({
        'font-size': '10px',
    },2000, start)
})