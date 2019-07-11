jQuery(document).ready(function($) {

  $("#send").click(sendEmail);

function sendEmail() {

  var name = $("#name");
  var email = $("#email");
  var subject = $("#subject");
  var message = $("#message");

  if (isFilled(name) && isFilled(email) && isFilled(subject) && isFilled(message)){
    $.ajax({
      url: "contact.php",
      method: "POST",
      datatype: "json",
      data: {
        name: name.val(),
        email: email.val(),
        subject: subject.val(),
        message: message.val()
      }, success: function (response) {
        console.log(response);
      }
    });
  }
};

function isFilled(caller) {

  if (caller.val() == "") {

    caller.css('border', '1px solid red');
    return false;
  }
  else {

    caller.css('border', '');
    return true;
  }
};

});
