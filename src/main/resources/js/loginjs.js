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


function register() {
    let usernamePattern = ".{3,}"
    let passwordPattern = ".{5,}"
    let username = document.getElementById("usernameRegister").value;
    let password = document.getElementById("passwordRegister").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (!username.match(usernamePattern)) {
        document.getElementById("errorUn").innerHTML = `Vui lòng nhập ít nhất 3 kí tự!`
    }
    if (!password.match(passwordPattern)) {
        document.getElementById("errorPw").innerHTML = `Vui lòng nhập ít nhất 5 kí tự!`
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
            }
        })
    }
}

function login() {
    let usernamePattern = ".{3,}"
    let passwordPattern = ".{5,}"
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (!username.match(usernamePattern)) {
        document.getElementById("usnLogin").innerHTML = `Vui lòng nhập ít nhất 3 kí tự!`
    }
    if (!password.match(passwordPattern)) {
        document.getElementById("passLogin").innerHTML = `Vui lòng nhập ít nhất 5 kí tự!`
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
                if (data.roles[0].authority = "ROLE_ADMIN") {
                    localStorage.setItem('token', data.accessToken);
                    localStorage.setItem('id', data.id);
                }
                if (data.roles[0].authority = "ROLE_USER") {
                    console.log(data);
                    localStorage.setItem('token', data.accessToken);
                    localStorage.setItem('id', data.id);
                    document.getElementById('username').value = "";
                    document.getElementById('password').value = "";
                    password.value = "";
                    showUserRole();
                }
            }
        })
    }
}

function showUserRole() {
    let home = document.getElementById("home");
    home.innerHTML = `<button onclick="listProduct()">List Product</button>
    <button onclick="showAddProductForm()">Add Product</button>
    <button onclick="showShoppingCart()">List_Bill</button>`
}



