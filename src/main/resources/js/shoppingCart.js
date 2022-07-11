let showCart = document.getElementById("content");

function showShoppingCart() {
    let str = `<div class="container-scroller">
    <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="navbar-menu-wrapper d-flex align-items-center flex-grow-1">
            <h5 class="mb-0 font-weight-medium d-none d-lg-flex">Welcome Sam's dashboard!</h5>
            <ul class="navbar-nav navbar-nav-right ml-auto">
                    <li class="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
                    <input type="text" id="name" placeholder="Name"> 
                    <button type="submit" onclick="findByName()" style="margin-right: 10px; margin-left: 5px">Search</button>
                    <a onclick="logout()">Logout</a><i class="fa-solid fa-arrow-right-from-bracket" style="margin-left: 5px"></i>
                </li>
            </ul>
            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span class="icon-menu"></span>
            </button>
        </div>
    </nav>
    <div class="container-fluid page-body-wrapper">
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
                <li class="nav-item nav-profile">
                    <a href="#" class="nav-link">
                        <div class="text-wrapper">
                            <p class="designation">User</p>
                        </div>
                        <div class="icon-container">
                            <i class="fa-solid fa-chart-scatter-bubble"></i>
                            <div class="dot-indicator bg-danger"></div>
                        </div>
                    </a>
                </li>
                <li class="nav-item nav-category">
                    <span class="nav-link">Dashboard</span>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onclick="loadAdminDashboard()">
                        <span class="menu-title">Dashboard</span>
                        <i class="fa-solid fa-desktop" style="margin-left: 10px"></i>
                    </a>
                </li>
                <li class="nav-item nav-category"><span class="nav-link">Management</span></li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#product" aria-expanded="false"
                       aria-controls="product">
                        <span class="menu-title">User Management</span>
                        <i class="fa-solid fa-users" style="margin-left: 10px"></i>
                    </a>
                    <div class="collapse" id="product">
                        <ul class="nav flex-column sub-menu">
                            <li class="nav-item"> <a class="nav-link" onclick="loadUserList()">User List</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- partial -->
        <div class="main-panel">
            <div class="content-wrapper">
                <div class="page-header">
                    <h3 class="page-title">Cart</h3>
                </div>
                <div class="row">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th style="text-align: center">Tên</th>
                                        <th style="text-align: center">Hình ảnh</th>
                                        <th style="text-align: center">Giá</th>
                                        <th style="text-align: center">Số Lượng</th>
                                        <th style="text-align: center">Tổng giá</th>
                                    </tr>
                                    </thead>
                                    <tbody>`;
    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        type: "GET",
        url: "http://localhost:8081/shopping-cart/" + localStorage.getItem('id'),
        success: function (data) {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                str += `<tr>
                            <td style="text-align: center">${data[i].product.name}</td>
                            <td style="text-align: center"><img src="${data[i].product.img}" style="width: 50px; height: 50px"</td>
                            <td style="text-align: center"> ${data[i].product.price}</td>
                            <td style="text-align: center">${data[i].quantity}</td>
                            <td style="text-align: center">${data[i].quantity * data[i].product.price}</td>
                            <td width="10px">
                                <a onclick="showEditCart(${data[i].id})" class="nav-link"><i class="fa-solid fa-pencil" style="margin-right: 5px"></i>Edit</a>
                            </td>
                            <td width="10px">
                                <a onclick="deleteShoppingCart(${data[i].id})" class="nav-link"><i class="fa-solid fa-trash" style="margin-right: 5px"></i>Delete</a>
                            </td>
                         </tr>
                  </tbody>
              </table>
               </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <footer class="footer">
                    <div class="d-sm-flex justify-content-center justify-content-sm-between">
                        <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2017 <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap Dash</a>. All rights reserved.</span>
                        <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="icon-heart text-danger"></i></span>
                    </div>
                </footer>
            </div>
        </div>
    </div>`;
            }
            showCart.innerHTML = str;
        }
    })
}

function addToCart(id) {
    let userId = localStorage.getItem('id');
    let cartItem = {
        quantity: 1, product: {
            id: id
        }, user: {
            id: userId
        },
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        type: "POST",
        url: "http://localhost:8081/shopping-cart",
        data: JSON.stringify(cartItem),
        success: function (cartItem) {
            console.log(cartItem);
            alert("Product added to bill");
        }
    })
}

function updateShoppingCart(id) {
    let userId = localStorage.getItem('id');
    let productId = document.getElementById('idProductEdit').value;
    let quantity = document.getElementById('quantityEdit').value;
    let cartItem = {
        quantity: quantity, product: {
            id: productId
        }, user: {
            id: userId
        },
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        type: "PUT",
        url: "http://localhost:8081/shopping-cart/cart/" + id,
        data: JSON.stringify(cartItem),
        success: function (cartItem) {
            console.log(cartItem);
            showShoppingCart();
            alert("Update success");
        }
    })
}

function deleteShoppingCart(id) {
    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }, type: "DELETE", url: "http://localhost:8081/shopping-cart/cart/" + id, success: function (data) {
            console.log(data);
            alert("Delete success");
            showShoppingCart();
        }
    })
}

function showEditCart(idCartItem) {
    let str = `<div class="container-scroller">
    <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="navbar-menu-wrapper d-flex align-items-center flex-grow-1">
            <h5 class="mb-0 font-weight-medium d-none d-lg-flex">Welcome Sam's dashboard!</h5>
            <ul class="navbar-nav navbar-nav-right ml-auto">
               
                    <input type="text" id="name" placeholder="Name"> 
                    <button type="submit" onclick="findByName()">Search</button>
              
                <li class="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
                    <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown"
                       aria-expanded="false">
                        <span class="font-weight-normal"> Admin </span></a>
                    <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                        <div class="dropdown-header text-center">
                            <p class="mb-1 mt-3">Admin</p>
                        </div>
                        <a class="dropdown-item"><i class="dropdown-item-icon icon-user text-primary"></i> My Profile
                            <span class="badge badge-pill badge-danger">1</span></a>
                        <a class="dropdown-item"><i class="dropdown-item-icon icon-speech text-primary"></i>
                            Messages</a>
                        <a class="dropdown-item"><i class="dropdown-item-icon icon-energy text-primary"></i>
                            Activity</a>
                        <a class="dropdown-item"><i class="dropdown-item-icon icon-question text-primary"></i> FAQ</a>
                        <a href="/login" class="dropdown-item"><i class="dropdown-item-icon icon-power text-primary"></i>Sign Out</a>
                    </div>
                </li>
            </ul>
            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span class="icon-menu"></span>
            </button>
        </div>
    </nav>
    <div class="container-fluid page-body-wrapper">
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
                <li class="nav-item nav-profile">
                    <a href="#" class="nav-link">
                        <div class="text-wrapper">
                            <p class="designation">Administrator</p>
                        </div>
                        <div class="icon-container">
                            <i class="fa-solid fa-chart-scatter-bubble"></i>
                            <div class="dot-indicator bg-danger"></div>
                        </div>
                    </a>
                </li>
                <li class="nav-item nav-category">
                    <span class="nav-link">Dashboard</span>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onclick="loadAdminDashboard()">
                        <span class="menu-title">Dashboard</span>
                        <i class="fa-solid fa-desktop" style="margin-left: 10px"></i>
                    </a>
                </li>
                <li class="nav-item nav-category"><span class="nav-link">Management</span></li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#product" aria-expanded="false"
                       aria-controls="product">
                        <span class="menu-title">User Management</span>
                        <i class="fa-solid fa-users" style="margin-left: 10px"></i>
                    </a>
                    <div class="collapse" id="product">
                        <ul class="nav flex-column sub-menu">
                            <li class="nav-item"> <a class="nav-link" onclick="loadUserList()">User List</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="main-panel">
            <div class="content-wrapper">
                <div class="page-header">
                    <h3 class="page-title">Sửa thông tin đơn hàng <i class="fa-solid fa-pen-to-square" style="margin-left: 10px"></i></h3>
                </div>
                <div class="row">
                    <div class="col-12 grid-margin">
                        <div class="card">
                            <div class="card-body">`
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },

        type: 'GET', url: 'http://localhost:8081/shopping-cart/cart/' + idCartItem, success: function (data) {
            console.log(data)
            str += `<p class="card-description"> Thông tin cá nhân </p>
                                    <div class="row" style="color: black">
                                     <div class="col-md-12">
                                            <div class="form-group row">
                                                <div class="col-sm-12 d-flex justify-content-center">
                                                    <img src="${data.product.img}" style="width: 250px; height: 250px">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                            <input type="hidden" id="idProductEdit" value="${data.product.id}">
                                                <label class="col-sm-3 col-form-label">Tên:</label>
                                                <div class="col-sm-9">
                                                    <input type="text" id="nameEdit" class="form-control" value="${data.name}" readonly/>
                                                </div>
                                            </div>
                                        </div>
                                     
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Giá</label>
                                                <div class="col-sm-9">
                                                    <input type="text" id="priceEdit" class="form-control" value=" ${data.product.price}" readonly/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Số lượng</label>
                                                <div class="col-sm-9">
                                                    <input type="text" id="quantityEdit" class="form-control" id="quantityEdit" value="${data.quantity}"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Tổng giá</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" value="${data.quantity * data.product.price}" readonly/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row col-12 d-flex justify-content-center">
                                            <button type="submit" class="btn btn-primary mr-2" onclick="updateShoppingCart(${data.id})" style="margin-left: 50px">Lưu</button>
                                        </div>
                                    </div>`
            showAdmin.innerHTML = str
        }
    })
}