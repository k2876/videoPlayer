var thumbnail = document.querySelector("#pic");
var playButton = document.querySelector("#play");
var video = document.querySelector("#video");
var progressBar = document.querySelector("#progress");
var timeDisplay = document.querySelector("#time");
var button = document.querySelector("#button");
var progressbarContainer = document.querySelector("#progressbar-container");
playButton.addEventListener("click", function () {
    thumbnail.style.display = "none"; // 이미지 숨김
    playButton.style.display = "none"; // 이미지 숨김
    progressbarContainer.style.display = "flex";
    video.src = "./images/video.mp4"; // 비디오 소스 설정
    video.play(); // 비디오 자동 재생
});
video.addEventListener("click", function () {
    if (video === null || video === void 0 ? void 0 : video.paused) {
        video === null || video === void 0 ? void 0 : video.play();
    }
    else {
        video === null || video === void 0 ? void 0 : video.pause();
    }
});
button.addEventListener("click", function () {
    if (video === null || video === void 0 ? void 0 : video.paused) {
        button.textContent = "멈춤";
        video === null || video === void 0 ? void 0 : video.play();
    }
    else {
        button.textContent = "재생";
        video === null || video === void 0 ? void 0 : video.pause();
    }
});
progressBar.addEventListener("click", function (e) {
    var pos = (e.pageX - progressBar.getBoundingClientRect().left) /
        progressBar.offsetWidth;
    video.currentTime = pos * video.duration;
});
video.addEventListener("timeupdate", function () {
    var progress = (video.currentTime / video.duration) * 100;
    progressBar.style.width = "".concat(progress, "%");
    var formatTime = function (time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        var result = "".concat(minutes, ":").concat(seconds);
        return result;
    };
    // 현재 재생 시간 및 전체 영상 시간 업데이트
    var currentTime = formatTime(video.currentTime);
    var duration = formatTime(video.duration);
    timeDisplay.textContent = "".concat(currentTime, " / ").concat(duration);
});
