let details=[{
    name:"buddy",
    color:"colorEl",
    dob: "dobEl",
    pet:"petEl"
}]
function op(){
let nameEl=document.getElementById('name').value 
let colorEl=document.getElementById('color').value 
let dobEl=document.getElementById('dob').value
let petEl=document.getElementById("pet").value
let outpEl=document.getElementById('outp')
    details.push({
        name:nameEl,
        color:colorEl,
        dob: dobEl,
        pet:petEl
    })
for (i in details){
outpEl.textContent+=details[i]
}
}