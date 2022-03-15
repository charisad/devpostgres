$(function() {
    $("#login").dxTextBox({
        name: "Login",
        placeholder: "username"
    }).dxValidator({
        validationRules: [
            { type: "required" }
        ]
    });
 
    $("#password").dxTextBox({
        name: "Password",
        mode: "password",
        placeholder: "password"
    }).dxValidator({
        validationRules: [
            { type: "required" }
        ]
    });
 
    $("#validateAndSubmit").dxButton({
        text: "Submit",
        type: "success",
        useSubmitBehavior: true
    });
});