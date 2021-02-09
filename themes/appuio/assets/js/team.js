var animations = {};
var members = document.querySelectorAll('.with-team-animation');

for(var i = 0; i < members.length; i++) {
  var member = members[i];
  var memberId = member.dataset.id;
  var isOpen = member.classList.contains('open');
  var animation = bodymovin.loadAnimation({
    container: member.querySelector('.animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: member.dataset.animation
  });
  if (isOpen) animation.goToAndStop(30, true);

  animations[memberId] = animation;

  member.querySelector('button.open-container').addEventListener('click', function(e) {
    openContainer(this);
    animations[this.dataset.memberid].playSegments([0,30], true);
  });

  member.querySelector('button.play-hero').addEventListener('click', function() {
    this.parentNode.classList.add('active');
    animations[this.dataset.memberid].playSegments([31,180], true);
  });

}

function openContainer(what) {
  what.parentNode.classList.remove('wiggle');
  what.parentNode.classList.add('open');
  what.remove();
}
