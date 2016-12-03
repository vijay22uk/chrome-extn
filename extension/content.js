(function () {
    'use strict';
    var api = "//extn.herokuapp.com";
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            debugger
            if (request.msg === "readPageData") {
                switch (request.readType) {
                    case "IMG":
                        readPageImages(request.origin,sendResponse);
                        break;
                    default:
                        readPageProducts(request.origin,sendResponse);
                }
            }

        });

    function sendMessage(message) {
        chrome.runtime.sendMessage(message);
    }

    function readPageImages(url,callback) {
        var arr = $('img').map(function () { return this.src; }).get();
        var xhr = new XMLHttpRequest();
        xhr.open("POST", api);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({ data: arr, readType: "IMG", origin: url }));
        debugger
        callback({done:true})

    }

    function readPageProducts(url,callback) {
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
        callback({done:true});


    }
})();