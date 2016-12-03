(function () {
    'use strict';
    $(document).ready(initUI);
    function initUI() {
        getData();
    }
    function getData() {
        $.ajax({
            url: "/data",
            method: "GET",
            success: function (data) {
                renderData(data);
            },
            error: function (err) {
                alert('Unable to get data');
            }
        });
    }
    function renderData(data) {
        /* sample data
    
    data
    :
    Array[6]
    origin
    :
    "http://stackoverflow.com/questions/26079611/node-js-typeerror-path-must-be-absolute-or-specify-root-to-res-sendfile-failed"
    readType
    :
    "IMG"
    __proto__
    :
    Object
    <div class="container">
            <h4>Images</h4>
            <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">ORIGIN :: www.google.com</button>
            <div id="demo" class="collapse">
               
            </div>
        </div>
    */
     $("#logs").empty();
        for (var i = 0; i < data.length; i++) {
            var readType = data[i].readType=="IMG"?"Images":"Flipkart"
            var eleConatiner = $('<div class="container"></div>');
            var h4 = $('<h4 class="bold"><b>' + readType + '</b></h4>');
            eleConatiner.append(h4);
            var btn = $('<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#data' + i + ' "+>ORIGIN :: ' + data[i].origin + '</button>')
            eleConatiner.append(btn);
            var text = $('<div id="data' + i + '" class="collapse">' + data[i].data.join() + '</div>')
            eleConatiner.append(text);
            $("#logs").append(eleConatiner)
        }



    }
})();