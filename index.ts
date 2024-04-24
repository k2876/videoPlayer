const video = document.querySelector("video");

video?.addEventListener("click", (e) => {
  if (video?.paused) {
    video?.play();
  } else {
    video?.pause();
  }
});
console.log(video?.attributes);
