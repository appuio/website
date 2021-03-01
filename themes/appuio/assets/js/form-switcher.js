var formSwitchButtons = document.querySelectorAll('.form-switcher .buttons button');

for(var i = 0; i < formSwitchButtons.length; i++) {
  var button = formSwitchButtons[i];
  button.addEventListener('click', function() {
    this.parentNode.parentNode.dataset.visible = this.dataset.show;
  });
}