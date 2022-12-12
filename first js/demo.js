let pets=0
let petsEl=document.getElementById('pets')
let saveEl=document.getElementById('prev')
function petted(){
    pets+=1
    petsEl.textContent=pets
}
function save(){
    let prev=pets+' - '
    saveEl.textContent+=prev
    petsEl.innerText=0
    pets=0


}