var icon = $('#statusIcon');
var text = $('#statusText');
text.hide();
 icon.hide();

if (window.location.protocol != "https:") {
 window.location.protocol = "https";
 }

failureIconClass = "fa fa-exclamation-circle";
successIconClass = "fa fa-check-circle";
failureTextClass = "text-danger";
successTextClass = "text-success";

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}


function toggleClasses(state) {
    if (state) {
        icon.removeClass(failureIconClass);
        text.removeClass(failureTextClass);
        icon.addClass(successIconClass);
        text.addClass(successTextClass);
    }
    else {
        icon.removeClass(successIconClass);
        text.removeClass(successTextClass);
        icon.addClass(failureIconClass);
        text.addClass(failureTextClass);
    }
}

function toggleValid(item, state) {
    if(state)
        item.removeClass("invalid");
    else
        item.addClass("invalid")
}

function sendMail() {
    var email = $('#email');
    var name = $('#name');
    var message = $('#message');
    var valid = true;
    if(email.val() === "" || !isEmail(email.val())) {
        valid = false;
        toggleClasses(false);
        toggleValid(email, false);
        text.html("Your email appears to be in the wrong format. It should look like 'user@domain.com'.");
    }
    else
        toggleValid(email, true);


    if(name.val() === "") {
        valid = false;
        toggleClasses(false);
        toggleValid(name, false);
        text.html("You must include a name for when we reach out to you.");
    }
    else
        toggleValid(name, true);

    if(message.val() === "") {
        valid = false;
        toggleClasses(false);
        toggleValid(message, false);
        text.html("You must include a message so that we know what you are interested in.");
    }
    else
        toggleValid(message, true);


    if(valid) {
        $.ajax({
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                    key: "_UhvviMfxE6oL0g8St7k9Q",
                    message: {
                        from_email: email.val(),
                        to: [{
                            email: "info@edtechassociates.com",
                            type: "to"
                        }],
                        autotext: "true",
                        subject: name.val() + " Has Submitted The Form",
                        html: message.val()
                    }
                }
            })
            .done(function () {
                toggleClasses(true);
                text.html("Email has successfully sent!");
                $('#emailForm').trigger("reset");
            })
            .fail(function () {
                toggleClasses(false);
                text.html("Something went wrong. Please try again in a few minutes.");

            })
            .always(function () {
                text.show();
                icon.show();
            })
    }
}

