let show = document.getElementById("display");

function showShoppingCart() {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        type: "GET",
        url: "http://localhost:8081/shopping-cart/" + localStorage.getItem('id'),
        success: function (data) {
            let str = "";
            for (let i = 0; i < data.length; i++) {
                str += ` ${data[i].product.name},${data[i].product.price},${data[i].quantity},${data[i].product.price * data[i].quantity}, <img src="${data[i].product.img}" style="width: 50px; height: 50px">`
            }
            show.innerHTML = str;
        }
    })
}
function AddToCart(id) {
    let userId = localStorage.getItem('id');
    let cartItem = {
        quantity: 1,
        product: {
            id: id
        },
        user: {
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