let standbyTimeSlider = document.querySelector("#timeSlider");
let standbyTimeLabel = document.querySelector("#timeSliderLabel");


const updateSlider = (value) => {
    standbyTimeLabel.innerHTML = value + " ms";
}