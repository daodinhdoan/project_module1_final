
const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function rederCart () {
   let dataCart = JSON.parse(localStorage.getItem("listProductCart"));
   // let totalAll = 0;
   if(dataCart == null){
      dataCart = []
   }
    let result = `
    <tr>
       <th>Sản Phẩm</th>
       <th>Tên</th>
       <th>Giá</th>
       <th>Số Lượng</th>
       <th>Thành Tiền</th>
       <th></th>
    </tr>
    `;
   let total = 0;
    for (let i = 0 ; i < dataCart.length;i++){
      subTotal = dataCart[i].price * dataCart[i].quantity;
      total+=subTotal;
      result += 
       `  
   <tr >
       <td><img src="${dataCart[i].img}" alt=""></td>
       <td>${dataCart[i].name}</td>
       <td><span>${dataCart[i].price}</span></td>
       <td> <button class="btnQuantity" onclick="minus(${i})">-</button>
       <span id="amountProduct">${dataCart[i].quantity}</span>
       <button class="btnQuantity" onclick="plus(${i})">+</button>
       </td>
       <td>${total}</td>
       
       <td><button onclick="detele(${i})">Xóa</button></td>
   </tr>
       `
       ;
    }
    document.getElementById("tableProduct").innerHTML = result;
 }
 rederCart ()

 function changeCountProduct(id,element){
   console.log(element.value);
   let dataCart = JSON.parse(localStorage.getItem("listProductCart"));
   for (let i = 0; i < dataCart.length; i++) {
      if(dataCart[i].id==id){
         dataCart[i].sl = element.value;
         break;
      }
   }
   localStorage.setItem("listProductCart",JSON.stringify(dataCart));
   rederCart () ;
 }
 function plus(id){
   let dataCart = JSON.parse(localStorage.getItem("listProductCart"));
   dataCart[id].quantity++;
   localStorage.setItem("listProductCart",JSON.stringify(dataCart));
rederCart();
 }
 function minus(index){
   let dataCart = JSON.parse(localStorage.getItem("listProductCart"));
   
   if(dataCart[index].quantity> 0){
      dataCart[index].quantity--;
      if(dataCart[index.quantity==0]){
      let confirm2 =confirm("bạn có muốn xóa không");
      if(confirm2){
         dataCart.splice(index,1);
         localStorage.setItem("listProductCart",JSON.stringify(dataCart));
         
      }else{
         return;
      }
   }
   localStorage.setItem("listProductCart",JSON.stringify(dataCart));
   }
   rederCart();
 }
 function detele (id){
   let dataCart = JSON.parse(localStorage.getItem("listProductCart"));

   dataCart.splice(id,1)
   //  document.getElementById("soluong").innerHTML = cartList.length;
   localStorage.setItem("listProductCart",JSON.stringify(dataCart));
   rederCart ()
 }