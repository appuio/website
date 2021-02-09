var slider = document.getElementById('memoryslider');
if (slider) {
  slider.addEventListener('change', function() {
    updateConfiguration();
  });
}
var orderButton = document.getElementById('order-custom');
if (orderButton) {
  orderButton.addEventListener('click', function() {
    updateConfiguration();
  });
}

function updateConfiguration() {
  // select public shared radio button
  document.getElementById('order0-d3a12f0a-904a-411c-b9b7-8659a5e9d747')?.click();

  var textfield = document.querySelector('.hsform-wrapper textarea[name="message"]');
  var config = document.querySelector('.offers-package-list')?.innerText || '';

  var content = textfield.value;
  content = content.replace(
    /(--- config ---)[.*\w\W]*(--- end config ---)|$/,
    '--- config ---\n' + config + '\n--- end config ---'
  );
  textfield.value = content;
}