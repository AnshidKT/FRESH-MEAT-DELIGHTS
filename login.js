$('.order').click(function(e) {
    let button = $(this);

    if(!button.hasClass('animate')) {
        button.addClass('animate');
        setTimeout(() => {
            button.removeClass('animate');
        }, 10000);
    }

});






function btonclick(event){
    var inputbox=document.getElementById("input").value


if (inputbox.length <10){
    document.getElementById("error-id").style.display="inline"
}
else {
    document.getElementById("error-id").style.display="none"
}
}