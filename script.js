let shot = document.querySelector('.shot'),
    hit = document.querySelector('.hit'),
    count = document.querySelector('.count_hit strong'),
    AReload = document.querySelector('.Active_Reload'),
    counter = 0;

document.body.addEventListener('click', playShot);

function playShot(e) {
 let el = e.target;
 if(el.classList.contains('dartboard_up')) {
  shot.stop();
  shot.play();
  hit.stop();
  hit.play();
  counter++;
  count.textContent = counter;
  el.classList.add('hit');
  if(counter == 8) {
   setTimeout(replay,800);
   AReload.stop();
   AReload.play();
  }
 } else {
  shot.stop();
  shot.play();
 }
}

function replay() {
 let died = document.querySelectorAll('.dartboard_up');
 died.forEach(function(item){
  item.classList.remove('hit');
 });
 counter = 0;
 count.textContent = counter;
}


HTMLAudioElement.prototype.stop = function(){
 this.pause();
 this.currentTime = 0.0;
}