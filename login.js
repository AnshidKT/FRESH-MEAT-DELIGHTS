$('.order').click(function(e) {
    let button = $(this);

    if(!button.hasClass('animate')) {
        button.addClass('animate');
        setTimeout(() => {
            button.removeClass('animate');
        }, 10000);
    }

});






function btonclick(){
    var input=document.getElementById("input").value


    if (input.length<10){
        document.getElementById("error-id").style.display="inline"
    }
    else {
        document.getElementById("error-id").style.display="none"
    }
}