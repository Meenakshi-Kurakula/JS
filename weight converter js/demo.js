document.getElementById('output').style.visibility="hidden"
document.getElementById('kgs').addEventListener('input',function(x){
    document.getElementById('output').style.visibility="visible"
    let kgs=x.target.value
    document.getElementById('gop').innerHTML=kgs*1000
    document.getElementById('pop').innerHTML=kgs*2.20462
    document.getElementById('top').innerHTML=kgs*0.00110231
})