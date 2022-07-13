let error404 = document.getElementById('content')

function showError404() {
    error404.innerHTML = `<div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">ERROR</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Công ty đang hết tiền.</p>
                <p class="lead">
                    Chức năng này chưa được thục hiện!
                  </p>
                <a onclick="loadUserList()" class="btn btn-primary">Go Home</a>
            </div>
        </div>`
}