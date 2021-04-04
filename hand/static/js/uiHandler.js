let standbyTimeSlider = document.querySelector("#timeSlider");
let standbyTimeLabel = document.querySelector("#timeSliderLabel");
let tl = gsap.timeline();
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
            ease: `slow`,
        }
    );

    tl = gsap.timeline();

    tl.to(progressBar,
        {
            startAt: {
                width: "100%"
            },
            duration: standByTime,
            width: 0,
            delay: 1,
            ease: `steps(${standByTime})`,
            onComplete: function () {
                tl.restart();
                console.log("finished!");
                requestSample(true);
            }
        });

    /*loop = setInterval(() => {

    }, 5000);*/
}

const updateUI = (letter) => {
    let historial = document.querySelector("#historialParagraph");
    let translated = document.querySelector("#translatedParagraph");
    let preview = document.querySelector("#previewParagraph");

    gsap.fromTo([historial, translated, preview],
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1, ease: 'power1.inOut' });

    historial.innerHTML += letter;
    translated.innerHTML += letter;
    preview.innerHTML = letter;


}

const restartUI = () => {
    let historial = document.querySelector("#historialParagraph");
    let translated = document.querySelector("#translatedParagraph");
    let preview = document.querySelector("#previewParagraph");

    historial.innerHTML = "";
    translated.innerHTML = "";
    preview.innerHTML = "";
}

const stopAnimations = () => {
    isPlaying = false;
    tl.restart();
    tl.pause();
    hourGlassAnimation.kill();
    document.querySelector("#playIcon").innerHTML = "play_arrow";
    document.querySelector("#playButton").classList.add("cyan");
    document.querySelector("#playButton").classList.remove("blue");
}