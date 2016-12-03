(function () {
    'use strict';
    var api = "//localhost:8080/extension";
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.msg === "readPageData") {
                switch (request.readType) {
                    case "IMG":
                        readPageImages(request.origin);
                        break;
                    default:
                        readPageProducts(request.origin);
                }
            }

        });

    function sendMessage(message) {
        chrome.runtime.sendMessage(message);
    }

    function readPageImages(url) {
        var arr = $('img').map(function () { return this.src; }).get();
        var xhr = new XMLHttpRequest();
        xhr.open("POST", api);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({ data: arr, readType: "IMG", origin: url }));
    }

    function readPageProducts(url) {
        var productContainer = $("._2SxMvQ").find(".col").slice(0, 3);
        if (productContainer && productContainer.length > 0) {
            var arr =[];
            for(var i=0;i<productContainer.length;i++){
                arr.push(productContainer[i].outerHTML);
            }
            var xhr = new XMLHttpRequest();
            xhr.open("POST", api);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify({ data: arr, readType: "FLIPKART", origin: url }));
        }

    }
})();