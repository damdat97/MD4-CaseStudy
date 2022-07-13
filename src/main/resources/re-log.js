$('.form').find('input, textarea').on('keyup blur focus', function (e) {

    var $this = $(this),
        label = $this.prev('label');

    if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.removeClass('highlight');
        }
    } else if (e.type === 'focus') {

        if ($this.val() === '') {
            label.removeClass('highlight');
        } else if ($this.val() !== '') {
            label.addClass('highlight');
        }
    }

});

$('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});

let show = document.getElementById("content");

function showRegisterForm() {
    let str = `<div class="form">

    <ul class="tab-group">
        <li class="tab active" ><a onclick="showRegisterForm()">Sign Up</a></li>
        <li class="tab"><a onclick="showLoginForm()">Log In</a></li>
    </ul>

    <div class="tab-content">
                <h1>Sign Up </h1>
                <div class="top-row">
                    
                        <input type="text" id="usernameRegister" placeholder="Username"/>
                        <p id="errorUn" style="color: red"></p>
                    
                   
                        <input type="password" id="passwordRegister" placeholder="Password"/>
                            <p id="errorPw" style="color: red"></p>
                    
                </div>
             
                    <input type="password" id="confirmPassword" placeholder="Confirm Password"/>
                    <p id="errorCfw" style="color: red"></p>
                
                <button onclick="register()" class="button button-block"/>Register</button>
</div>
</div>`
    show.innerHTML = str
}

function register() {
    let usernamePattern = ".{3,}"
    let passwordPattern = ".{3,}"
    let username = document.getElementById("usernameRegister").value;
    let password = document.getElementById("passwordRegister").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (!username.match(usernamePattern)) {
        document.getElementById("errorUn").innerHTML = `Vui lòng nhập ít nhất 3 kí tự!`
    }
    if (!password.match(passwordPattern)) {
        document.getElementById("errorPw").innerHTML = `Vui lòng nhập ít nhất 3 kí tự!`
    }
    if (confirmPassword !== password) {
        document.getElementById("errorCfw").innerHTML = `Nhập đúng mật khẩu bạn vừa nhập!`
    }

    if (username.match(usernamePattern) && password.match(passwordPattern) && confirmPassword === password) {
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
                document.getElementById("usernameRegister").value = "";
                document.getElementById("passwordRegister").value = "";
                document.getElementById("confirmPassword").value = "";
                console.log(user);
                alert("Register success");
                showLoginForm()
            }
        })
    }
}

function showLoginForm() {
    show.innerHTML = `<h1>Welcome Back!</h1>
        <div class="form">
            <ul class="tab-group">
                <li class="tab active" ><a onclick="showRegisterForm()">Sign Up</a></li>
                <li class="tab"><a onclick="showLoginForm()">Log In</a></li>
            </ul>
    <div class="tab-content">
        <div class="top-row">
           
                <input type="text" id="username" required autocomplete="off" placeholder="Username"/>
                <p id="usnLogin" style="color: red"></p>
           

           
                <input type="password" id="password" required autocomplete="off" placeholder="Password"/>
                <p id="passLogin" style="color: red"></p>
            
            </div>
                <p class="forgot"><a href="#">Forgot Password?</a></p>
                <button onclick="login()" class="button button-block"/>Log In</button>
    </div>
</div>`
}

function login() {
    let usernamePattern = ".{3,}"
    let passwordPattern = ".{3,}"
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (!username.match(usernamePattern)) {
        document.getElementById("usnLogin").innerHTML = `Vui lòng nhập ít nhất 3 kí tự!`
    }
    if (!password.match(passwordPattern)) {
        document.getElementById("passLogin").innerHTML = `Vui lòng nhập ít nhất 3 kí tự!`
    }
    if (username.match(usernamePattern) && password.match(passwordPattern)) {

        let data = {
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
                    document.getElementById('username').value = "";
                    document.getElementById('password').value = "";
                    loadUserHome();
                }
                if (data.roles[0].authority === "ROLE_ADMIN") {
                    console.log(data)
                    localStorage.setItem('token', data.accessToken);
                    localStorage.setItem('id', data.id);
                    document.getElementById('username').value = "";
                    document.getElementById('password').value = "";
                    loadAdminDashboard()
                }
                if (data.roles[0].authority === "ROLE_USELESS") {
                    console.log(data)
                    document.getElementById('username').value = "";
                    document.getElementById('password').value = "";
                    uselessHome()
                }
            },
            error: function (error) {
                console.log(error)
            }
        })
    }
}

function showUserRole() {
    show.innerHTML = `<button onclick="listProduct()">List Product</button>
    <button onclick="showAddProductForm()">Add Product</button>
    <button onclick="showBill()">List_Bill</button>`
}

function uselessHome() {
    show.innerHTML = `<div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">ERROR</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Your account has been locked.</p>
                <p class="lead">
                    You can't access this web.
                  </p>
                <a href="index.html" class="btn btn-primary">Go Home</a>
            </div>
        </div>`
}

function logout() {
    localStorage.removeItem('token');
    showLoginForm();
}