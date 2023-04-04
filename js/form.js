window.addEventListener('DOMContentLoaded', function(){
  var submitted = false;
  var currentURL = window.location.href;
  var input_text_required = document.getElementsByClassName("input_text_required");
  var contact_form_submit = document.getElementById("contact_form_submit");
  contact_form_submit.disabled = true;
  for( var input of input_text_required ) {
    input.addEventListener('input', function() {
      var num = 0;
      var check_num = 0;
      for ( var input of input_text_required) {
        if (input.value != ""){
          num ++;
          if (num == input_text_required.length) {
            console.log('perfect!');
            contact_form_submit.disabled = false;
          }else{
            console.log('false');
            contact_form_submit.disabled = true;
          }
        }
      }
    })
  }
  contact_form_submit.addEventListener('click', function() {
    console.log(aaa);
    contact_form_submit.disabled = true;
  });
});
