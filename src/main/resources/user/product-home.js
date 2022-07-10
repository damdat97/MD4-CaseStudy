let display = document.getElementById("content")

function loadUserHome() {
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
                            <a onclick="loadUserHome()">colo<span>shop</span></a>
                        </div>
                        <nav class="navbar">
                            <ul class="navbar_menu">
                                <li><a onclick="loadUserHome()">home</a></li>
                                <li><a href="/products?action=sell-list">my shop</a></li>
                                <li><a href="/order-details">single product</a></li>
                            </ul>
                            <ul class="navbar_user">
                                <li> <a onclick="sortProduct()"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                                <li><a href=""><i class="fa fa-user" aria-hidden="true"></i></a></li>
                                <li class="checkout">

                                    <a href="/orders?action=show">
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
        <div class="sidebar">
            <div class="sidebar_section">
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
            <div class="sidebar_section">
                <div class="sidebar_title">
                    <h5>Filter by Price</h5>
                </div>
               
                    <input type="text" id="amountFrom" style="border:0; color:#ece8e8" placeholder="Amount From">
                    <input type="text" id="amountTo" style="border:0; color:#fffdfd" placeholder="Amount To">
                
                <div id="slide
                <div class="filter_button" onclick="filterByPrice()"><span>filter</span></div>
            </div>
        </div>
        <div class="col product_section clearfix">

            <!-- Slider -->

            <div class="main_slider" style="background-image:url(/user/images/single_1.jpg)">
                <div class="container fill_height">
                    <div class="row align-items-center fill_height">
                        <div class="col">
                            <div class="main_slider_content">
                                <h6>Spring / Summer Collection 2017</h6>
                                <h1>Get up to 30% Off New Arrivals</h1>
                                <div class="red_button shop_now_button"><a href="/products?action=buy-list">shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Banner -->

            <div class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="banner_item align-items-center"
                                 style="background-image:url(/user/images/banner_1.jpg)">
                                <div class="banner_category">
                                    <a onclick="showWomenProduct()">Women's</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="banner_item align-items-center"
                                 style="background-image:url(/user/images/banner_2.jpg)">
                                <div class="banner_category">
                                    <a onclick="showAccessoryProduct()">Accessories's</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="banner_item align-items-center"
                                 style="background-image:url(/user/images/banner_3.jpg)">
                                <div class="banner_category">
                                    <a onclick="showMenProduct()">Men's</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <!-- Benefit -->

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
    
    <!-- Newsletter -->

    <div class="newsletter">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
                        <h4>Newsletter</h4>
                        <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <form action="post">
                        <div class="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
                            <input id="newsletter_email" type="email" placeholder="Your email" required="required" data-error="Valid email is required.">
                            <button id="newsletter_submit" type="submit" class="newsletter_submit_btn trans_300" value="Submit">subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->

    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                        <ul class="footer_nav">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="contact.jsp">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer_nav_container">
                        <div class="cr">©2018 All Rights Reserverd. Made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="#">Colorlib</a> &amp; distributed by <a href="https://themewagon.com">ThemeWagon</a></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</div>`
    display.innerHTML = str
}


