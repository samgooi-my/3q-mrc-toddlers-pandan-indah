// ===== ENQUIRY FORM HANDLING =====
  // Function: handleEnquirySubmit()
  // Purpose: Provide a friendly confirmation after the parent submits the enquiry form
  // Triggers: Form submit on the enquiry section
  function handleEnquirySubmit(event) {
    event.preventDefault();
    var parentName = document.getElementById('parentName').value.trim();
    var childAge = document.getElementById('childAge').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var startDate = document.getElementById('startDate').value;
    var status = document.getElementById('formStatus');
    status.textContent = 'Thank you, ' + parentName + '. We have received your enquiry for a child aged ' + childAge + ' and will contact you at ' + phone + ' about your preferred start date.';
    event.target.reset();
  }

  document.getElementById('enquiryForm').addEventListener('submit', handleEnquirySubmit);