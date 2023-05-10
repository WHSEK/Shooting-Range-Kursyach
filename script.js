let shot = document.querySelector('.shot'),
    hit = document.querySelector('.hit'),
    count = document.querySelector('.count_hit strong'),
    AReload = document.querySelector('.Active_Reload'),
    counter = 0;
    AllCounter = 0;

document.body.addEventListener('click', playShot);

function playShot(e) {
 let el = e.target;
 if(el.classList.contains('dartboard_up')) {
  shot.stop();
  shot.play();
  hit.stop();
  hit.play();
  counter++;
  AllCounter++;
  count.textContent = AllCounter;
  el.classList.add('dartboard_down');
  if(counter == 9) {
   setTimeout(replay,3000);
   AReload.stop();
   AReload.play();
  }
 } else {
  shot.stop();
  shot.play();
 }
}

function replay() {
 let Hitted = document.querySelectorAll('.dartboard_up');
 Hitted.forEach(function(item){
  item.classList.remove('dartboard_down');
 });
 counter = 0;
 count.textContent = AllCounter;
}


HTMLAudioElement.prototype.stop = function(){
 this.pause();
 this.currentTime = 0.0;
}