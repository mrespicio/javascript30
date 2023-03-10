function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // key class
	if(!audio) return;
	audio.currentTime = 0; //rewind to start
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e){
	//if(e.propertyName !== 'transform') return; // skip if it's not a transform
	console.log("hello");
	this.classList.remove('playing');
}

// each key gets transitionend listener, when transition ends run removeTransition function
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition()));

window.addEventListener('keydown', playSound);
