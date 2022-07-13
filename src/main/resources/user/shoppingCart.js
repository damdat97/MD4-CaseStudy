let showCart = document.getElementById("content");

function showShoppingCart() {
    let str = `<div class="super_container">
    <!-- Header -->
    <header class="header trans_300">
        <!-- Top Navigation -->
        <div class="top_nav">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="top_nav_left">Free shipping on all u.s orders over $50</div>
                    </div>
                    <div class="col-md-6 text-right">
                        <div class="top_nav_right">
                            <ul class="top_nav_menu">
                                <!-- Currency / Language / My Account -->
                                <li class="account">
                                    <a href="#">
                                        My Account
                                        <i class="fa fa-angle-down"></i>
                                    </a>
                                    <ul class="account_selection">
                                       <li><a onclick="showLoginForm()" "><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                                       <li><a onclick="showRegisterForm()"><i class="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
                                        <li><a onclick="logout()"><i class="fa fa-user-plus" aria-hidden="true"></i>LogOut</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Navigation -->

        <div class="main_nav_container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-right">
                        <div class="logo_container">
                            <a onclick="loadUserHome()">Sam's<span> Shop</span></a>
                        </div>
                        <nav class="navbar">
                            <ul class="navbar_menu">
                                <li><a onclick="loadUserHome()">Home</a></li>
                                <li><a onclick="showMyShop()">My shop</a></li>  
                            </ul>
                            <ul class="navbar_user">
                                <li> <a onclick=""><i class="fa fa-search" aria-hidden="true"></i></a></li>
                                <li><a href=""><i class="fa fa-user" aria-hidden="true"></i></a></li>
                                <li class="checkout">

                                    <a onclick="showShoppingCart()">
                                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        <span id="checkout_items" class="checkout_items"></span>
                                    </a>
                                </li>
                            </ul>
                            <div class="hamburger_container">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    </header>

        <div class="fs_menu_overlay"></div>
        <div class="container product_section_container">
    <div class="row">
        <div class="sidebar" style="z-index: 0">
            <div class="sidebar_section" style="padding: 10px;">
                <div class="sidebar_title">
                    <h5>Category</h5>
                </div>
                <ul class="sidebar_categories">
                    <li class="active"><a onclick="showMenProduct()"><span><i class="fa fa-angle-double-right"
                                                            aria-hidden="true"></i></span>Men</a></a></li>
                    <li class="active"><a onclick="showWomenProduct()"><span><i class="fa fa-angle-double-right"
                                                            aria-hidden="true"></i></span>Women</a></li>
                    <li class="active"><a onclick="showAccessoryProduct()"><span><i class="fa fa-angle-double-right"
                                                            aria-hidden="true"></i></span>Accessory</a></a></li>
                    <li class="active"><a onclick="showNewArrival()"><span><i class="fa fa-angle-double-right"
                                                            aria-hidden="true"></i></span>New Arrival</a></a></li>
                </ul>
            </div>

            <!-- Price Range Filtering -->
            <div class="sidebar_section" style="padding: 10px">
                <div class="sidebar_title">
                    <h5>Filter by Price</h5>
                </div>
                    <input type="number" id="amountFrom" style="border:0; color:#ece8e8" placeholder="Amount From">
                    <input type="number" id="amountTo" style="border:0; color:#fffdfd" placeholder="Amount To">
                <div class="filter_button" onclick="filterByPrice()"><span>Filter</span></div>
            
            </div>
            
            <div class="sidebar_section" style="padding: 10px">
                <div class="sidebar_title">
                    <h5>Find User Shop</h5>
                </div>
                    <input type="text" id="shopName" style="border:0; color:#ece8e8" placeholder="Shop">
                <div class="filter_button" onclick="findShopByName()"><span>Find</span></div>
            
            </div>
    </div>
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
                                        <th style="text-align: center">Name</th>
                                        <th style="text-align: center">Image</th>
                                        <th style="text-align: center">Price</th>
                                        <th style="text-align: center">Quantity</th>
                                        <th style="text-align: center">Total Price</th>
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
              <div class="row col-12 d-flex justify-content-center">
                         <button type="submit" class="btn btn-primary mr-2" onclick="paymentShoppingCart(${data[i].id})" style="margin-left: 50px">Order</button>
              </div>
               </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                <footer class="footer">
                    <div class="d-sm-flex justify-content-center justify-content-sm-between">
                        <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2022 <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap Dash</a>. All rights reserved.</span>
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
            showShoppingCart();
        },
        error: function () {
            alert("Not enough quantity in stock")
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
        },
        error: function () {
            alert("Not enough quantity in stock")
        }
    })
}

function deleteShoppingCart(id) {
    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }, type: "DELETE", url: "http://localhost:8081/shopping-cart/cart/" + id,
        success: function (data) {
            console.log(data);
            alert("Delete success");
            showShoppingCart();
        }
    })
}

function paymentShoppingCart(id) {
    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }, type: "DELETE", url: "http://localhost:8081/shopping-cart/order/" + id,
        success: function (data) {
            console.log(data);
            alert("Order success");
            showShoppingCart();
        }
    })
}

function showEditCart(idCartItem) {
    let str = `<div class="super_container">
    <!-- Header -->
    <header class="header trans_300">
        <!-- Top Navigation -->
        <div class="top_nav">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="top_nav_left">Free shipping on all u.s orders over $50</div>
                    </div>
                    <div class="col-md-6 text-right">
                        <div class="top_nav_right">
                            <ul class="top_nav_menu">
                                <!-- Currency / Language / My Account -->
                                <li class="account">
                                    <a href="#">
                                        My Account
                                        <i class="fa fa-angle-down"></i>
                                    </a>
                                    <ul class="account_selection">
                                       <li><a onclick="showLoginForm()" "><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                                       <li><a onclick="showRegisterForm()"><i class="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
                                        <li><a onclick="logout()"><i class="fa fa-user-plus" aria-hidden="true"></i>LogOut</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Navigation -->

        <div class="main_nav_container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-right">
                        <div class="logo_container">
                            <a onclick="loadUserHome()">Sam's<span> Shop</span></a>
                        </div>
                        <nav class="navbar">
                            <ul class="navbar_menu">
                                <li><a onclick="loadUserHome()">Home</a></li>
                                <li><a onclick="showMyShop()">My shop</a></li>  
                            </ul>
                            <ul class="navbar_user">
                                <li> <a onclick=""><i class="fa fa-search" aria-hidden="true"></i></a></li>
                                <li><a href=""><i class="fa fa-user" aria-hidden="true"></i></a></li>
                                <li class="checkout">

                                    <a onclick="showShoppingCart()">
                                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        <span id="checkout_items" class="checkout_items"></span>
                                    </a>
                                </li>
                            </ul>
                            <div class="hamburger_container">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    </header>

        <div class="fs_menu_overlay"></div>
        <div class="container product_section_container">
    <div class="row">
        <div class="sidebar" style="z-index: 0">
            <div class="sidebar_section" style="padding: 10px;">
                <div class="sidebar_title">
                    <h5>Category</h5>
                </div>
                <ul class="sidebar_categories">
                    <li class="active"><a onclick="showMenProduct()"><span><i class="fa fa-angle-double-right"
                                                            aria-hidden="true"></i></span>Men</a></a></li>
                    <li class="active"><a onclick="showWomenProduct()"><span><i class="fa fa-angle-double-right"
                                                            aria-hidden="true"></i></span>Women</a></li>
                    <li class="active"><a onclick="showAccessoryProduct()"><span><i class="fa fa-angle-double-right"
                                                            aria-hidden="true"></i></span>Accessory</a></a></li>
                    <li class="active"><a onclick="showNewArrival()"><span><i class="fa fa-angle-double-right"
                                                            aria-hidden="true"></i></span>New Arrival</a></a></li>
                </ul>
            </div>

            <!-- Price Range Filtering -->
            <div class="sidebar_section" style="padding: 10px">
                <div class="sidebar_title">
                    <h5>Filter by Price</h5>
                </div>
                    <input type="number" id="amountFrom" style="border:0; color:#ece8e8" placeholder="From Price">
                    <input type="number" id="amountTo" style="border:0; color:#fffdfd" placeholder="To Price">
                <div class="filter_button" onclick="filterByPrice()"><span>Filter</span></div>
            
            </div>
            
            <div class="sidebar_section" style="padding: 10px">
                <div class="sidebar_title">
                    <h5>Find User Shop</h5>
                </div>
                    <input type="text" id="shopName" style="border:0; color:#ece8e8" placeholder="Shop">
                <div class="filter_button" onclick="findShopByName()"><span>Find</span></div>
            
            </div>
    </div>
        <div class="main-panel">
            <div class="content-wrapper">
                <div class="page-header">
                    <h3 class="page-title">Edit Shopping Cart <i class="fa-solid fa-pen-to-square" style="margin-left: 10px"></i></h3>
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
            str += ` <div class="row" style="color: black">
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
                                                <label class="col-sm-3 col-form-label">Name:</label>
                                                <div class="col-sm-9">
                                                    <input type="text" id="nameEdit" class="form-control" value="${data.name}" readonly/>
                                                </div>
                                            </div>
                                        </div>
                                     
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Price</label>
                                                <div class="col-sm-9">
                                                    <input type="text" id="priceEdit" class="form-control" value=" ${data.product.price}" readonly/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Quantity</label>
                                                <div class="col-sm-9">
                                                    <input type="text" id="quantityEdit" class="form-control" id="quantityEdit" value="${data.quantity}"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Total Price</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" value="${data.quantity * data.product.price}" readonly/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row col-12 d-flex justify-content-center">
                                            <button type="submit" class="btn btn-primary mr-2" onclick="updateShoppingCart(${data.id})" style="margin-left: 50px">Save</button>
                                        </div>
                                    </div>`
            showCart.innerHTML = str
        }
    })
}