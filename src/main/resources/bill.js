
function showBill(){
    let display = document.getElementById("display");
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        type: "GET",
        url: "http://localhost:8081/bills",
        success: function (data) {
            let str = "";
            for (let i = 0; i < data.length; i++) {
                str += ` ${data[i].id},${data[i].amount},${data[i].status},${data[i].create_date}
                
                <button onclick="showEditForm(${data[i].id})">Edit</button>
                <button onclick="deleteProduct(${data[i].id})">Delete</button>
                <br>`
            }
            display.innerHTML = str;
        }
    })

}
function createBill(){
    let amount = document.getElementById("amount").value;
    let status = document.getElementById("status").value;
    let create_date = document.getElementById("create_date").value;
    let bill = {
        amount: amount,
        status: status,
        create_date: create_date
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        type: "POST",
        url: "http://localhost:8081/bills",
        data: JSON.stringify(bill),
        success: function (bill) {
            console.log(bill);
            showBill();
        }
    })
}