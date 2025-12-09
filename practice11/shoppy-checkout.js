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
        inf=JSON.parse(localStorage.getItem('products'))
        for (let index = inf.length - 1; index >= 0; index--) {
            if (inf[index].add_cart === 'yes') {
                inf[index].quantity -= inf[index].choose_quantity;
                inf[index].choose_quantity = 0;
                inf[index].add_cart = 'no';

        // Nếu hết hàng thì xoá luôn
                if (inf[index].quantity === 0) {
                    inf.splice(index, 1);
                }
            }
        }

        // Chỉ lưu 1 lần sau khi xử lý xong
        localStorage.setItem('products', JSON.stringify(inf));
    }
}
function cancel(){
    window.location.replace('shoppe.html')
}