const YT_VIDEO_ID = 'TSkWuI602u4';  // ID do vídeo
const START_TIME = 37;               // segundo inicial
const END_TIME = 52;                 // segundo final
let player;

function onYouTubeIframeAPIReady() {
  const container = document.getElementById('video-bg');
  player = new YT.Player(container, {
    videoId: YT_VIDEO_ID,
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      fs: 0,
      rel: 0,
      iv_load_policy: 3,
      playsinline: 1,
      mute: 1,
      start: START_TIME
    },
    events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange }
  });
}

function onPlayerReady(event) {
  event.target.mute();
  event.target.seekTo(START_TIME);
  event.target.playVideo();

  // ativa zoom suave
  document.querySelector('.video-bg').classList.add('loaded');

  // loop manual entre START e END
  setInterval(() => {
    const t = player?.getCurrentTime?.();
    if (t >= END_TIME - 0.25) player.seekTo(START_TIME);
  }, 500);
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED)
    player.seekTo(START_TIME);
}



