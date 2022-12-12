let cardsEl=document.getElementById('cards-el')
let messageEl=document.getElementById('message-el')
let sumEl=document.getElementById('sum-el')
let playerEl=document.getElementById('player-el')
let cards=[]
let sum=0
let isalive=false
let person={
    name:"Buddy", 
    cashprice:'$250'}

playerEl.textContent=person.name+": "+person.cashprice

function startGame(){
    isalive=true
    let fcard=randomcard()
    cards.push(fcard)
    let scard=randomcard()
    cards.push(scard)
    sum=fcard+scard
    gamereport()
    
}

function randomcard(){
    let rnum = Math.ceil(Math.random()*13)
    if (rnum==1) return 11
    else if (rnum>10) return 10
    else return rnum
    
}
function newCard(){
    if(sum<22){
    let ncard=randomcard()
    cards.push(ncard)
    sum+=ncard
    gamereport()
    }

}
function gamereport(){
    cardsEl.textContent="cards: "
    for(i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="sum: "+sum

if(sum<21){
    messageEl.textContent="want to draw a card?"
}
else if (sum==21){
    messageEl.textContent="won the blackjack"
}
else {
    messageEl.textContent="sorry out of the game"
}
}