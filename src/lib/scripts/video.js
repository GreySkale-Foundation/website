

/**
@param {string} video


*/
export function playVideo(video){
 video.currentTime = 0;
    video.play();
}

/**
@param {string} video


*/
export function resetVideo(video){
    video.pause()
    video.currentTime = 0;
}
