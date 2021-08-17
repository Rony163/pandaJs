// 2 number
const h2 = document.getElementsByTagName('h2');
for (const sh2 of h2) {
    sh2.style.color = 'lightblue';
}

// 3 number
document.getElementById('Backpack').style.backgroundColor = 'tomato';

// 4 number
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}
//  5 number
function Click() {
    console.log('This is number 5 solution');
}


//  6 number
const buyBtn = document.getElementsByClassName('m-3');
for (const btn of buyBtn) {
    btn.addEventListener('click', function (event) {
        // console.log(9);
        event.target.parentNode.removeChild(event.target);
    })
}

// 7 number
document.getElementById('inputField').addEventListener('keyup', function (event) {
    const btn = document.getElementById('submitBtn');
    if (event.target.value == 'email') {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', true);
    }
})

// 8 number
function setNewImage() {
    document.getElementById('firstImg').src = 'images/bags/bag-2.png';
}
function setOldImage() {
    document.getElementById('firstImg').src = 'images/bags/bag-1.png';
}


// 9 number
const bgcolor = document.getElementById('empty');
bgcolor.addEventListener('dblclick', function () {
    // console.log(9);
    bgcolor.style.backgroundColor = 'gray';
})





/* // another practice
//  2 number
const rh2 = document.getElementsByTagName('h2');
for (const h2 of rh2) {
    h2.style.color = 'lightblue';
}

// 3 number
document.getElementById('Backpack').style.backgroundColor = 'tomato';

// 4 number
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

//  5 number
function Click() {
    console.log('There is number 5 solution');
}

//  6 number
const buyNow = document.getElementsByClassName('m-3');
for (const buy of buyNow) {
    buy.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

//  7 number
document.getElementById('inputField').addEventListener('keyup', function () {
    if (inputField.value == 'email') {
        document.getElementById('submitBtn').removeAttribute('disabled');
    }
    else {
        document.getElementById('submitBtn').setAttribute('disabled', true);
    }
})

// 8 number
function newImage() {
    document.getElementById('firstImg').src = 'images/bags/bag-3.png';
}
function oldImage() {
    document.getElementById('firstImg').src = 'images/bags/bag-1.png';
}

//  9 number
document.getElementById('empty').addEventListener('dblclick', function () {
    document.getElementById('empty').style.backgroundColor = 'gray';
}) */