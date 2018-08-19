console.log("dude, I'm gulping");
document.addEventListener('DOMContentLoaded', function() {
  //MAKE THE SOUNDS:
  // keycode captured on window evt at bottom of code:
  // var for audio that has the same keycode to play sound: key pressed, audio played
  // far for div/class of key with same keycode to adjust style: key press, look changed.
  function makeNoise(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; //handles rapid tapping
    key.classList.add('hit');
    audio.play();
  }
  // CHANGE THE STYLE SO MY EYES DON'T FALL ASLEEP:
  // Listen for transition's end. .key is class for all keys
  const keys = document.querySelectorAll('.key');
  function remTrans(e) {
    if (e.propertyName !== 'transform') return;
    //console.log(e.propertyName); // should not see other parts of .hit running
    this.classList.remove('hit');
  }
  keys.forEach(k => {
    k.addEventListener('transitionend', remTrans);
  });

  window.addEventListener('keydown', makeNoise);
});
