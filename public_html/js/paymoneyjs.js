var checkshowpaylist = false;
var checkshowdsicount = false;
function showpaylist() {
    document.getElementById("showpaylist").innerHTML = "";
    var table = null;
    var thead = null;
    var tbody = null;
    var init = function () {
        table = document.createElement("table");
        table.setAttribute("data-role", "table");
        table.setAttribute("class", "ui-responsive");
        table.setAttribute("id", "resultpaylist");
        thead = document.createElement("thead");
        tbody = document.createElement("tbody");

        var tr1 = document.createElement("tr");
        var th1 = document.createElement("th");
        th1.setAttribute("width", "400px");
        th1.innerHTML = "商品";
        var th2 = document.createElement("th");
        th2.setAttribute("width", "125px");
        th2.innerHTML = "數量";
        var th3 = document.createElement("th");
        th3.setAttribute("width", "125px");
        th3.innerHTML = "價格";
        var th4 = document.createElement("th");
        th4.setAttribute("width", "125px");
        th4.innerHTML = "金額";
        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);
        tr1.appendChild(th4);
        thead.appendChild(tr1);

        if (sessionStorage.getItem("商品1總計") != 0) {
            console.log("1");
            var tr2 = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.setAttribute("id", "pay1name");
            td1.innerHTML = sessionStorage.getItem("商品1名稱");
            var td2 = document.createElement("td");
            td2.setAttribute("id", "pay1num");
            td2.innerHTML = sessionStorage.getItem("商品1數量");
            var td3 = document.createElement("td");
            td3.setAttribute("id", "pay1price");
            td3.innerHTML = sessionStorage.getItem("商品1單價");
            var td4 = document.createElement("td");
            td4.setAttribute("id", "pay1sum");
            td4.innerHTML = sessionStorage.getItem("商品1總計");
            tr2.appendChild(td1);
            tr2.appendChild(td2);
            tr2.appendChild(td3);
            tr2.appendChild(td4);
            tbody.appendChild(tr2);
        }
        if (sessionStorage.getItem("商品2總計") != 0) {
            console.log("2");
            var tr3 = document.createElement("tr");
            var td5 = document.createElement("td");
            td5.setAttribute("id", "pay2name");
            td5.innerHTML = sessionStorage.getItem("商品2名稱");
            var td6 = document.createElement("td");
            td6.setAttribute("id", "pay2num");
            td6.innerHTML = sessionStorage.getItem("商品2數量");
            var td7 = document.createElement("td");
            td7.setAttribute("id", "pay2price");
            td7.innerHTML = sessionStorage.getItem("商品2單價");
            var td8 = document.createElement("td");
            td8.setAttribute("id", "pay2sum");
            td8.innerHTML = sessionStorage.getItem("商品2總計");
            tr3.appendChild(td5);
            tr3.appendChild(td6);
            tr3.appendChild(td7);
            tr3.appendChild(td8);
            tbody.appendChild(tr3);
        }
        if (sessionStorage.getItem("商品3總計") != 0) {
            console.log("3");
            var tr3 = document.createElement("tr");
            var td9 = document.createElement("td");
            td9.setAttribute("id", "pay3name");
            td9.innerHTML = sessionStorage.getItem("商品3名稱");
            var td10 = document.createElement("td");
            td10.setAttribute("id", "pay3num");
            td10.innerHTML = sessionStorage.getItem("商品3數量");
            var td11 = document.createElement("td");
            td11.setAttribute("id", "pay3price");
            td11.innerHTML = sessionStorage.getItem("商品3單價");
            var td12 = document.createElement("td");
            td12.setAttribute("id", "pay3sum");
            td12.innerHTML = sessionStorage.getItem("商品3總計");
            tr3.appendChild(td9);
            tr3.appendChild(td10);
            tr3.appendChild(td11);
            tr3.appendChild(td12);
            tbody.appendChild(tr3);
        }
        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById("showpaylist").appendChild(table);
        console.log(table);
    };
    init();
    document.getElementById("resultpaylist").style.textAlign = "center";
    checkshowpaylist = true;
}
;
function showdsicount() {
    document.getElementById("disscratch").innerHTML = '';
    document.getElementById("disshake").innerHTML = '';
    document.getElementById("disscratch").innerHTML = " 優惠券折扣： " + sessionStorage.getItem("優惠券折扣") + " 元";
    document.getElementById("disshake").innerHTML = " 搖一搖折扣： " + sessionStorage.getItem("discount") + " 折";
    checkshowdsicount = true;
}
function showpaymoney() {
    document.getElementById("showmoney").innerHTML = '';
    if ((checkshowpaylist === true) && (checkshowdsicount === true)) {
        var pay = sessionStorage.getItem("總金額");
        var disscratch = sessionStorage.getItem("優惠券折扣");
        var disshake = sessionStorage.getItem("discount");
        var pay1 = null;
        if (disscratch == 50) {
            pay1 = pay - 50;
        } else if (disscratch == 100) {
            pay1 = pay - 100;
        }
        var pay2 = null;
        if (disshake >= 5) {
            if (disshake == 5) {
                pay2 = pay1 * 0.5;
            } else if (disshake == 6) {
                pay2 = pay1 * 0.6;
            } else if (disshake == 7) {
                pay2 = pay1 * 0.7;
            } else if (disshake == 8) {
                pay2 = pay1 * 0.8;
            } else if (disshake == 9) {
                pay2 = pay1 * 0.9;
            }
        }
        console.log(pay2);
        document.getElementById("showmoney").innerHTML = pay2;
    } else {
        alert("請先顯示訂單與折扣");
    }

}