let error404 = document.getElementById('content')

function showError404() {
    error404.innerHTML = `<div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">ERROR</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> The company is running out of money!</p>
                <p class="lead">
                    This function has not been implemented yet!
                  </p>
                <a onclick="loadUserList()" class="btn btn-primary">Go Home</a>
            </div>
        </div>`
}