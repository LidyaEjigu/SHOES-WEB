function validate() {
  const Name = document.forms.myForm.name.value;
  const password = document.forms.myForm.password.value;
  const email = document.forms.myForm.email.value;
  const pnumber = document.forms.myForm.pnumber.value;
  const message = document.forms.myForm.message.value;
  const address = document.forms.myForm.address.value;

  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var regPhone = /^\d{10}$/;
  var regName = /\d+$/g;

  if (Name == "" || regName.test(Name)) {
    window.alert("Please enter your name.");
    Name.focus();
    return false;
  }
  if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (password == "") {
    alert("Please enter your password");
    password.focus();
    return false;
  }

  if (password.length < 6) {
    alert("Password should be atleast 6 character long");
    password.focus();
    return false;
  }
  if (pnumber == "" || regPhone.test(phone)) {
    alert("Please enter valid phone number.");
    phone.focus();
    return false;
  }
  if (address == "") {
    window.alert("Please enter your address.");
    address.focus();
    return false;
  }
  if (message == "") {
    window.alert("Please enter your message.");
    message.focus();
    return false;
  }
  if (alert("Alert For your User!")) {
  } else window.location.reload();
  {
    return confirm("Do you really want to do this?");
  }
}

function validateFile() {
  const password = document.forms.myForm.password.value;
  const email = document.forms.myForm.email.value;
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (password == "") {
    alert("Please enter your password");
    password.focus();
    return false;
  }
  if (alert("Alert For your User!")) {
  } else window.location.reload();
  return true;
}
