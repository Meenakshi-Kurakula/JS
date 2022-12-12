let score=0
let score2=0
function add1() {
    score+=1
    document.getElementById('hs').innerText=score
}
function add2() {
    score+=2
    document.getElementById('hs').innerText=score
}
function add3() {
    score+=3
    document.getElementById('hs').innerText=score
}
function add1g() {
    score2+=1
    document.getElementById('gs').innerText=score2
}
function add2g() {
    score2+=2
    document.getElementById('gs').innerText=score2
}
function add3g() {
    score2+=3
    document.getElementById('gs').innerText=score2
}
function newgame(){
    score=0
    score2=0
    document.getElementById('hs').innerText=0
    document.getElementById('gs').innerText=0
}