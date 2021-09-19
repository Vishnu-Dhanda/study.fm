  
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play-button');






// Play song
function playSong() {
	musicContainer.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');
	player.playVideo();
  }
  
  // Pause song
  function pauseSong() {
	musicContainer.classList.remove('play');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');
	player.pauseVideo();
  }
  


playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');
  
	if (isPlaying) {
	  pauseSong();
	} else {
	  playSong();
	}
  });