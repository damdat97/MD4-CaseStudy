function sendMsg() {
    let msg = document.getElementById("msg").value;
    let date = new Date();
    let day = "AM"
    let minutes = date.getMinutes()
    if (date.getHours() >= 12) {
        day = "PM"
    }
    if (minutes < 10) {
        minutes = "0" + date.getMinutes();
    }
    let curTime = date.getHours() + ":" + minutes + " " + day

    if (msg) {

        let mySpan = document.getElementById("chat");

        let str = " <li class=\"left clearfix\">\n" +
            "                     <span class=\"chat-img1 pull-right\">\n" +
            "                     <img src=\"/template/img/anhson.jpg\" alt=\"User Avatar\" class=\"img-circle\">\n" +
            "                     </span>\n" +
            "                     <div class=\"chat-body1 clearfix\">\n" +
            "                        <p>" + msg + "</p>\n" +
            "\t\t\t\t\t\t<div class=\"chat_time pull-right\">" + curTime + "</div>\n" +
            "                     </div>\n" +
            "                  </li>";
        mySpan.innerHTML += str + "<br/>";

    }
    document.getElementById("msg").value = "";
    getMessages();
}


//chat ngẫu nhiên
let str1 = "Xin chào các bạn"
let str2 = "hi"
let str3 = "Có ai ở đây không ạ"
let str4 = "mình buồn quá"
let str5 = "muốn tìm người yêu"
let str6 = "yêu màu hồng, ghét sự giả dối"
let str7 = "tìm người nói chuyện"
let str8 = "mãi mãi 1 tình yêu"
let str9 = "boy nhà nghèo tìm girl nhà giàu"
let str10 = "anh muốn ăn kem, vì anh muốn có em"
let str11 = "ví em là rác, vì anh muốn đổ em"
let str12 = "anh muốn là viên đá, vì trong đá có Ngọc"
let str13 = "anh yêu màu hường, và anh yêu cả Hường"
let str14 = "vì anh Thương em, như thương cây bàng non"
let str15 = "Bích 50k, đình thôn 21h"
let str16 = "muốn nghe hát hay, hãy tìm Vũ Linh"
let str17 = "Học hành chán vler"
let str18 = "khi bắt đầu, đừng nghe thằng nào nói cả"
let str19 = "khi bắt đầu, hãy nghĩ tới thất bại"
let str20 = "khi bắt đầu, đừng nghĩ tới thất bại"
let str21 = "cần cù thì bù siêng năng"
let str22 = "trời xanh mây trắng, anh yêu nắng hay là yêu em"
let str23 = "lưu số em đi, khi nào má có cần con dâu thì gọi cho em"
let str24 = "một cây làm chẳng nên non, 3 cây chụm lại thấy thừa 2 cây"
let str25 = "cá không ăn muối cá ươn, con cãi cha mẹ con ăn cá ươn"
let str26 = "làm thơ thì phải có vần, nếu không có vần thì nó hơi ngang"
let str27 = "cục xì lầu, ông bê lắp"
let str28 = "mỹ nhân thiên hạ nhiều vô kể, thử hỏi như Bích được mấy người"
let str29 = "Nàng cởi quần xong báo giá, ta ngáo đá nghĩ đó là tình yêu"
let str30 = "Ngày em đi anh chìm vào bóng tối, gió đông về biết giao phối cùng ai"
let str31 = "Chờ em ra mở cổng, nhưng chồng em ra mở cửa"
let str32 = "Nàng nhân từ tặng ta ít thương hại, trách não ta bại nghĩ đó là tình yêu"
let img1 = "/template/img/girl 1.jpg";
let img2 = "/template/img/girl 2.jpg";
let img3 = "/template/img/girl 3.jpg";
let img4 = "/template/img/girl 4.jpg";
let img5 = "/template/img/girl 5.jpg";
let img6 = "/template/img/girl 6.jpg";
let img7 = "/template/img/girl 7.jpg";
let img8 = "/template/img/girl 8.jpg";
let img9 = "/template/img/girl 9.jpg";
let img10 = "/template/img/girl 10.jpg";
let img11 = "/template/img/girl 11.jpg";
let img12 = "/template/img/girl 12.jpg";
let img13 = "/template/img/girl 13.jpg";
let img14 = "/template/img/girl 14.jpg";
let img15 = "/template/img/girl 15.jpg";


function autoChat() {
    let arr = [str1, str2, str3, str4, str5, str6, str7, str8, str9, str10,
        str11, str12, str13, str14, str15, str16, str17, str18, str19, str20,
        str21, str22, str23, str24, str25, str26, str27, str28, str29, str30, str31, str32];
    let arrImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]
    let randomStr = Math.floor(Math.random() * 32);
    let randomImg = Math.floor(Math.random() * 15) ;
    let msg = arr[randomStr];
    let image = arrImg[randomImg]
    console.log(image)
    let date = new Date();
    let day = "AM"
    let minutes = date.getMinutes()
    if (date.getHours() >= 12) {
        day = "PM"
    }
    if (minutes < 10) {
        minutes = "0" + date.getMinutes();
    }
    let curTime = date.getHours() + ":" + minutes + " " + day

    if (msg) {

        let mySpan = document.getElementById("chat");

        let str = " <li class=\"left clearfix\">\n" +
            "                     <span class=\"chat-img1 pull-left\">\n" +
            "                     <img src=\"" + image + "\" id=\"image\" alt=\"User Avatar\" class=\"img-circle\">\n" +
            "                     </span>\n" +
            "                     <div class=\"chat-body1 clearfix\">\n" +
            "                        <p>" + msg + "</p>\n" +
            "\t\t\t\t\t\t<div class=\"chat_time pull-right\">" + curTime + "</div>\n" +
            "                     </div>\n" +
            "                  </li>";

        mySpan.innerHTML += str + "<br/>";

    }
    getMessages();
}

setInterval(autoChat, 3000)


const messages = document.getElementById('chat');

function appendMessage() {
    const message = document.getElementsByClassName('chat-sm')[0];
    const newMessage = message.cloneNode(true);
    messages.appendChild(newMessage);
}

function getMessages() {
    shouldScroll = messages.scrollTop + messages.clientHeight === messages.scrollHeight;

    appendMessage();
    if (!shouldScroll) {
        scrollToBottom();
    }
}

function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
}



