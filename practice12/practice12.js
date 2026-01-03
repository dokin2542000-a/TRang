var indexToDelete
var indexToEdit

$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});

//---show employee---
showEmpl()
function showEmpl(){
    const list = document.querySelector('#tableBody2')
    const template = document.getElementById('tableSon')

    if(!template || !list) {
        console.error('Template hoặc list không tồn tại');
        return;
    }
    list.innerHTML=''
    const data= JSON.parse(localStorage.getItem('information'))
    if(data=='') {
        document.querySelector('.clearfix').innerHTML= 'There are no employee at the moment.'
    }
    data.forEach((emp,index) => {
        const clone = template.cloneNode(true)
        const Delete = clone.querySelector('#deleteone')
        const Edit = clone.querySelector('#edit')
        Delete.onclick= function (){
            indexToDelete = index
        }
        Edit.onclick= function(){
            indexToEdit = index
        }
        clone.querySelector('#clone-name').textContent = emp.name || ''
        clone.querySelector('#clone-email').textContent = emp.email || ''
        clone.querySelector('#clone-address').textContent = emp.address || ''
        clone.querySelector('#clone-phone').textContent = emp.phone || ''
        list.appendChild(clone)
    });
}

//---add employee---
function handleAddEmployee(event) {
    event.preventDefault();
    saveInf();
    $('#addEmployeeModal').modal('hide');
    document.getElementById('employeeForm').reset();
    return false;
}
function saveInf(){
    const form = document.getElementById('employeeForm');
    if (!form.checkValidity()) {
        return false;
    }

    const name = document.getElementById('add-name').value
    const email = document.getElementById('add-email').value
    const address = document.getElementById('add-address').value
    const phone = document.getElementById('add-phone').value
    const userData = {
        name: name,
        email: email,
        address: address,
        phone: phone,
    }
    let data = JSON.parse(localStorage.getItem('information'))
    if(!data){
        localStorage.setItem('information', JSON.stringify(userData))
    }
    else if(!Array.isArray(data)){
        data=[data]
        data.push(userData)
        localStorage.setItem('information',JSON.stringify(data))
    }
    else{
        data.push(userData)
        localStorage.setItem('information', JSON.stringify(data))
    }
    location.reload();
}

//---delete emp---
function deleteinf(){
    data = JSON.parse(localStorage.getItem('information'))
    if(indexToDelete>=0){
        data.splice(indexToDelete,1)
        indexToDelete=-1
    }
    else{
        const selected = document.querySelectorAll('#tableBody2 input[type="checkbox"]');
        const newData = data.filter((emp, index) => {
            return selected[index] && !selected[index].checked
        });
        data = newData
    }
    localStorage.setItem('information', JSON.stringify(data))
    const selectAllBtn = document.getElementById('selectAll');
    $('#deleteEmployeeModal').modal('hide')
    showEmpl()
    location.reload();
}

function resetDelete(){
    const selected = document.querySelectorAll('#tableBody2 input[type="checkbox"]:checked');
    if (selected.length === 0) {
        alert("Vui lòng chọn ít nhất một bản ghi để xóa!");
        location.reload();
    }
    else{
        $('#deleteEmployeeModal').modal('show')
    }
    indexToDelete = -1
}

//---edit emp---
function handleEditEmployee(event) {
    event.preventDefault();
    editInf();
    $('#editEmployeeModal').modal('hide');
    document.getElementById('employeeFormEdit').reset();
    location.reload();
    return false;
}
function editInf(){
    data = JSON.parse(localStorage.getItem('information'))
    index= indexToEdit
    const name = document.getElementById('edit-name').value
    const email = document.getElementById('edit-email').value
    const address = document.getElementById('edit-address').value
    const phone = document.getElementById('edit-phone').value
    data[index].name= name
    data[index].email= email
    data[index].address= address
    data[index].phone= phone
    localStorage.setItem('information',JSON.stringify(data))
    indexToEdit=-1
}
