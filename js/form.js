function validatetextForm() {
var a = document.forms["waitlist"]["contactname"].value;
var b = document.forms["waitlist"]["email"].value;
var c = document.forms["waitlist"]["contactnumber"].value;
var d = document.forms["waitlist"]["dateofbirth"].value;
if (a == "" || b == "" || c == "" || d == "") {
alert("Fields cannot be empty.");
return false;}
else {
alert("You will be receiving a confirmation email for our waitlist.")
return true;
}  
}
function readText() {
    TestVar =form.inputbox.value;
    alert ("You have entered the following information: " + TestVar);
}
/*Date is in MM/DD/YYY
function checkdate()
{
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  // Match the date format through regular expression
  if(inputText.value.match(dateformat))
  {
  document.apptsignup.text1.focus();
  //Test which seperator is used '/' or '-'
  var opera1 = inputText.value.split('/');
  var opera2 = inputText.value.split('-');
  lopera1 = opera1.length;
  lopera2 = opera2.length;
  // Extract the string into month, date and year
  if (lopera1>1)
  {
  var pdate = inputText.value.split('/');
  }
  else if (lopera2>1)
  {
  var pdate = inputText.value.split('-');
  }
  var mm = parseInt(pdate[0]);
  var dd  = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
  // Create list of days of a month [assume there is no leap year by default]
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (dd==1 || dd>2)
  {
  if (mm>ListofDays[dd-1])
  {
  alert('Invalid date format!');
  return false;
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  alert('Invalid date format!');
  return false;
  }
  if ((lyear==true) && (dd>29))
  {
  alert('Invalid date format!');
  return false;
  }
  }
  }
  else
  {
  alert("Invalid date format!");
  document.forms["apptsignup"]["dateofbirth"].value;
  return false;
  }
  }
 /*email validation is inbuilt function*/
