let display = document.getElementById("display");
let addProductForm = document.getElementById("addProductForm");
let editProductForm = document.getElementById("editProductForm");

function listProduct() {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        type: "GET",
        url: "http://localhost:8081/products",
        success: function (data) {
            let str = "";
            for (let i = 0; i < data.length; i++) {
                str += ` ${data[i].name},${data[i].description},${data[i].price},${data[i].quantity},${data[i].category.name}, <img src="${data[i].img}" style="width: 50px; height: 50px">
                
                <button onclick="showEditForm(${data[i].id})">Edit</button>
                <button onclick="deleteProduct(${data[i].id})">Delete</button>
                <button onclick="AddToCart(${data[i].id})">Add To Cart</button>
                <br>`
            }
            display.innerHTML = str;
        }
    })

}

function showAddProductForm() {

    let html = `
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">     
                           
                        <label>Name:</label>
                        <input type='text'  id="name" class="form-control">
                        <label>Description:</label>
                        <input type='text' id="description" class="form-control">   
                        <label>Price:</label>
                        <input type='number' id="price" class="form-control"> 
                        <label>Quantity:</label>
                        <input type='number' id="quantity" class="form-control"> 
                        <label>Image:</label>
                        <input type="file" value="upload" accept=".jpg;.gif" id="fileButton" onchange="upload(event)">            </div>
                        <label>Category:</label>
                        <select id="category">`
    $.ajax({
        headers: {

            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        type: "GET",
        url: "http://localhost:8081/categories",
        success: function (category) {
            console.log(category);
            let str = "";
            for (let i = 0; i < category.length; i++) {
                str += `<option  value="${category[i].id}">${category[i].name}</option>`
            }
            document.getElementById('category').innerHTML = str;
        }

    })
    html += `</select>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="saveProduct()">Save</button>
            </div>
        </div>
    </div>
</div>`
    addProductForm.innerHTML = html;
    $('#addModal').modal('show');
}

function saveProduct() {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let file = localStorage.getItem(key);
    let categoryId = document.getElementById("category").value;
    let product = {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        img: file,
        category: {
            id: categoryId
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        ,
        type: "POST",
        url: "http://localhost:8081/products",
        data: JSON.stringify(product),
        success: function (product) {
            console.log(product);
            listProduct();
        }
    })
}

function showEditForm(id) {

    let edit = `
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">     
                         <input type="hidden" id="id">
                        <label>Name:</label>
                        <input type='text'  id="nameEdit" class="form-control">
                        <label>Description:</label>
                        <input type='text' id="descriptionEdit" class="form-control">   
                        <label>Price:</label>
                        <input type='number' id="priceEdit" class="form-control"> 
                        <label>Quantity:</label>
                        <input type='number' id="quantityEdit" class="form-control"> 
                        <label>Image:</label>
                        <div id="old-file"></div>
                        <input type="file" value="upload" accept=".jpg;.gif" id="fileButton" onchange="upload(event)">            </div>
                        <label>Category:</label>
                        <select id="category">`
    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        type: "GET",
        url: "http://localhost:8081/categories",
        success: function (category) {
            console.log(category);
            let str = "";
            for (let i = 0; i < category.length; i++) {
                str += `<option  value="${category[i].id}">${category[i].name}</option>`
            }
            document.getElementById('category').innerHTML = str;
        }

    })
    edit += `</select>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="editProduct()">Save</button>
            </div>
        </div>
    </div>
</div>`
    editProductForm.innerHTML = edit;
    $('#editModal').modal('show');
    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        type: "GET",
        url: "http://localhost:8081/products/" + id,
        success: function (products) {
            document.getElementById("id").value = products.id
            document.getElementById("nameEdit").value = products.name
            document.getElementById("descriptionEdit").value = products.description
            document.getElementById("priceEdit").value = products.price
            document.getElementById("quantityEdit").value = products.quantity
            document.getElementById("priceEdit").value = products.price
            document.getElementById("old-file").innerHTML = `<img src="${products.img}" width="100px" ">`
            console.log(products)
        }
    })
}

function editProduct() {
    let id = document.getElementById('id').value;
    let name = document.getElementById("nameEdit").value;
    let description = document.getElementById("descriptionEdit").value;
    let price = document.getElementById("priceEdit").value;
    let quantity = document.getElementById("quantityEdit").value;
    let img = localStorage.getItem(key);
    let categoryId = document.getElementById("category").value;
    let house = {
        name: name,
        description : description,
        price : price,
        quantity: quantity ,
        img: img,
        category: {
            id: categoryId
        }
    }
    $.ajax({
        type:"PUT",
        headers:{
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url:"http://localhost:8081/products/"+id,
        data :JSON.stringify(house),
        success: function () {
            $('#editModal').modal('hide');
            listProduct();
            localStorage.removeItem(key);
        },
        error: function (error) {
            console.log(error)
        }
    })
}

function deleteProduct(id){
    if (confirm("Bạn có chắc chắn muốn xoá sản phẩm ko ???")) {
        $.ajax({

            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },

            type: 'DELETE',
            url: 'http://localhost:8081/products/'+id,
            success: function (){
                listProduct()
            },
            error: function (error) {
                console.log(error)
            }
        })
    }
}