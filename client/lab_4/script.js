let slidingPosition = 0;
const sliders = document.getElementsByClassName('.carousel_item');
const totalSliders = sliders.length;

document.querySelector('.carousel_button__next').addEventListener("click", function(){
    moveToNextSlider()
})
document.querySelector('.carousel_button__previous').addEventListener("click", function(){
    moveToPreviousSlider()
})

function updateSliderPositon(){
    for (let slider of sliders){
        slider.classList.remove('.carousel_item__visible')
        slider.classList.add('.carousel_item__hidden')
    }
    sliders[slidingPosition].classList.add('.carousel_item__visible')
}

function moveToNextSlider(){
    updateSliderPositon()
    if (slidingPosition === totalSliders - 1){
        slidingPosition = 0 
    } else {
        slidingPosition++
    }
    updateSliderPositon()
}

function moveToPreviousSlider(){
    updateSliderPositon()
    if (slidingPosition === totalSliders - 1){
        slidingPosition = 0
    } else {
        slidingPosition--
    }
    updateSliderPositon()
}

function moveToPreviousSlider(){
    console.log('hello previous')
}