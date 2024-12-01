function randomInt(min, max) {

    return min + Math.floor(Math.random() * (max - min))
}

function random(min, max) {

    return min + (Math.random() * (max - min))
}

function naiveRound(num, decimalPlaces) {

    var p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
}

function dist(x1, y1, x2, y2) {

    var dx = x2 - x1
    var dy = y2 - y1
    var d = Math.sqrt(dx * dx + dy * dy)
    return d
}

function randomColorAlpha() {

    return "hsla(" + randomInt(0, 360) + ",100% , 50% , " + naiveRound(random(.1, .9), 1) + ")"
}

function randomColor() {

    return "hsl(" +  randomInt(0, 360) + ",100% , 50%)"
}