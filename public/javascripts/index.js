function validateNamePresence() {
  var $nameField = $('#name-field');
  var val = $nameField.val();
  console.log($nameField);
  console.log(val);

  // Ensure that there is a valid input
  return val !== '';
}

function raiseError() {
  $('#name-presence-notification').css({display:'block'});
  $('#landing-image').css({display:'none'});
  $('#name-field').css({'border-color':'#D9534F'});
}

function hideError() {
  $('#name-presence-notification').css({display:'none'});
  $('#landing-image').css({display:'block'});
  $('#name-field').css({'border-color':'#ccc'});
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
    var name = $('name-field').val();
    window.location.href = '/questions/1/?name=' + encodeURIComponent(name);
  }

});