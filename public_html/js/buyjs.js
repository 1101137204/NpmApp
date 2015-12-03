function buy1() {
    var buy1name = document.getElementById("buy1pcard").textContent;
    var buy1price = document.getElementById("buy1pcardprice").textContent;
    var num1 = document.getElementById("buy1numselect").selectedIndex;
    var numselect1 = document.getElementsByTagName("option")[num1].value;
    var buy1button = document.getElementById("buy1button");
    if (numselect1 <= 0) {
        alert("請輸入數量!!");
    } else if (buy1button.textContent === "加到購物車") {
        sessionStorage.setItem("商品1名稱", buy1name);
        sessionStorage.setItem("商品1單價", buy1price);
        sessionStorage.setItem("商品1數量", numselect1);
        /*
         localStorage.setItem("商品1名稱", buy1name);
         localStorage.setItem("商品1單價", buy1price);
         localStorage.setItem("商品1數量", numselect1);
         */
        buy1button.innerHTML = "已加到購物車";
        buy1button.setAttribute("class", " ui-btn ui-icon-check ui-btn-icon-left ui-shadow ui-corner-all");
        console.log(buy1name);
        console.log(buy1price);
        console.log(numselect1);
        console.log(buy1button.innerHTML);
        console.log("商品： " + buy1name + " 已加到購物車  / " + "價格：" + buy1price + " / 數量： " + numselect1);
    } else {
        alert("商品已加入購物車");
    }
}
function buy2() {
    var buy2name = document.getElementById("buy2cup").textContent;
    var buy2price = document.getElementById("buy2cupprice").textContent;
    var num2 = document.getElementById("buy2numselect").selectedIndex;
    var numselect2 = document.getElementsByTagName("option")[num2].value;
    var buy2button = document.getElementById("buy2button");
    if (numselect2 <= 0) {
        alert("請輸入數量!!");
    } else if (buy2button.textContent === "加到購物車") {
        sessionStorage.setItem("商品2名稱", buy2name);
        sessionStorage.setItem("商品2單價", buy2price);
        sessionStorage.setItem("商品2數量", numselect2);
        /*
         localStorage.setItem("商品2名稱", buy2name);
         localStorage.setItem("商品2單價", buy2price);
         localStorage.setItem("商品2數量", numselect2);
         */
        buy2button.innerHTML = "已加到購物車";
        buy2button.setAttribute("class", " ui-btn ui-icon-check ui-btn-icon-left ui-shadow ui-corner-all");
        console.log(buy2name);
        console.log(buy2price);
        console.log(numselect2);
        console.log(buy2button.innerHTML);
        console.log("商品： " + buy2name + " 已加到購物車  / " + "價格：" + buy2price + " / 數量： " + numselect2);
    } else {
        alert("商品已加入購物車");
    }
}
function buy3() {
    var buy3name = document.getElementById("buy3pen").textContent;
    var buy3price = document.getElementById("buy3penprice").textContent;
    var num3 = document.getElementById("buy3numselect").selectedIndex;
    var numselect3 = document.getElementsByTagName("option")[num3].value;
    var buy3button = document.getElementById("buy3button");
    if (numselect3 <= 0) {
        alert("請輸入數量!!");
    } else if (buy3button.textContent === "加到購物車") {
        sessionStorage.setItem("商品3名稱", buy3name);
        sessionStorage.setItem("商品3單價", buy3price);
        sessionStorage.setItem("商品3數量", numselect3);
        /*
         localStorage.setItem("商品3名稱", buy3name);
         localStorage.setItem("商品3單價", buy3price);
         localStorage.setItem("商品3數量", numselect3);
         */
        buy3button.innerHTML = "已加到購物車";
        buy3button.setAttribute("class", " ui-btn ui-icon-check ui-btn-icon-left ui-shadow ui-corner-all");
        console.log(buy3name);
        console.log(buy3price);
        console.log(numselect3);
        console.log(buy3button.innerHTML);
        console.log("商品： " + buy3name + " 已加到購物車  / " + "價格：" + buy3price + " / 數量： " + numselect3);
    } else {
        alert("商品已加入購物車");
    }
}
function pay() {
    /*商品1*/
    var pay1name = sessionStorage.getItem("商品1名稱");
    var pay1price = sessionStorage.getItem("商品1單價");
    var pay1num = sessionStorage.getItem("商品1數量");
    var sum1 = pay1price * pay1num;
    sessionStorage.setItem("商品1總計", sum1);
    /*商品2*/
    var pay2name = sessionStorage.getItem("商品2名稱");
    var pay2price = sessionStorage.getItem("商品2單價");
    var pay2num = sessionStorage.getItem("商品2數量");
    var sum2 = pay2price * pay2num;
    sessionStorage.setItem("商品2總計", sum2);
    /*商品3*/
    var pay3name = sessionStorage.getItem("商品3名稱");
    var pay3price = sessionStorage.getItem("商品3單價");
    var pay3num = sessionStorage.getItem("商品3數量");
    var sum3 = pay3price * pay3num;
    sessionStorage.setItem("商品3總計", sum3);
    var sumpay = sum1 + sum2 + sum3;
    sessionStorage.setItem("總金額", sumpay);
    /*
     var pay1name = localStorage.getItem("商品1名稱");
     var pay1price = localStorage.getItem("商品1單價");
     var pay1num = localStorage.getItem("商品1數量");
     var sum1 = pay1price * pay1num;
     var pay2name = localStorage.getItem("商品2名稱");
     var pay2price = localStorage.getItem("商品2單價");
     var pay2num = localStorage.getItem("商品2數量");
     var sum2 = pay2price * pay2num;
     var pay3name = localStorage.getItem("商品3名稱");
     var pay3price = localStorage.getItem("商品3單價");
     var pay3num = localStorage.getItem("商品3數量");
     var sum3 = pay3price * pay3num;
     */

    console.log("商品： " + pay1name + " 數量： " + pay1num + " 金額： " + sum1);
    console.log("商品： " + pay2name + " 數量： " + pay2num + " 金額： " + sum2);
    console.log("商品： " + pay3name + " 數量： " + pay3num + " 金額： " + sum3);
    alert("總金額： " + sumpay + " 元");
    if (sumpay <= 0) {
        var att = document.getElementById("buypay");
        att.setAttribute("href", "#");
        alert("請確定數量 or 請加到購物車!!");
        location.reload();
        //location.href = "#pagehome";
    }
}