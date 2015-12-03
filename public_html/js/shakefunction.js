window.onload = function () {
    //create a new instance of shake.js.
    var myShakeEvent = new Shake({
        threshold: 15
    });
    // start listening to device motion
    myShakeEvent.start();

    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);

    //shake event callback
    function shakeEventDidOccur() {
        var result = document.getElementById("result");
        result.className = "result";
        var arr = [5, 6, 7, 8, 9];
        var num = Math.floor(Math.random() * 5);
        result.innerHTML = "恭喜，您獲得 " + arr[num] + " 折的折扣！";
        //alert("恭喜，您獲得 " + arr[num] + " 折的折扣！");
        setTimeout(function () {
            result.className = "result result-show";
        }, 1000);
        window.removeEventListener('shake', shakeEventDidOccur, false);
        var discount = JSON.stringify(arr[num]);
        sessionStorage.setItem("discount", discount);
    }
};