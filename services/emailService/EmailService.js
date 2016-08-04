(function () {
    "use strict";

    function EmailService($resource) {
        var email = {};
        email.resource = $resource("https://fanwuf5r0h.execute-api.us-east-1.amazonaws.com/prod/catchAndSendEmails");
        email.regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        email.message = {};
        email.message.class = "";
        email.message.html = "";
        email.message.icon = "";
        email.error = {};
        /* A string that represents the message shown if the email fails validity checks */
        email.error.email = "Your email appears to be in the wrong format. It should look like 'user@domain.com'.";
        /* A string that represents the message shown if the name fails validity checks */
        email.error.contact = "You must include a name for when we reach out to you.";
        /* A string that represents the message shown if the message fails validity checks */
        email.error.message = "You must include a message so that we know what you are interested in.";
        /* A string that represents the message shown if the email fails to send due to an error from another server/service outside of our site */
        email.error.server = "Something went wrong. Please try again in a few minutes.";
        email.error.class = "text-danger";
        email.error.icon = "fa fa-exclamation-circle";
        email.success = {};
        email.success.html = "Email has successfully sent!";
        email.success.class = "text-success";
        email.success.icon = "fa fa-check-circle";
        email.invalid = {};
        email.invalid.email = false;
        email.invalid.contact = false;
        email.invalid.message = false;

        email.supportFunctions = {};
        email.supportFunctions.isEmail = function () {
            return email.regex.test(email.form.email);
        };
        email.supportFunctions.resetForm = function () {
            email.form = {};
            email.form.email = "";
            email.form.contact = "";
            email.form.message = "";
        };
        email.supportFunctions.formValidator = function () {
            var invalidItem = null;

            if(email.form.message === "") {
                invalidItem = "message";
                email.supportFunctions.toggleInvalid("message", true);
            } else {
                email.supportFunctions.toggleInvalid("message", false);
            }

            if(email.form.contact === "") {
                invalidItem = "contact";
                email.supportFunctions.toggleInvalid("contact", true);
            } else {
                email.supportFunctions.toggleInvalid("contact", false);
            }

            if(email.form.email === "" || !email.supportFunctions.isEmail(email.form.email)) {
                invalidItem = "email";
                email.supportFunctions.toggleInvalid("email", true);
            } else {
                email.supportFunctions.toggleInvalid("email", false);
            }

            if (invalidItem) {
                email.supportFunctions.presentError(invalidItem);
                return false;
            } else {
                return true;
            }
        };
        email.supportFunctions.toggleInvalid = function (type, state) {
            email.invalid[type] = state;
        };
        email.supportFunctions.presentError = function (type) {
            email.message.class = email.error.class;
            email.message.html = email.error[type];
            email.message.icon = email.error.icon;
        };
        email.supportFunctions.sendSuccess = function (results) {
            email.message.class = email.success.class;
            email.message.html = email.success.html;
            email.message.icon = email.success.icon;
            email.supportFunctions.resetForm();
            console.log("success status", results)
        };
        email.supportFunctions.sendError = function (results) {
            email.supportFunctions.presentError("server");
            console.log("error status", results);
        };
        email.sendEmail = function () {
            console.log("validator", email.supportFunctions.formValidator());
            if(email.supportFunctions.formValidator()) {
                //actually send the email to our AWS Lambda Function.
                email.resource.save(email.form, email.supportFunctions.sendSuccess, email.supportFunctions.sendError);
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