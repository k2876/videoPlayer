var video = document.querySelector("video");
video === null || video === void 0 ? void 0 : video.addEventListener("click", function (e) {
    if (video === null || video === void 0 ? void 0 : video.paused) {
        video === null || video === void 0 ? void 0 : video.play();
    }
    else {
        video === null || video === void 0 ? void 0 : video.pause();
    }
});
console.log(video === null || video === void 0 ? void 0 : video.attributes);
