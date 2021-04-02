let standbyTimeSlider = document.querySelector("#timeSlider");
let standbyTimeLabel = document.querySelector("#timeSliderLabel");
let tween;
let hourGlassAnimation;

let isPlaying = false;


const updateSlider = (value) => {
    standbyTimeLabel.innerHTML = value + " s";
}

const toggleAnimations = () => {
    isPlaying ? stopAnimations() : startAnimations();
}

const startAnimations = () => {

    if (isPlaying) return;

    isPlaying = true;

    let standByTime = document.querySelector("#standbyTime").value;
    let hourGlassIcon = document.querySelector("#hourglass");
    let progressBar = document.querySelector("#progressBar");

    document.querySelector("#playIcon").innerHTML = "pause";
    document.querySelector("#playButton").classList.remove("cyan");
    document.querySelector("#playButton").classList.add("blue");

    hourGlassAnimation = gsap.to(
        hourGlassIcon,
        {
            startAt: {
                rotateZ: 0
            },
            duration: standByTime,
            rotateZ: 360,
            repeat: -1,
            ease: `slow`
        }
    );


    tween = gsap.to(progressBar,
        {
            startAt: {
                width: "100%"
            },
            duration: standByTime,
            width: 0,
            repeat: -1,
            ease: `steps(${standByTime})`
        });

    /*loop = setInterval(() => {

    }, 5000);*/
}

const stopAnimations = () => {
    isPlaying = false;
    tween.kill();
    hourGlassAnimation.kill();
    document.querySelector("#playIcon").innerHTML = "play_arrow";
    document.querySelector("#playButton").classList.add("cyan");
    document.querySelector("#playButton").classList.remove("blue");
}