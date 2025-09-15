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
    a===1 ? functionFilterOpen(): functionFilterClose()
    a=1-a
    document.addEventListener('click', function(event){
        if(!filter[0].contains(event.target)&&!Functionfilter[0].contains(event.target)){
            functionFilterClose()
            a=1           
        }
    })
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
        document.getElementById('linkcss').href='To-dolist-moon.css'
        document.getElementById('sun-moon').innerHTML='<i class="fa-solid fa-sun"></i>'
    }
    else{
        document.getElementById('linkcss').href='To-dolist-sun.css'
        document.getElementById('sun-moon').innerHTML='<i class="fa-solid fa-moon"></i>'
    }
}
function addNote(){
    add[0].style.display='block'
    addTable[0].style.display='block'
}
function cancel(){
        add[0].style.display='none'
        addTable[0].style.display='none'        
}
function addHide(){
    add[0].style.display='none'
    addTable[0].style.display='none'
}
input.addEventListener('input',()=>{
    if(input.value.length >240){
        warning.style.display='block'
    }
    else{
        warning.style.display='none'
    }
})
function noteData(){
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
            alert('chưa có dữ liệu')
        }
    data.forEach((NOTE, index) => {
        const clone= template.cloneNode(true)
        const Delete= clone.querySelector('.fa-trash')
        Delete.onclick= function(){
            clone.remove();
            data.splice(index, 1);
            localStorage.setItem('Note', JSON.stringify(data))
        }
        clone.querySelector('.note-inf').textContent= NOTE.note ?? 'không có';
        list.appendChild(clone);
    });
}
noteData()
function apply(){
    const userNote= {
    note: input.value,
    }
    if(input.value.length<240){
        x=0
        let data= JSON.parse(localStorage.getItem('Note')) || []
        if(!Array.isArray(data)){
            data=[data]
            data.push(userNote)
            alert('hihi')
            x=1
        }
        else{
            data.push(userNote)
            alert('haha')
            x=1
        }
        localStorage.setItem('Note', JSON.stringify(data))
        x===1? (noteData(),cancel()): alert('cấp cứu lỗi rồi')
        input.value=''
    }
}
function functionSearch(){
    document.onkeyup = function(event) {
        if(event.key==='Enter') {
            var search= document.getElementById('function-search').value.trim().toLowerCase()
            let cards= document.querySelectorAll('.todo-list-2 .todo-listcard')
            cards.forEach ((card) => {
                let inf= card.querySelector('.note-inf').textContent.trim().toLowerCase()
                if(!inf.includes(search)) {
                    card.style.display='none'
                }
                else{
                    card.style.removeProperty('display')
                }
            })
        }
        
    }
}