function leapYear(year) {
  if (year % 100 === 0) {
    return false;
  } 
  else if (year % 4 === 0) {
    return true;
  } 
  else {
    return false;
  }
}

$(document).ready(function() {
    $("form#leap-year").submit(function(event) {
      event.preventDefault();
      const year = parseInt($("input#year").val());
      const result = leapYear(year);
      $("#result").text(result);
    });
  });