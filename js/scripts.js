$('#emailStatus').hide();

function sendMail() {
     $.ajax({
         type: "POST",
         url: "https://mandrillapp.com/api/1.0/messages/send.json",
         data: {
             key: "_UhvviMfxE6oL0g8St7k9Q",
             message: {
                 from_email: $('#email').val(),
                 to: [{
                     email: "info@edtechassociates.com",
                     type: "to"
                 }],
                 autotext: "true",
                 subject: $('#name').val()+" Has Submitted The Form",
                 html: $('#message').val()
             }
         }
     })
     .done(function () {
         $('#emailStatus').html("Email has successfully sent!");
         $('#emailForm').trigger("reset");
     })
     .fail(function() {
         $('#emailStatus').html("Something went wrong.");

     })
     .always(function() {
         $('#emailStatus').show();
     })


 }
