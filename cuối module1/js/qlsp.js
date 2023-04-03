// Lấy thẻ hình ảnh từ HTML
const myImage = document.getElementById("image");

// Lắng nghe sự kiện onchange của input
const imageInput = document.getElementById("imgProduct");

imageInput.onchange = function (event) {
  const file = event.target.files[0];

  // Đọc tệp ảnh và chuyển đổi nó thành dữ liệu URL
  const reader = new FileReader();
  reader.onload = function (event) {
    const dataUrl = event.target.result;

    // Thiết lập nguồn ảnh của đối tượng ảnh với dữ liệu URL
    myImage.src = dataUrl;

    // Lưu dữ liệu URL vào local storage
    localStorage.setItem("myImage", dataUrl);

    // // Hiển thị ảnh
    // imgElement.src = dataUrl;
  };
  reader.readAsDataURL(file);
 
};
function saveInfo(){
    let idInput = document.getElementById("id").value;
    let nameInput = document.getElementById("name").value;
    console.log(nameInput);
    let imgInput = localStorage.getItem("myImage");
    let sl = document.getElementById("soluong").value;
    let priceInput = document.getElementById("price").value;
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    let infoProduct = {
        id: idInput,
        name: nameInput,
        img: imgInput,
        quantity: sl,
        price: parseInt(priceInput),

    }
    if ( listProduct == null){
        listProduct = [];
        listProduct.push(infoProduct);
        localStorage.setItem("listProduct", JSON.stringify(listProduct));
    }else{
        listProduct.push(infoProduct);
        localStorage.setItem("listProduct", JSON.stringify(listProduct));
    }
    renderProduct();
}
function renderProduct(){
    const VND = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    let result = `
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>image</td>
            <td>price</td>
            <td>so luong</td>
        </tr>
    `
    let total = 0;
    for (let i = 0; i < listProduct.length;i++){
        let subTotal = listProduct[i].sl * listProduct[i].price;
             sub = VND.format(subTotal);
      total+=subTotal;
        result += `
        <tr>
            <td>${listProduct[i].id}</td>
            <td>${listProduct[i].name}</td>
            <td><img src="${listProduct[i].img}"></td>
            <td>${listProduct[i].price}</td>
            <td>${listProduct[i].quantity}</td>
            <td><button onclick="xoaBut(${i})">Xoa</button></td>
            <td><button onclick="sua(${i})">Sua</button></td>
        </tr>
        `
    }
    
    document.getElementById("table").innerHTML = result;    
    console.log(result);
}
renderProduct()




function xoaBut(id){
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    listProduct.splice(id,1);
    localStorage.setItem("listProduct", JSON.stringify(listProduct));
    renderProduct();
}

function sua(id){
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    document.getElementById("id").value = listProduct[id].ID;
    document.getElementById("name").value = listProduct[id].name;
    document.getElementById("price").value = listProduct[id].price;
}
