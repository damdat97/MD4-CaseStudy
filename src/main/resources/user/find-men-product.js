let listMenProduct = document.getElementById('content')

function showMenProduct() {
    let id = localStorage.getItem('id');
    $.ajax({
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        type: "GET",
        url: "http://localhost:8081/products/find-men-product",
        success: function (data) {
            let html = `<div class="super_container">
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
                            <a onclick="loadUserHome()">colo<span>shop</span></a>
                        </div>
                        <nav class="navbar">
                            <ul class="navbar_menu">
                                <li><a onclick="loadUserHome()">home</a></li>
                                <li><a onclick="showMyShop()">my shop</a></li>
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
                <div class="filter_button" onclick="filterByPrice()"><span>filter</span></div>
            
            </div>
            
            <div class="sidebar_section" style="padding: 10px">
                <div class="sidebar_title">
                    <h5>Find User Shop</h5>
                </div>
                    <input type="text" id="shopName" style="border:0; color:#ece8e8" placeholder="Shop">
                <div class="filter_button" onclick="findShopByName()"><span>Find</span></div>
            
            </div>
    </div>
            <div id="wrapper">
                <div class="headline">
                    <h2>Product List</h2>
                </div>
                <ul class="products">`
            for (let i = 0; i < data.length; i++) {
                if(data[i].user.id == id) {
                    html += `<li>
                            <div class="product_details">
                                <div>
                                    <div class="product-top" style="text-align: center">
                                        <div>
                                            <img style="height: 240px; width: 200px" src="${data[i].img}" alt="">
                                        </div>
                                        <div class="product-info"><b>${data[i].name}</b></div>
                                        <div class="product-price"><b>${data[i].price}</b></div>
                                        <div class="product-info"><b>${data[i].description}</b></div>
                                        <div class="product-info"><b>${data[i].quantity}</b></div>
                                        <div class="product-info"><b>${data[i].category.name}</b></div>
                                </div>
                            </div>
                            </div>
                        </li>`
                } if (data[i].user.id != id) {
                    html += `<li>
                            <div class="product_details">
                                <div>
                                    <div class="product-top" style="text-align: center">
                                        <div>
                                            <img style="height: 240px; width: 200px" src="${data[i].img}" alt="">
                                        </div>
                                        <div class="product-info"><b>Tên Sản Phẩm: ${data[i].name}</b></div>
                                        <div class="product-price"><b>Giá Sản Phẩm: ${data[i].price}</b></div>
                                        <div class="product-info"><b>Mô Tả Sản Phẩm: ${data[i].description}</b></div>
                                        <div class="product-info"><b>Số Lượng: ${data[i].quantity}</b></div>
                                        <div class="product-info"><b>Loại Sản Phẩm: ${data[i].category.name}</b></div>
                                </div>
                                <div class="btn-primary" style="text-align: center"><a onclick="addToCart(${data[i].id})" ><b>Add to cart</b></a></div>
                            </div>
                            </div>
                        </li>`
                }
            }
            html += `</ul>
            </div>
        </div>
    </div>
    <div class="benefit">
        <div class="container">
            <div class="row benefit_row">
                <div class="col-lg-3 benefit_col">
                    <div class="benefit_item d-flex flex-row align-items-center">
                        <div class="benefit_icon"><i class="fa fa-truck" aria-hidden="true"></i></div>
                        <div class="benefit_content">
                            <h6>free shipping</h6>
                            <p>Suffered Alteration in Some Form</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 benefit_col">
                    <div class="benefit_item d-flex flex-row align-items-center">
                        <div class="benefit_icon"><i class="fa fa-money" aria-hidden="true"></i></div>
                        <div class="benefit_content">
                            <h6>cach on delivery</h6>
                            <p>The Internet Tend To Repeat</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 benefit_col">
                    <div class="benefit_item d-flex flex-row align-items-center">
                        <div class="benefit_icon"><i class="fa fa-undo" aria-hidden="true"></i></div>
                        <div class="benefit_content">
                            <h6>45 days return</h6>
                            <p>Making it Look Like Readable</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 benefit_col">
                    <div class="benefit_item d-flex flex-row align-items-center">
                        <div class="benefit_icon"><i class="fa fa-clock-o" aria-hidden="true"></i></div>
                        <div class="benefit_content">
                            <h6>opening all week</h6>
                            <p>8AM - 09PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 <br>
<br>`
            listMenProduct.innerHTML = html
        }, error: function (data) {
            console.log(data)
        }
    })
}