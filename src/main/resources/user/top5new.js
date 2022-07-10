<!-- New Arrivals -->

< div class="new_arrivals">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <div class="section_title new_arrivals_title">
                    <h2>New Arrivals</h2>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="product-grid">
                    <div class="product-item men" id="showProduct">`
                        $.ajax({
                            headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        },
                            type: "GET",
                            url: "http://localhost:8081/products/find-top-5-newest",
                            success: function (data) {
                            let html = ""
                            for (let i = 0; i < data.length; i++) {
                            html += `<div>
                                    <div class="product_image">
                                        <img src="${data[i].img}">
                                    </div>
                                    <div class="favorite favorite_left"></div>
                                    <div class="product_info">
                                        <h6 class="product_name"><a href="homepage.jsp">${data[i].name}</a></h6>
                                        <div class="product_price">${data[i].price}</div>
                                    </div>
                                </div>
                                <div class="red_button add_to_cart_button"><a href="/checkout/responsive-shopping-cart-layout/check-out.jsp">add to cart</a></div>`
                        }
                            document.getElementById('showProduct').innerHTML = html
                        },
                        })
                        str += `<div class="red_button add_to_cart_button"><a href="/checkout/responsive-shopping-cart-layout/check-out.jsp">add to cart</a></div>
                    </div>
                </div>