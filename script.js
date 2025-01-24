// set the initial player position
var playerPosition = 0;

// move the player when the user presses a key
document.addEventListener('keydown', function(event) {
	if (event.code === 'ArrowRight') {
		playerPosition += 10;
		document.querySelector('.player').style.left = playerPosition + 'px';
	}
});

// randomly generate obstacles
setInterval(function() {
	var obstacle = document.createElement('div');
	obstacle.classList.add('obstacle');
	obstacle.style.left = Math.floor(Math.random() * 450) + 'px';
	document.querySelector('.game-container').appendChild(obstacle);
}, 1000);
