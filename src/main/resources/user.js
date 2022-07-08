let str = document.getElementById("content")

let home = document.getElementById("home");
function showRegisterForm() {
    str.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h3>Register</h3>
                    </div>
                    <div class="card-body">
                       
                            <div>
                                <label >Username</label>
                                <input type="text" class="form-control" id="usernameRegister" placeholder="Enter username">
                            </div>
                            <div >
                                <label >Password</label>
                                <input type="password" class="form-control" id="passwordRegister" placeholder="Enter password">
                            </div>
                            <div >
                                <label >Confirm Password</label>
                                <input type="password" class="form-control" id="confirmPassword" placeholder="Enter password">
                            </div>
                            <button type="submit" class="btn btn-primary" onclick="register()">Register</button>
                  
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

function logout() {
    localStorage.removeItem('token');
    showLoginForm();
}

function register() {
    let username = document.getElementById("usernameRegister").value;
    let password = document.getElementById("passwordRegister").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let user = {
        username: username,
        password: password,
        confirmPassword: confirmPassword
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8081/register",
        data: JSON.stringify(user),
        success: function (user) {
            console.log(user);
            showLoginForm();
        }
    })
}

function showLoginForm() {
    str.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h3>Login</h3>
                    </div>
                    <div class="card-body">
                       
                            <div >
                                <label for="username">Username</label>
                                <input type="text" class="form-control" id="username" placeholder="Enter username">
                            </div>
                            <div >
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter password">
                            </div>
                            <button type="submit" class="btn btn-primary" onclick="login()">Login</button>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}


function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let data= {
        username: username,
            password: password
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8081/login",
        data: JSON.stringify(data),
        success: function (data) {
            if (data.roles[0].authority === "ROLE_USER") {
                console.log(data);
                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('id', data.id);
                showUserRole();
            }
            if (data.roles[0].authority === "ROLE_ADMIN") {
                console.log(data)
                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('id', data.id);
                loadAdminDashboard()
            }
            if (data.roles[0].authority === "ROLE_USELESS") {
                console.log(data)
                uselessHome()
            }
        },
        error: function (error) {
            console.log(error)
        }
    })

}

function showUserRole() {
    home.innerHTML = `<button onclick="listProduct()">List Product</button>
    <button onclick="showAddProductForm()">Add Product</button>
    <button onclick="showShoppingCart()">Cart</button>`
    <button onclick="showAddProductForm()">Add Product</button>
    <button onclick="showBill()">List_Bill</button>`
}

function uselessHome() {
    let html = `<div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">ERROR</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Your account has been locked.</p>
                <p class="lead">
                    You can't access this web.
                  </p>
                <a href="index.html" class="btn btn-primary">Go Home</a>
            </div>
        </div>`
    str.innerHTML = html
}