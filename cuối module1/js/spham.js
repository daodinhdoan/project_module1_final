
// let productIem = [
//    {
//       id : 0 ,
//       img : "/image/ip12.webp" ,
//       name : "Iphone 12 promax" ,
//       price : 17000000,
      
//    },
//    {
//       id : 1 ,
//       img : "/image/ip11.jpeg" ,
//       name : "Iphone 11 promax",
//       price : 11000000,
     
//    },
//    {
//       id : 2 ,
//       img : "/image/ip14.jpg" ,
//       name : "Iphone 14 promax",
//       price : 24000000,
     
//    },
//    {
//       id : 3 ,
//       img : "/image/ip8.jpg",
//       name :"Iphone 8 plus",
//       price : 7000000,
      
//    },
//    {
//       id : 4,
//       img : "/image/iphone7.png",
//       name :"Iphone 7",
//       price : 5000000,
     
//    }

// ]
//  localStorage.setItem("listProduct",JSON.stringify(productIem));

  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
function renderProduct() {
   let result = "";
   for (let i = 0; i < listProduct.length; i++) {
      result +=
         `  
      <div class="product-item">
          <img src="${listProduct[i].img}" alt="">
      <div class="text">
            <p><span>${listProduct[i].price}</span><sup>đ</sup></p>
            <h1>${listProduct[i].name}</h1>
      </div>
            <button onclick="addToCart(${listProduct[i].id})" >Thêm vào giỏ hàng</button>
      </div>
      `
   }
   document.getElementsByClassName("product-items")[0].innerHTML = result
}

renderProduct()



function addToCart(id) {
   let listProduct = JSON.parse(localStorage.getItem("listProduct"));
   let listProductCart = JSON.parse(localStorage.getItem("listProductCart"));
   // if (listcart == null) {
   //    listcart = [];
   //    listcart.push(listProduct[id]);
   //    localStorage.setItem("listcart", JSON.stringify(listcart));
   // }
   // let flag = false;
   // for (let i = 0; i < listcart.length; i++) {
   //    if (listcart[i].id == id) {
   //       flag = true;
   //       break;
   //    }
   // }
   // if (!flag) {
   //    for (let i = 0; i < listProduct.length; i++) {
   //       if (listProduct[i].id == id) {
   //          listcart.push(listProduct[i]);
   //          localStorage.setItem("listcart", JSON.stringify(listcart));
   //       }
   //    }
   // }
   if ( listProductCart == null){
      listProductCart = []
   }
   for (let index = 0; index < listProduct.length; index++) {
      if (listProduct[index].id == id) {
        let flag = true;
        for (let i = 0; i < listProductCart.length; i++) {
          if (
            listProductCart[i].id == id 
          ) {
            flag = false;
            break;
          } else {
            flag = true;
          }
        }
        if (!flag) {
          alert("san pham da co")
        } else {
          listProductCart.push(listProduct[index]);
          localStorage.setItem(
            "listProductCart",
            JSON.stringify(listProductCart)
          );
          alert("da them vao gio hang")
        }
        break;
      }
    }
   let soluong = (document.getElementById("soluong").innerHTML = listProductCart.length);
   localStorage.setItem("soluong", JSON.stringify(soluong));
}
