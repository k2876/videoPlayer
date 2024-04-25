const thumbnail = document.querySelector("#pic") as HTMLImageElement;
const playButton = document.querySelector("#play") as HTMLDivElement;
const video = document.querySelector("#video") as HTMLVideoElement;
const progressBar = document.querySelector("#progress") as HTMLElement;
const timeDisplay = document.querySelector("#time") as HTMLElement;
const button = document.querySelector("#button") as HTMLElement;
const progressbarContainer = document.querySelector(
  "#progressbar-container"
) as HTMLElement;

playButton.addEventListener("click", () => {
  thumbnail.style.display = "none"; // 이미지 숨김
  playButton.style.display = "none"; // 이미지 숨김
  progressbarContainer.style.display = "flex";
  video.src = "./images/video.mp4"; // 비디오 소스 설정
  video.play(); // 비디오 자동 재생
});

video.addEventListener("click", () => {
  if (video?.paused) {
    video?.play();
  } else {
    video?.pause();
  }
});
button.addEventListener("click", () => {
  if (video?.paused) {
    button.textContent = "멈춤";
    video?.play();
  } else {
    button.textContent = "재생";
    video?.pause();
  }
});
progressBar.addEventListener("click", function (e) {
  const pos =
    (e.pageX - progressBar.getBoundingClientRect().left) /
    progressBar.offsetWidth;
  video.currentTime = pos * video.duration;
});

video.addEventListener("timeupdate", function () {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${progress}%`;

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const result = `${minutes}:${seconds}`;
    return result;
  };

  // 현재 재생 시간 및 전체 영상 시간 업데이트
  const currentTime = formatTime(video.currentTime);
  const duration = formatTime(video.duration);
  timeDisplay.textContent = `${currentTime} / ${duration}`;
});
