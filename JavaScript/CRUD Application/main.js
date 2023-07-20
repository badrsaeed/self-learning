var inputs = document.getElementsByClassName("form-control");
var products = [];
var currentIndex = -1;

document.getElementById("addBtn").addEventListener('click', () => {
    if(document.getElementById("addBtn").innerHTML === "Update product")
        updateProduct(currentIndex);
    else
        AddProduct();
    localStorage.setItem("productList", JSON.stringify(products));
    displayProducts();
})



products = JSON.parse(localStorage.getItem("productList")) ? JSON.parse(localStorage.getItem("productList")) : [];
displayProducts();

function AddProduct(){

    var product ={
        name:inputs[0].value,
        price: inputs[1].value,
        category: inputs[2].value,
        desc:inputs[3].value
    }
    products.push(product);
    clearInputsFields();
}

function displayProducts(){
    var tableContent = '';
    for (let i = 0; i < products.length; i++) {
        tableContent += `<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button onclick="getProductInfo(${i})" class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`
    }
    document.getElementById("tableBody").innerHTML = tableContent;

   
}

function clearInputsFields(){
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value ="";
    }
}

function deleteProduct(index){
    console.log(index);
    products.splice(index,1);
    displayProducts();
    localStorage.setItem("productList", JSON.stringify(products));
}

document.getElementById("searchInput").addEventListener('keyup', ()=>{
    var tableContent = '';
    for (let i = 0; i < products.length; i++) {
        if(products[i].name.toLowerCase().includes(document.getElementById("searchInput").value.toLowerCase()))
            tableContent += `<tr>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].category}</td>
            <td>${products[i].desc}</td>
            <td><button onclick="getProductInfo(${i})" class="btn btn-warning">Update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
            </tr>`
    }
    document.getElementById("tableBody").innerHTML = tableContent;

})

function getProductInfo(productIndex){
    var product = products[productIndex];
    currentIndex = productIndex;
    inputs[0].value = product.name;
    inputs[1].value = product.price;
    inputs[2].value = product.category;
    inputs[3].value = product.desc;
    
    document.getElementById("addBtn").innerHTML = "Update product";
}

function updateProduct(){
    var product ={
        name:inputs[0].value,
        price: inputs[1].value,
        category: inputs[2].value,
        desc:inputs[3].value
    }

    products[currentIndex]= product;

    document.getElementById("addBtn").innerHTML = "Add product"
    clearInputsFields();
}