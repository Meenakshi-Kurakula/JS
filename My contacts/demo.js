
let ip=document.getElementById('input')
ip.addEventListener('keyup',search)
function search(){
    let filtervalue=document.getElementById('input').value.toUpperCase()
    let names=document.getElementById('names')
    let li=names.querySelectorAll('li.collection-item')
    for(let i=0;i<li.length;i++){
        let a=li[i].getElementsByTagName('a')[0]
        if(a.innerHTML.toUpperCase().indexOf(filtervalue)>-1){
          li[i].style.display=''  
        }else{
            li[i].style.display='none'
        }
    }
}
