var elInp = document.querySelector('.inp')
var elInpu = document.querySelector('.inpp')
var elT = document.querySelector('.tit')

var arr = ["..",'olma', 'behi','anor',".."]
console.log(arr);
function add(){

    if(elInp.value.length > 3 && elInpu.value == 'boshiga'){
        arr.unshift(elInp.value)
        elT.textContent = arr
       arr.unshift( elInpu.value) 
    }else{
        arr.push(elInp.value)
        elT.textContent = arr
        arr.push( elInpu.value) 
    }
}