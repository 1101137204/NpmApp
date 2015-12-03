function loginnav() {
    var loginnav = document.getElementById("memberlogin").innerHTML;
    if (loginnav === "會員登出") {
        sessionStorage.removeItem("acc");
        sessionStorage.removeItem("pwd");
        document.getElementById("account").value = '';
        document.getElementById("password").value = '';
        var att = document.getElementById("loginnav");
        att.setAttribute("href", "#");
        document.getElementById("memberlogin").innerHTML = "會員登入";
        location.reload();
        alert("已登出");
    }
}
function login() {
    var acc = document.getElementById("account").value;
    var pwd = document.getElementById("password").value;
    if ((acc !== '') && (pwd !== '')) {
        sessionStorage.setItem("acc", acc);
        sessionStorage.setItem("pwd", pwd);
        var getacc = sessionStorage.getItem("acc");
        document.getElementById("memberlogin").innerHTML = "會員登出";
        document.getElementById("username").innerHTML = getacc + "您好";
        alert("登入成功 ~ ~");
        location.href = "#scratchpage";
    } else {
        alert("不可空白");
    }
}
function giftbutton() {
    var getacc = sessionStorage.getItem("acc");
    var getpwd = sessionStorage.getItem("pwd");
    if ((getacc === null) || (getpwd === null)) {
        alert("請先登入");
        var att = document.getElementById("giftbutton");
        att.setAttribute("href", "#");
        location.reload();
    }
}