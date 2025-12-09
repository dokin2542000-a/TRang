const data= [
  { "product_image": "product-img/img1.webp", "name": "Vintage Typewriter", "price": 49.5, "created_at": "2025-07-20", "rating_point": 4.5, "location": "New York", "quantity": 3,"add_cart": "no","choose_quantity":0, "select":1, "category": "Điện Thoại iPhone 16 Giá Rẻ"},
  { "product_image": "product-img/img2.webp", "name": "Leatherbound Journal", "price": 25.0, "created_at": "2025-07-18", "rating_point": 4.7, "location": "San Francisco", "quantity": 6,"add_cart": "no","choose_quantity":0, "select":1, "category": "Điện Thoại iPhone 16 Giá Rẻ"},
  { "product_image": "product-img/img3.webp", "name": "Fountain Pen", "price": 30.0, "created_at": "2025-07-21", "rating_point": 4.2, "location": "Chicago", "quantity": 1,"add_cart": "no","choose_quantity":0, "select":1, "category": "Điện Thoại iPhone 16 Giá Rẻ"},
  { "product_image": "product-img/img4.webp", "name": "High-Contrast Keyboard", "price": 95.0, "created_at": "2025-07-19", "rating_point": 4.8, "location": "Seattle", "quantity": 4,"add_cart": "no","choose_quantity":0, "select":1, "category": "Quần dài"},
  { "product_image": "product-img/img5.webp", "name": "Wireless Headphones", "price": 120.0, "created_at": "2025-07-17", "rating_point": 4.6, "location": "Los Angeles", "quantity": 2,"add_cart": "no","choose_quantity":0, "select":1, "category": "Quần dài"},
  { "product_image": "product-img/img6.webp", "name": "Ceramic Coffee Mug", "price": 12.5, "created_at": "2025-07-15", "rating_point": 4.0, "location": "Austin", "quantity": 9,"add_cart": "no","choose_quantity":0, "select":1, "category": "Áo"},
  { "product_image": "product-img/img7.webp", "name": "Desk Lamp", "price": 45.0, "created_at": "2025-07-22", "rating_point": 4.3, "location": "Boston", "quantity": 5,"add_cart": "no","choose_quantity":0, "select":1, "category": "Áo khoác gió"},
  { "product_image": "product-img/img8.jpg", "name": "Classic Wristwatch", "price": 80.0, "created_at": "2025-07-20", "rating_point": 4.1, "location": "Denver", "quantity": 7,"add_cart": "no","choose_quantity":0, "select":1, "category": "Áo"},
  { "product_image": "product-img/img9.jpg", "name": "Potted Desk Plant", "price": 18.0, "created_at": "2025-07-21", "rating_point": 3.9, "location": "Portland", "quantity": 2,"add_cart": "no","choose_quantity":0, "select":1, "category": "Áo"},
  { "product_image": "product-img/img10.webp", "name": "Film Camera", "price": 135.0, "created_at": "2025-07-16", "rating_point": 4.9, "location": "San Diego", "quantity": 8,"add_cart": "no","choose_quantity":0, "select":1, "category": "Dép"},
  { "product_image": "product-img/img11.webp", "name": "Running Sneakers", "price": 60.0, "created_at": "2025-07-14", "rating_point": 4.2, "location": "Houston", "quantity": 6,"add_cart": "no","choose_quantity":0, "select":1, "category": "Dép"},
  { "product_image": "product-img/img12.webp", "name": "Laptop Backpack", "price": 55.0, "created_at": "2025-07-13", "rating_point": 4.4, "location": "Atlanta", "quantity": 10,"add_cart": "no","choose_quantity":0, "select":1, "category": "Dép"},
  { "product_image": "product-img/img13.webp", "name": "Modern Fiction Book", "price": 15.0, "created_at": "2025-07-19", "rating_point": 4.6, "location": "Phoenix", "quantity": 1,"add_cart": "no","choose_quantity":0, "select":1, "category": "Tai Nghe giá Rẻ"},
  { "product_image": "product-img/img14.webp", "name": "4K Monitor", "price": 220.0, "created_at": "2025-07-18", "rating_point": 4.8, "location": "Dallas", "quantity": 4,"add_cart": "no","choose_quantity":0, "select":1, "category": "Tai Nghe giá Rẻ"},
  { "product_image": "product-img/img15.webp", "name": "Wireless Mouse", "price": 25.0, "created_at": "2025-07-20", "rating_point": 4.1, "location": "Philadelphia", "quantity": 7,"add_cart": "no","choose_quantity":0, "select":1, "category": "Kính Gương"},
  { "product_image": "product-img/img16.webp", "name": "Mechanical Keyboard", "price": 110.0, "created_at": "2025-07-22", "rating_point": 4.7, "location": "Miami", "quantity": 3,"add_cart": "no","choose_quantity":0, "select":1, "category": "Kính Gương"},
  { "product_image": "product-img/img17.webp", "name": "Ergonomic Chair", "price": 180.0, "created_at": "2025-07-12", "rating_point": 4.5, "location": "Detroit", "quantity": 2,"add_cart": "no","choose_quantity":0, "select":1, "category": "Kính Gương"},
  { "product_image": "product-img/img18.webp", "name": "Leather Phone Case", "price": 20.0, "created_at": "2025-07-21", "rating_point": 4.0, "location": "Las Vegas", "quantity": 5,"add_cart": "no","choose_quantity":0, "select":1, "category": "Quần dài"},
  { "product_image": "product-img/img19.webp", "name": "Digital Tablet", "price": 350.0, "created_at": "2025-07-22", "rating_point": 4.6, "location": "Orlando", "quantity": 9,"add_cart": "no","choose_quantity":0, "select":1, "category": "Tai Nghe giá Rẻ"},
  { "product_image": "product-img/img20.webp", "name": "Insulated Water Bottle", "price": 22.0, "created_at": "2025-07-17", "rating_point": 4.3, "location": "Minneapolis", "quantity": 6,"add_cart": "no","choose_quantity":0, "select":1, "category": "Tai Nghe giá Rẻ"}
]
// localStorage.setItem('products', JSON.stringify(data))
let inf = JSON.parse(localStorage.getItem('products'));
localStorage.removeItem('product');
// Nếu chưa có dữ liệu (lần đầu mở), khởi tạo mặc định và lưu
if (!inf || inf.length === 0) {
    localStorage.setItem('products', JSON.stringify(data)); // chỉ lưu 1 lần
}
// ---khai báo---
sizeList= document.querySelector('.list-product')
const list=document.querySelector('.list-product-table2')
const template=document.querySelector('.list-product-databox')
const shoppingCart= document.querySelector('.shoppingcart') // phan gio hang
y= parseFloat(window.getComputedStyle(sizeList).width)
windowSize= window.innerWidth
let x=0 // để chạy vòng for hiển thị ds 
let max=12 // sp tối đa lấy
var z=0 
var b=0
var direction=1
var m=0 // sp hiện tại
var a=0 // chạy sang phải
var hideBasket=0

//---hiển thị danh sách sản phẩm
var numberSelect=0//sp+search
addCart()
count()
loadingPage()
function loadingPage(){
  numberSelect=0
  inf=JSON.parse(localStorage.getItem('product'))
  if(!inf||inf.length==0){
    inf=JSON.parse(localStorage.getItem('products'))
  }
  inf.forEach(line => {
    if(line.select==1){
      numberSelect+=1
    }
  });
  list.style.display='flex'
  list.innerHTML = '';
  for(x;x<max;x++) {
    if (direction === 1) z+=1; 
    const clone = template.cloneNode(true)
    clone.style.display='block'
    const index=m-a+x
    clone.querySelector('.list-product-databox #list-product-data-name').textContent= inf[index].name
    clone.querySelector('.list-product-databox #list-product-data-price').textContent=inf[index].price + "  SL: " +inf[index].quantity
    clone.querySelector('.list-product-databox #list-product-data-point').textContent=inf[index].rating_point
    clone.querySelector('.list-product-databox #list-product-data-location').textContent=inf[index].location
    clone.querySelector('.list-product-databox .list-product-data-pt img').src=inf[index].product_image
    const add = clone.querySelector('.addcart')
    list.appendChild(clone)
    b+=1
    add.onclick= function(){
      if(inf[index].add_cart=='no'){
        inf[index].add_cart='yes'
        inf[index].choose_quantity=1
        localStorage.setItem('products', JSON.stringify(inf))
        addCart() 
        count()
        right()
      }  
      else{
        if(inf[index].choose_quantity<inf[index].quantity){
          inf[index].choose_quantity+=1
          localStorage.setItem('products', JSON.stringify(inf))
          addCart()
          count()
          right()
        }
        else{
          alert('Số lượng sản phẩm này đã hết!')
        }
      }
    }
    if(z==numberSelect) {break}
  }
  if(z==numberSelect){
    document.getElementById('turn-right').onclick = null
    document.getElementById('turn-right').style.backgroundColor='#f9f9f9'
    document.getElementById('turn-right').style.color='gray'
  }
  else{
    document.getElementById('turn-right').removeAttribute('style')
    document.getElementById('turn-right').onclick = turnRight
  }
  if(z-max>0){
    document.getElementById('turn-left').onclick = turnLeft
    document.getElementById('turn-left').style.backgroundColor='white'
    document.getElementById('turn-left').style.color='black'
  }
  else{
    document.getElementById('turn-left').removeAttribute('style')
    document.getElementById('turn-left').onclick = null
  }
}

// đổi sang phải
function turnRight(){
  b=0
  m=z
  x=0
  a=0
  direction=1
  loadingPage()
}
// đổi sang trái
function turnLeft(){
  m=z
  x=0
  a=b+max
  direction=0
  z-=b
  loadingPage()
}

//hiển thị số trang
// function showNumber(){
//   document.querySelectorAll('list-product-data')
// }

//---hiển thị giỏ hàng
function showHideBasket(){
  if(hideBasket==0){
    shoppingCart.style.display='block'
    hideBasket=1
  }
  else{
    shoppingCart.style.display='none'
    hideBasket=0
  }
}

// ---thêm sp vào giỏ
function addCart(){
  var toTal=0
  inf=JSON.parse(localStorage.getItem('products'))
  const list1= document.querySelector('.shoppingcart-products2')
  const template1= document.querySelector('.shoppingcart-product-box')
  list1.innerHTML=''
  list1.style.display='block'
  inf.forEach((choose,index) => {
    if(choose.add_cart=='yes'){
      const clone=template1.cloneNode(true)
      // clone.style.display=''
      clone.querySelector('.product-img img').src=choose.product_image
      clone.querySelector('.product-nameprice .product-name').textContent=choose.name
      clone.querySelector('.product-nameprice .product-price').textContent='Hiện có: ' +choose.quantity +'  Giá: '+ choose.price + 'đ' + '   ' 
      clone.querySelector('.quantity').textContent=choose.choose_quantity
      list1.appendChild(clone)
      push=clone.querySelector('.plus')
      push.onclick= function(){        
        if(inf[index].choose_quantity<inf[index].quantity){
          inf[index].choose_quantity+=1
          clone.querySelector('.quantity').textContent=inf[index].choose_quantity
          localStorage.setItem('products', JSON.stringify(inf))
          addCart()
          count()
        }
      }
      minus=clone.querySelector('.minus')
      minus.onclick= function(){        
        if(inf[index].choose_quantity>=1){
          inf[index].choose_quantity-=1
          clone.querySelector('.quantity').textContent=inf[index].choose_quantity
          localStorage.setItem('products', JSON.stringify(inf))
          addCart()
          if(inf[index].choose_quantity==0){
            inf[index].add_cart='no'
            localStorage.setItem('products', JSON.stringify(inf))
            addCart()
            count()
          }
        }
      }
      reMove=clone.querySelector('.product-remove')
      reMove.onclick=function(){
        inf[index].add_cart='no'
        inf[index].choose_quantity=0
        localStorage.setItem('products', JSON.stringify(inf))
        addCart()
        count()
      }
        total=inf[index].choose_quantity*inf[index].price
        toTal+=total
    }
  });
  document.querySelector('.total-price p').textContent= toTal+'đ'
}

//---checkout
function checkOut(){
  if(document.getElementById('haveType').textContent!=0){
    window.location.replace('shoppe-checkout.html')
  }
}

const infor = document.getElementById('search')
infor.addEventListener('keyup', function(event){
  if(event.key=='Enter')
    search()
})

//---search sp
function search(){
  localStorage.removeItem('product');
  const infor = document.getElementById('search')
  inf=JSON.parse(localStorage.getItem('products'))
  inf=inf.filter(line => line.name.trim().toLowerCase().includes(infor.value.trim().toLowerCase())||line.category.trim().toLowerCase().includes(infor.value.trim().toLowerCase()))
  localStorage.setItem('product', JSON.stringify(inf));
  z=0 
  b=0
  direction=1
  m=0 // sp hiện tại
  a=0
  x=0
  loadingPage()
  document.querySelector('.search-notification p').textContent='Kết quả tìm kiếm cho từ khóa '+ "'" + infor.value + "'"
}

//hiển thị số sp hiện có trong giỏ hàng
function count(){
  let count=0
  inf=JSON.parse(localStorage.getItem('products'))
  inf.forEach(infor => {
    if(infor.add_cart=='yes')
      count+=1
  })
  document.getElementById('haveType').textContent=count
}

//---lọc theo category
const suggestItems = document.querySelectorAll('.suggest div')
suggestItems.forEach(item=>{
  item.onclick= function(){
    document.getElementById('search').value=item.textContent
    search()
  }
})

//---thông báo cho vào giỏ hàng
function right(){
  document.querySelector('.success-box').style.display='block'
  document.querySelector('.success-box').onclick= function(){
    document.querySelector('.success-box').style.display='none'
  }
  setTimeout(function() {
    document.querySelector('.success-box').style.display='none'
}, 1500);
}