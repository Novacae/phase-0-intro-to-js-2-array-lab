// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    var appendCat = cats.slice();
    appendCat.push("Broom")
    return appendCat
}
function prependCat() {
    var prependCat = cats.slice();
    prependCat.unshift("Arnold")
    return prependCat
}
function removeLastCat() {
    var removeLastCat = cats.slice();
    removeLastCat.pop()
    return removeLastCat
}
function removeFirstCat() {
    var removeFirstCat = cats.slice();
    removeFirstCat.shift()
    return removeFirstCat
}