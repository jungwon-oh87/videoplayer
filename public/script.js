// variables
const video = document.getElementById('screen');
const play_button = document.getElementById('playBtn');
const stop_button = document.getElementById('stopBtn');
const time_stamp = document.getElementById('timeStamp');
const progress_bar = document.getElementById('progressBar');

function handlePlay(){
    if(video.paused){
        video.play();
        play_button.innerHTML = '<i class="fa fa-pause text-green-500 lg:fa-2x"></i>';
        // progress_bar.value = (video.currentTime/video.duration)/100;
    }else{
        video.pause();
        play_button.innerHTML = '<i class="fa fa-play text-green-500 lg:fa-2x"></i>';
    }
}

function handleStop(){
    video.currentTime = 0;
    video.pause();
}

function updateBar(){
    progress_bar.value = video.currentTime / video.duration * 100;

    // update time as well
    console.log(video.currentTime)
    let min = Math.floor(video.currentTime / 60);
    if(min < 10){
        min = '0' + String(min);
    }

    let sec = Math.floor(video.currentTime % 60);
    if(sec < 10){
        sec = '0' + String(sec);
    }

    time_stamp.innerHTML = `${min}:${sec}`;
}

function handleBar(){
    video.currentTime = (+progress_bar.value * video.duration) / 100;
}

// when screen clicked
video.addEventListener('click', handlePlay);

// when play button clicked
play_button.addEventListener('click', handlePlay);

// when stop button clicked
stop_button.addEventListener('click', handleStop);

// video progress bar update
video.addEventListener('timeupdate', updateBar);

// update video when progress bar moved
progress_bar.addEventListener('change', handleBar);