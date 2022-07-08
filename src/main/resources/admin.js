let show = document.getElementById('content')

function loadAdminDashboard() {
    show.innerHTML = `<div class="container-scroller">
<nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="navbar-menu-wrapper d-flex align-items-center flex-grow-1">
            <h5 class="mb-0 font-weight-medium d-none d-lg-flex">Welcome Sam's Dashboard!</h5>
            <ul class="navbar-nav navbar-nav-right ml-auto">
                <li class="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
                    <input type="text" id="name" placeholder="Name"> 
                    <button type="submit" onclick="findByName()" style="margin-right: 10px; margin-left: 5px">Search</button>
                    <a onclick="logout()">Logout</a><i class="fa-solid fa-arrow-right-from-bracket" style="margin-left: 5px"></i>
                </li>
            </ul>
            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                    data-toggle="offcanvas">
                <span class="icon-menu"></span>
            </button>
        </div>
    </nav>
    <div class="container-fluid page-body-wrapper">
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
                <li class="nav-item nav-profile">
                    <a href="#" class="nav-link">
                        <div class="profile-image">
                            <div class="dot-indicator bg-success"></div>
                        </div>
                        <div class="text-wrapper">Administrator</p>
                        </div>
                        <div class="icon-container">
                            <i class="fa-solid fa-chart-scatter-bubble" style="margin-left: 10px"></i>
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
            <footer class="footer">
                <div class="d-sm-flex justify-content-center justify-content-sm-between">
                    <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2022 <a
                            href="https://www.bootstrapdash.com/" target="_blank"></a>. All rights reserved.</span>
                    <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with  <i
                            class="icon-heart text-danger"></i></span>
                </div>
            </footer>
        </div>
    </div>
</div>
`;
}


function loadUserList() {
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
        <!-- partial -->
        <div class="main-panel">
            <div class="content-wrapper">
                <div class="page-header">
                    <h3 class="page-title"> User Board </h3>
                </div>
                <div class="row">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên</th>
                                        <th>Loại tài khoản</th>
                                        <th>Phone</th>
                                        <th>Trang thai</th>
                                        <th style="text-align: center">Tùy chọn</th>
                                    </tr>
                                    </thead>
                                    <tbody>`
                                        $.ajax({
                                            headers: {
                                                'Authorization': 'Bearer ' + localStorage.getItem('token')
                                            },
                                            type: "GET",
                                            url: "http://localhost:8081/admin/users",
                                            success: function (data) {
                                                console.log(data)
                                                for (let i = 0; i < data.length; i++) {
                                                    str += `<tr>
                                                                <td>${data[i].id}</td>
                                                                <td>${data[i].name}</td>
                                                                <td>`
                                                    if (data[i].roles[0].name === "ROLE_USER") {
                                                        str += `<p class="badge badge-success">USER</p>`
                                                    }
                                                    if (data[i].roles[0].name === "ROLE_USELESS") {
                                                        str += `<p class="badge badge-danger">USELESS</p>`
                                                    }
                                                    if (data[i].roles[0].name === "ROLE_ADMIN") {
                                                        str += `<p class="badge badge-success">ADMIN</p>
                                                                                        </td>`
                                                    }

                                        str += `<td>
                                                ${data[i].phone}
                                            </td>
                                            <td>`
                                        if (data[i].status === true) {
                                            str += `<p class="badge badge-success">Đang mở</p>`
                                        }
                                        if (data[i].status === false) {
                                            str += `<p class="badge badge-danger">Đang bị khóa</p>
                                                                    </td>`
                                        }
                                        str += `<td width="10px">
                                                <a onclick="viewDetailsUser(${data[i].id})" class="nav-link"><i class="fa-solid fa-eye" style="margin-right: 5px"></i>View</a>
                                            </td>
                                            <td width="10px">
                                                <a onclick="editUser(${data[i].id})" class="nav-link"><i class="fa-solid fa-pencil" style="margin-right: 5px"></i>Edit</a>
                                            </td>
                                            <td width="10px">
                                                <a onclick="lockedUser(${data[i].id})" class="nav-link"><i class="fa-solid fa-lock" style="margin-right: 5px"></i>Locked</a>
                                            </td>
                                        </tr>`
                                }
                                str += `</tbody>
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
    </div>`
            show.innerHTML = str
        }
    })

}


function findByName() {
    let name = document.getElementById('name').value;
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },

        type: 'GET',
        url: 'http://localhost:8081/admin/users/find-by-name?name=' + name,
        success: function (data) {
            console.log(data)
            let str = `<div class="container-scroller">
    <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="navbar-menu-wrapper d-flex align-items-center flex-grow-1">
            <h5 class="mb-0 font-weight-medium d-none d-lg-flex">Welcome Sam's dashboard!</h5>
            <ul class="navbar-nav navbar-nav-right ml-auto">
                    <li class="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
                    <input type="text" id="name" placeholder="Name"> 
                    <button type="submit" onclick="findByName()" style="margin-right: 10px">Search</button>
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
                            <p class="profile-name">Lê Văn Sơn</p>
                            <p class="designation">Administrator</p>
                        </div>
                        <div class="icon-container">
                            <i class="icon-bubbles"></i>
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
                        <i class="icon-screen-desktop menu-icon"></i>
                    </a>
                </li>
                <li class="nav-item nav-category"><span class="nav-link">Management</span></li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="collapse" href="#product" aria-expanded="false"
                       aria-controls="product">
                        <span class="menu-title">User Management</span>
                        <i class="icon-basket-loaded menu-icon"></i>
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
                    <h3 class="page-title"> User Board </h3>
                </div>
                <div class="row">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên</th>
                                        <th>Loại tài khoản</th>
                                        <th>Phone</th>
                                        <th>Trang thai</th>
                                        <th colspan="3" style="text-align: center">Tùy chọn</th>
                                    </tr>
                                    </thead>     
                                    <tr>`
                                for (let i = 0; i < data.length; i++) {


                                    str += `<td>${data[i].id}</td>
                                                                <td>${data[i].name}</td>
                                                                <td>`

                                    if (data[i].roles[0].name === "ROLE_USER") {
                                        str += `<p class="badge badge-success">USER</p>`
                                    }
                                    if (data[i].roles[0].name === "ROLE_ADMIN") {
                                        str += `<p class="badge badge-success">ADMIN</p>`
                                    }
                                    if (data[i].roles[0].name === "ROLE_USELESS") {
                                        str += `<p class="badge badge-danger">USELESS</p>`
                                    }
                                    str += `</td>
                                            <td>
                                                ${data[i].phone}
                                            </td>
                                            <td>`

                                    if (data[i].status === true) {
                                        str += `<p class="badge badge-success">Đang mở</p>`
                                    }
                                    if (data[i].status === false) {
                                        str += `<p class="badge badge-danger">Đang bị khóa</p>
                                                                </td>`
                                    }
                                    str += `
                                            <td width="10px">
                                                <a onclick="viewDetailsUser(${data[i].id})" class="nav-link"><i class="icon-options">View</i></a>
                                            </td>
                                            <td width="10px">
                                                <a onclick="editUser(${data[i].id})" class="nav-link"><i class="icon-pencil">Edit</i></a>
                                            </td>
                                            <td width="10px">
                                                <a onclick="lockedUser(${data[i].id})" class="nav-link"><i class="icon-trash">Delete</i></a>
                                            </td>
                                        </tr>`
                                        }

                                    str += `</table>
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
    </div>`
            show.innerHTML = str

        }
    })
}

function editUser(id) {
    console.log(id)
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
                    <h3 class="page-title">Sửa chức năng người dùng <i class="fa-solid fa-pen-to-square" style="margin-left: 10px"></i></h3>
                </div>
                <div class="row">
                    <div class="col-12 grid-margin">
                        <div class="card">
                            <div class="card-body">`
                $.ajax({
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    },

                    type: 'GET',
                    url: 'http://localhost:8081/admin/users/' + id,
                    success: function (data) {
                        console.log(data)
                        str += `<p class="card-description"> Thông tin cá nhân </p>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                            <input type="hidden" id="idEdit" value="${data.id}">
                                                <label class="col-sm-3 col-form-label">Tên: </label>
                                                <div class="col-sm-9">
                                                    <input type="text" id="nameEdit" class="form-control" value="${data.name}"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Số điện thoại</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" id="phoneNumberEdit" value="${data.phone}"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Tên đăng nhập</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" id="usernameEdit" value="${data.username}"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Mật khẩu</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" id="passwordEdit" value="${data.password}"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row">
                                            <input type="hidden" value="${data.status}" id="statusEdit">
                                            <input type="hidden" value="${data.confirmPassword}" id="confirmPasswordEdit">
                                                <label class="col-sm-3 col-form-label">Loại tài khoản</label>
                                                <div class="col-sm-9">
                                                    <select class="form-control" id="roleEdit">`
                                                $.ajax({
                                                    headers: {
                                                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                                                    },
                                                    type: "GET",
                                                    url: "http://localhost:8081/admin/users/roles",
                                                    success: function (role) {
                                                        console.log(role);

                                                        for (let i = 0; i < role.length; i++) {
                                                            str += `<option value="${role[i].id}">${role[i].name}</option>`
                                                        }
                                                        document.getElementById('roleEdit').innerHTML = str;
                                                    }
                                                })
                                                str += `</select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <button type="submit" class="btn btn-primary mr-2" onclick="edit()">Lưu</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="d-sm-flex justify-content-center justify-content-sm-between">
                    <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2017 <a
                            href="https://www.bootstrapdash.com/" target="_blank"></a>. All rights reserved.</span>
                        <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i
                                class="icon-heart text-danger"></i></span>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</div>`
                        show.innerHTML = str
        }
    })
}

function edit() {
    let id = document.getElementById('idEdit').value;
    let name = document.getElementById("nameEdit").value;
    let phone = document.getElementById("phoneNumberEdit").value;
    let username = document.getElementById("usernameEdit").value;
    let password = document.getElementById("passwordEdit").value;
    let confirmPassword = document.getElementById('confirmPasswordEdit').value;
    let status = document.getElementById('statusEdit').value;
    let roleId = document.getElementById("roleEdit").value;
    console.log(roleId)
    let user = {
        name: name,
        phone: phone,
        status: status,
        username : username,
        password: password,
        confirmPassword: confirmPassword,
        roles: [{
            id: roleId
        }]
    }
    $.ajax({
        type:"PUT",
        headers:{
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url:"http://localhost:8081/admin/users/" + id ,
        data :JSON.stringify(user),
        success: function (user) {
            console.log(user)
            loadUserList();
        },
        error: function (error) {
            console.log(error)
        }
    })
}

function lockedUser(id) {
    if (confirm("Do you want to locked this user ???")) {
        console.log(id)
        $.ajax({
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            type: 'GET',
            url: 'http://localhost:8081/admin/users/locked-user/' + id,
            success: function () {
                loadUserList()
            },
            error: function (error) {
                console.log(error)
            }
        })
    }
}