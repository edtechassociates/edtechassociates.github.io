(function () {
    "use strict";

    function EmailService($resource) {
        var email = {};
        email.endpoint = $resource("https://fanwuf5r0h.execute-api.us-east-1.amazonaws.com/prod/catchAndSendEmails");
        email.form = {};
        email.regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        email.message = {};
        email.message.class = "";
        email.message.html = "";
        email.message.icon = "";
        email.error = {};
        email.error.email = "Your email appears to be in the wrong format. It should look like 'user@domain.com'.";
        email.error.contact = "You must include a name for when we reach out to you.";
        email.error.message = "You must include a message so that we know what you are interested in.";
        email.error.server = "Something went wrong. Please try again in a few minutes.";
        email.error.class = "text-danger";
        email.error.icon = "fa fa-exclamation-circle";
        email.success = {};
        email.success.html = "Email has successfully sent!";
        email.success.class = "text-success";
        email.success.icon = "fa fa-check-circle";
        email.invalid = {};
        email.invalid.email = false;
        email.invalid.name = false;
        email.invalid.message = false;

        email.supportFunctions = {};
        email.supportFunctions.isEmail = function () {
            return email.regex.test(email.form.email);
        };
        email.supportFunctions.resetForm = function () {
            email.form.email = "";
            email.form.contact = "";
            email.form.message = "";
        };
        email.supportFunctions.formValidator = function () {
            var valid = true;
            var invalidItem = "";

            if(email.form.message === "") {
                valid = false;
                invalidItem = "message";
                email.supportFunctions.toggleInvalid("message", true);
            } else {
                email.supportFunctions.toggleInvalid("message", false);
            }

            if(email.form.contact === "") {
                valid = false;
                invalidItem = "contact";
                email.supportFunctions.toggleInvalid("contact", true);
            } else {
                email.supportFunctions.toggleInvalid("contact", false);
            }

            if(email.form.email === "" || !email.supportFunctions.isEmail(email.form.email)) {
                valid = false;
                invalidItem = "email";
                email.supportFunctions.toggleInvalid("email", true);
            } else {
                email.supportFunctions.toggleInvalid("email", false);
            }
            if (invalid) {
                email.supportFunctions.presentError(invalidItem);
            }

            return valid;
        };
        email.supportFunctions.toggleInvalid = function (type, state) {
            email.invalid[type] = state;
        };
        email.supportFunctions.presentError = function (type) {
            email.message = {
                class: email.error.class,
                html: email.error[type],
                icon: email.error.icon
            }
        };
        email.supportFunctions.sendSuccess = function () {
            email.message = {
                class: email.success.class,
                html: email.success.html,
                icon: email.success.icon
            };
            email.supportFunctions.resetForm();
        };
        email.supportFunctions.sendError = function () {
            email.supportFunctions.presentError("server");
            email.supportFunctions.resetForm();
        };
        email.supportFunctions.sendEmail = function () {
            if(email.supportFunctions.formValidator()) {
                //actually send the email to our AWS Lambda Function.
                email.endpoint.post(email.form, email.supportFunctions.sendSuccess, email.supportFunctions.sendError);
                $.ajax({
                    "type": "POST",
                    "url": email.endpoint,
                    "dataType": "json",
                    "contentType": "application/json",
                    "data": JSON.stringify(email.form)
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
        };
        email.supportFunctions.resetForm();
        return email;
    }
    EmailService.$inject = ["$resource"];

    angular
        .module("EdTech.EmailService", ["ngResource"])
        .service("EmailService", EmailService);
}());