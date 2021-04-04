
let requestLoop;
let actualRequestNumber = 0;
let standByTimeForSerial = +document.querySelector("#standbyTime").value;
let alreadyAdjusted = false;



const requestSample = (forSnapshot) => {
    actualRequestNumber += 1;
    console.log(actualRequestNumber, standByTimeForSerial);
    if (actualRequestNumber % standByTimeForSerial === 0) {
        actualRequestNumber = 0;
    }
    let message;
    $.ajax({
        url: 'requestSample',
        success: (response) => {
                if(!alreadyAdjusted)
                {
                    alreadyAdjusted=true;
                    restartUI();
                }
                updateUI(response.letter);
        }
    });
}
