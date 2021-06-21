let arr = [];
let kosti = document.getElementsByClassName('fff');

function div(val, by){
    return (val - val % by) / by;
}

window.addEventListener('DOMContentLoaded', function () {
    start();
    game();
    end();
})

function random() {
    for (let i = 0; i < 16; i++) {
        arr.push(Math.round(Math.random()));
    }
    let bool = arr[0];
    for (let i = 1; i < 16; i++) {
        if (arr[i] !== bool) {
            bool = 2;
            break;
        }
    }
    if (bool !== 2) random ();
}


function rotate() {
    for (let i = 0; i < 16; i++) {
        if (arr[i] != false) {
            kosti[i].style.transform = "rotate(90deg)"
        } else {
            kosti[i].style.transform = "rotate(0deg)"
        }
    }
}

function start () {
    random();
    rotate();
    document.getElementById('1001').addEventListener('click', function () {
        document.getElementById('start').style.transform = 'translateY(2000px)';
        document.getElementById('start').style.visibility = 'hidden';
    })
}

function change(i) {
    arr[i] = 1-arr[i];
    if (i%4 === 0) {
        arr[i+1] = 1-arr[i+1];
        arr[i+2] = 1-arr[i+2];
        arr[i+3] = 1-arr[i+3];
    } else if (i%4 === 1) {
        arr[i-1] = 1-arr[i-1];
        arr[i+1] = 1-arr[i+1];
        arr[i+2] = 1-arr[i+2];
    } else if (i%4 === 2) {
        arr[i-2] = 1-arr[i-2];
        arr[i-1] = 1-arr[i-1];
        arr[i+1] = 1-arr[i+1];
    } else {
        arr[i-3] = 1-arr[i-3];
        arr[i-2] = 1-arr[i-2];
        arr[i-1] = 1-arr[i-1];
    }
    if (div(i,4) === 0) {
        arr[i+4] = 1-arr[i+4];
        arr[i+8] = 1-arr[i+8];
        arr[i+12] = 1-arr[i+12];
    } else if (div(i,4) === 1) {
        arr[i-4] = 1-arr[i-4];
        arr[i+4] = 1-arr[i+4];
        arr[i+8] = 1-arr[i+8];
    } else if (div(i,4) === 2) {
        arr[i-8] = 1-arr[i-8];
        arr[i-4] = 1-arr[i-4];
        arr[i+4] = 1-arr[i+4];
    } else {
        arr[i-12] = 1-arr[i-12];
        arr[i-8] = 1-arr[i-8];
        arr[i-4] = 1-arr[i-4];
    }
    rotate();
    if (arr.every(element => element === 1) || arr.every(element => element === 0)) {
        document.getElementById('end').style.visibility = 'visible';
        document.getElementById('end').style.opacity = '100%';
        arr = [];
    }
}

function game() {
    for (let i = 0; i < 16; i++) {
        kosti[i].addEventListener('click', function () {
            change(i);
            rotate();
        });
    }
}

function end() {
    document.getElementById('1002').addEventListener('click', function () {
        random();
        rotate();
        document.getElementById('end').style.opacity = null;
        document.getElementById('end').style.visibility = 'hidden';
    })
}

