const cards = document.querySelectorAll('.video_container');
let activeCard = null;

function handleCardClick(event) {
  const clickedCard = event.currentTarget;
  const video = clickedCard.querySelector('video');

  if (video.paused) {
    if (activeCard) {
      const activeVideo = activeCard.querySelector('video');
      activeVideo.pause();
      activeCard.classList.remove('active');
    }

    video.play();
    clickedCard.classList.add('active');
    activeCard = clickedCard;
  } else {
    video.pause();
    clickedCard.classList.remove('active');
    activeCard = null;
  }
}

cards.forEach(card => {
  card.addEventListener('click', handleCardClick);
});
