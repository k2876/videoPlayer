const video = document.querySelector("#video") as HTMLVideoElement;

video?.addEventListener("click", (e) => {
  if (video?.paused) {
    video?.play();
  } else {
    video?.pause();
  }
});
setTimeout(() => {
  // console.log(video?.duration);
  console.log(video.src);
}, 2000);
