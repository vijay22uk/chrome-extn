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
        */
        $("#logs").empty();
        for (var i = 0; i < data.length; i++) {
            var readType = data[i].readType == "IMG" ? "Images" : "Flipkart"
            var eleConatiner = $('<div class="container"></div>');
            var h4 = $('<h4 class="bold"><b>' + readType + '</b></h4>');
            eleConatiner.append(h4);
            var btn = $('<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#data' + i + ' "+>ORIGIN :: ' + data[i].origin + '</button>')
            eleConatiner.append(btn);
            if (data[i].readType == "IMG") {
                var collapse = $('<div id="data' + i + '" class="collapse"></div>');
                for(var j=0;j<data[i].data.length;j++){
                    var anchor = $('<p><a target="_blank" href="'+ data[i].data[j] +'">'+ data[i].data[j] + '</a></p>');
                    collapse.append(anchor);
                }
                eleConatiner.append(collapse);

            } else {
                var text = $('<div id="data' + i + '" class="collapse">' + data[i].data[0] + '</div>')
                eleConatiner.append(text);
            }

            $("#logs").append(eleConatiner)
        }



    }
})();