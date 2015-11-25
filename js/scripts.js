function sendMail() {
     $.ajax({
         type: "POST",
         url: "https://mandrillapp.com/api/1.0/messages/send.json",
         data: {
             key: "8RkJemtcZFbYxmVWtmhfYw",
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
 }
