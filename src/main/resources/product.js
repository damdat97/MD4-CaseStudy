let display = document.getElementById("display");
let addProductForm = document.getElementById("addProductForm");

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
                str += ` ${data[i].description},${data[i].price},${data[i].name},${data[i].quantity},${data[i].category.name}, <img src="${data[i].img}" style="width: 50px; height: 50px">`

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
    let file = localStorage.getItem(key);
    let categoryId = document.getElementById("category").value;
    let product = {
        name: name,
        description: description,
        price: price,
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