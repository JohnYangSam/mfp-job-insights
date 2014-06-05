function validateNamePresence() {
  var $nameField = $('#name-field');
  var val = $nameField.val();
  // Ensure that there is a valid input
  return val !== '';
}

function raiseError() {
  $('#name-presence-notification').css({display:'block'});
  $('#landing-image').css({display:'none'});
  $('#name-field').css({'border-color':'#D9534F'});
  complete.log("Incomplete name");
}

function hideError() {
  $('#name-presence-notification').css({display:'none'});
  $('#landing-image').css({display:'block'});
  $('#name-field').css({'border-color':'#ccc'});
  console.log("Complete name");
}

// validate name presence on the onward button click
// Display/hide an error message appropriately
$('#onward-button').click(function(e) {
  // Prevent any standard linking
  e.preventDefault();

  // Stop page move and show error notification
  if (!validateNamePresence()) {
    raiseError();

  // Hide errors and save name
  } else {
    hideError();
    var name = $('#name-field').val();
    window.location.href = '/questions/0/?name=' + encodeURIComponent(name);
  }

});