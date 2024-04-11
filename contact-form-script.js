/*$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});*/

$("#contactForm").on("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    submitForm();
});



/*function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();*/

    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var message = $("#message").val();
        var date = $("#input_date").val();
        var hora = $("#hora").val();
        var restaurant = $("#restaurant").val();
        var person = $("#person").val();
        var card_number = $("#card_number").val();
    
        // Ajax request for form submission
        $.ajax({
            type: "POST",
            url: "php/form-process.php",
            data: "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message + "&date=" + date + "&hora=" + hora + "&restaurant=" + restaurant + "&person=" + person + "&card_number=" + card_number,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                    // Aquí puedes agregar el código para mostrar el mensaje de reserva exitosa
                    $("#reservation-success").show();
                    $("#reservation-success").html("Su reserva ha sido exitosa. ¡Esperamos verlo en " + restaurant + " a las " + hora + " del " + date + "!");
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }
    


    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });


function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}