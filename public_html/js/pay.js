function paymoney() {
    var money = sessionStorage.getItem("總金額");
    var discount = sessionStorage.getItem("discount");
    if (discount >= 5) {
        alert("恭喜獲得 " + discount + " 折的折扣");
        location.href = "#paylist";
        location.reload();
    } else {
        alert("搖一搖獲得折扣!!");
        var shakedis=document.getElementById("pay");
        shakedis.setAttribute("href", "#");
    }

}