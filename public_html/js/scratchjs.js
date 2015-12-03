function scratch() {
    var scratchper = document.getElementById("scratcher3Pct").textContent;
    console.log(scratchper);
    var disnum = scratchper.split("%");
    console.log(disnum[0]);
    if (disnum[0] >= 95) {
        var discount = sessionStorage.getItem("優惠券折扣");
        alert("恭喜獲得： " + discount + " 元 優惠券！！！");
        location.href = "#pagehome";
    } else {
        alert("再刮一下 ! !");
    }
}


