
// get references to DOM objects
const bish = document.querySelector('#bishID');
const bosh = document.querySelector('#boshID');
const max  = document.querySelector('#maxID');
const btn  = document.querySelector('#buttonID');
let output = document.querySelector('#outputID');

const warningColor = "rgb(204, 79, 57, 0.5)";

// validate input, 1 or more digits
function validate(input) {
    const is_digits = /^\d+$/;
    return is_digits.test(input);
}

function validate_all() {
    if(validate(bish.value) === false) return false;
    if(validate(bosh.value) === false) return false;
    if(validate(max.value) === false) return false;
    return true;
}

function bishbosh() {

    if(validate_all() === false) return;
    output.innerHTML = '';

    // bish bosh
    for(let i = 1; i <= max.value; i++) {
        if(i % bish.value === 0 && i % bosh.value === 0) {
            output.innerHTML += 'bish-bosh\r\n';
        }
        else if(i % bish.value === 0) {
            output.innerHTML += 'bish\r\n';
        }
        else if(i % bosh.value === 0) {
            output.innerHTML +='bosh\r\n';
        }
        else {
            output.innerHTML += i + '\r\n';
        }
    }
}

// map enter key to button
document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keycode) {
        case 13:
            bishbosh();
            break;
    }
}

// sets background color based on input validity
const mark_invalid = function() {
    if(validate(this.value) === true) {
        this.style.backgroundColor = 'white';
    }
    else {
        this.style.backgroundColor = warningColor;
    }  
}

// add event listeners
btn.addEventListener('click', bishbosh);
bish.addEventListener('input', mark_invalid);
bosh.addEventListener('input', mark_invalid);
max.addEventListener('input', mark_invalid);
