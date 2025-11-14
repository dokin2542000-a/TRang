function order(){
    var lack=0
    inputs=document.querySelectorAll('input')
    inputs.forEach(input => {
        if(input.value.trim()==''){
            document.getElementById('incomplete').style.display='block'
            document.getElementById('incomplete').textContent='Bạn cần nhập đủ hết thông tin yêu cầu'
            lack=1
        }
    });
    if(lack==0){
        document.querySelector('.content-success').style.display='block'
        document.querySelector('#email').textContent=document.getElementById('Email').value
        document.querySelector('#customer-name').textContent=document.getElementById('Fullname').value
        document.querySelector('#customer-city').textContent=document.getElementById('City').value
        document.querySelector('#customer-address').textContent=document.getElementById('Address').value
    }
}
function cancel(){
    window.location.replace('shoppe.html')
}