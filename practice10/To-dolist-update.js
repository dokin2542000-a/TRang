add=document.getElementsByClassName('add')
    addTable=document.getElementsByClassName('add-table')
filter=document.getElementsByClassName('filter')
input=document.getElementById('inputNote')
warning=document.getElementById('warning')
// nút
Functionsearch=document.getElementsByClassName('function-search')
Functionfilter=document.getElementsByClassName('function-filter')
Functiolight=document.getElementsByClassName('function-light')
// code chính
let a=1
function functionFilter(){
    document.querySelector('.nonedata').style.display='none'
    const all= document.querySelector('#filter-1')
    const complete= document.querySelector('#filter-2')
    const incomplete= document.querySelector('#filter-3')
    a===1 ? functionFilterOpen(): functionFilterClose()
    a=1-a
    document.addEventListener('click', function(event){
        if(!filter[0].contains(event.target)&&!Functionfilter[0].contains(event.target)){
            functionFilterClose()
            a=1           
        }
    })
    // let cards= document.querySelectorAll('.todo-list-2 .todo-listcard')
    let data= JSON.parse(localStorage.getItem('Note'))
    all.onclick = function (){
        document.querySelector('.function-filter-text').textContent='ALL'
        let cards= document.querySelectorAll('.todo-list-2 .todo-listcard')
        cards.forEach((card)=>{
            card.style.removeProperty('display')
        })
    }
    complete.onclick = function(){
        document.querySelector('.function-filter-text').textContent='CMP'
        let cards = document.querySelectorAll('.todo-list-2 .todo-listcard') 
        data.forEach((NOTE, index)=>{
            if(NOTE.doYouDone===0){
                cards[index].style.display='none'
            }
            else{
                cards[index].style.removeProperty('display')
            }
        })
    }
    incomplete.onclick = function(){
        document.querySelector('.function-filter-text').textContent='ICOMP'
        let cards = document.querySelectorAll('.todo-list-2 .todo-listcard') 
        data.forEach((NOTE, index)=>{
            if(NOTE.doYouDone===1){
                cards[index].style.display='none'
            }
            else{
                cards[index].style.removeProperty('display')
            }
        })
    }
}
function functionFilterOpen() {
    filter[0].style.display='block';
    document.getElementById('function-filter-symbol').innerHTML= '<i class="fa-solid fa-angle-up"></i>'
}
function functionFilterClose() {
    filter[0].style.display='none';
    document.getElementById('function-filter-symbol').innerHTML= '<i class="fa-solid fa-chevron-down"></i>'
}
function functionLight(){
    const time = window.getComputedStyle(document.body).backgroundColor
    if(time==='rgb(247, 247, 247)') {
        document.getElementById('linkcss').href='To-dolist-update-moon.css'
        document.getElementById('sun-moon').innerHTML='<i class="fa-solid fa-sun"></i>'
    }
    else{
        document.getElementById('linkcss').href='To-dolist-update-sun.css'
        document.getElementById('sun-moon').innerHTML='<i class="fa-solid fa-moon"></i>'
    }
}
function addNote(){
    add[0].style.display='block'
    addTable[0].style.display='block'
    document.onkeyup = function(event) {
        if(event.key==='Enter') {
            apply()
        }
    }

}
function cancel(){
        add[0].style.display='none'
        addTable[0].style.display='none' 
        warning.style.display='none'       
}
function addHide(){
    add[0].style.display='none'
    addTable[0].style.display='none'
    warning.style.display='none'
}
input.addEventListener('input',()=>{
    if(input.value.length >240&& input.value.length===''){
        warning.style.display='block'
    }
    else{
        warning.style.display='none'
    }
})
function noteData(){
    document.querySelector('.nonedata').style.display='none'
    const template= document.querySelector('.todo-listcard')
    const list = document.querySelector('.todo-list-2')
    list.style.display='block'
    if (!template || !list) {
            console.error('Template hoặc list không tồn tại');
            return;
        }
    list.innerHTML = '';
    let data= JSON.parse(localStorage.getItem('Note'))|| [];
    if(data=='') {
            document.querySelector('.nonedata').style.display='block'
        }
    else { document.querySelector('.nonedata').style.display='none'}
    data.forEach((NOTE, index) => {
        const clone= template.cloneNode(true)
        const Delete= clone.querySelector('.fa-trash')
        const Edit= clone.querySelector('.fa-pen')
        const Done= clone.querySelector('.todo-listcard-done')
        Delete.onclick= function(){
            clone.remove();
            data.splice(index, 1);
            localStorage.setItem('Note', JSON.stringify(data))
            noteData()
        }
        Edit.onclick = function(){
            //tạo input
            const have = clone.querySelector('.note-inf input')
            if (have){
                data[index].note =have.value
                localStorage.setItem('Note', JSON.stringify(data))
                clone.querySelector('.note-inf').textContent= data[index].note
            }
            else {
                const input =document.createElement('input')
                input.value= NOTE.note
                clone.querySelector('.note-inf').style.overflow='hidden'
                input.type = 'text'
                input.style.height= '100%'
                input.style.width= '100%'
                clone.querySelector('.note-inf').textContent=''
                clone.querySelector('.note-inf').appendChild(input)
                input.focus()
                input.onkeyup= function(event){
                    if(event.key==='Enter') {
                        data[index].note =input.value
                        localStorage.setItem('Note', JSON.stringify(data))
                        clone.querySelector('.note-inf').textContent= data[index].note
                    }
                }
            }
        }
        function done(){
            document.querySelector('.function-filter-text').textContent='ALL'
            clone.doYouDone= NOTE.doYouDone
            if(clone.doYouDone===1){
                clone.querySelector('.Done').style.display='block'
                clone.querySelector('.note-inf').style.textDecoration= 'line-through'
                // clone.querySelector('.note-inf').style.color='gray'
                data[index].doYouDone = 0
                localStorage.setItem('Note', JSON.stringify(data))
                noteData()
            }
            else{
                clone.querySelector('.Done').style.display='none'
                clone.querySelector('.note-inf').style.textDecoration= 'none'
                // clone.querySelector('.note-inf').removeProperty('color')
                data[index].doYouDone = 1
                localStorage.setItem('Note', JSON.stringify(data))
                noteData()
            }
        }
        Done.onclick= done
        clone.querySelector('.note-inf').onclick = done
        clone.doYouDone= NOTE.doYouDone
        if(clone.doYouDone===1){
            clone.querySelector('.Done').style.display='block'
            clone.querySelector('.note-inf').style.textDecoration= 'line-through'
            // clone.querySelector('.note-inf').style.color='gray'
        }
        else{
            clone.querySelector('.Done').style.display='none'
            clone.querySelector('.note-inf').style.textDecoration= 'none'
            // clone.querySelector('.note-inf').removeProperty('color')
        }
        clone.querySelector('.note-inf').textContent= NOTE.note ?? 'không có';
        list.appendChild(clone);
    });
}
noteData()
function apply(){
    const userNote= {
    note: input.value,
    doYouDone: 0
    }
    if(input.value.length<240 && input.value.trim().length>0){
        x=0
        let data= JSON.parse(localStorage.getItem('Note')) || []
        if(!Array.isArray(data)){
            data=[data]
            data.push(userNote)
            x=1
        }
        else{
            data.push(userNote)
            x=1
        }
        localStorage.setItem('Note', JSON.stringify(data))
        x===1? (noteData(),cancel(),document.querySelector('.function-filter-text').textContent='ALL'): alert('cấp cứu lỗi rồi')
        input.value=''
    }
    else{
        warning.style.display='block'
    }
}
// function getcards(){
//     return Array.from(document.querySelectorAll('.todo-list-2 .todo-listcard')).filter(card => card.style.display !== 'none');
// }
function functionSearch(){
    function search(){
        var search= document.getElementById('function-search').value.trim().toLowerCase()
        cards= document.querySelectorAll('.todo-list-2 .todo-listcard')
        document.querySelector('.function-filter-text').textContent='ALL'
        document.getElementById('function-search').value=''
        m=0
        if(search!==''){
            cards.forEach ((card) => {
                let inf= card.querySelector('.note-inf').textContent.trim().toLowerCase()
                if(!inf.includes(search)) {
                    card.style.display='none'
                }
                else{
                    card.style.removeProperty('display')
                    m+=1
                }
            })
        }
        else{
            m+=1
            cards.forEach ((card) => {card.style.removeProperty('display')})
        }
        if(m===0){
            document.querySelector('.nonedata').style.display='block'
        }
        else{document.querySelector('.nonedata').style.display='none'}
    }
    document.onkeyup = function(event) {
        if(event.key==='Enter') {
            search();
        }
    }
    document.querySelector('.fa-magnifying-glass').onclick= search
}
