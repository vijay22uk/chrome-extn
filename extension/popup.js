(function () {
  'use strict';
  function getCurrentTabUrl(callback) {
    var queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, function (tabs) {
      var tab = tabs[0];
      var url = tab.url;
      callback(url);
    });
  }
  // Events Binding
  document.getElementById('btnRead').addEventListener('click', readPageData);
  getCurrentTabUrl(function (url) {
    if (url.indexOf("flipkart") !== -1) {
      // enable flipkart specific read.
      document.getElementById('flipkart').disabled = false;
    }

  })


  // Events
  function readPageData() {
    debugger
    var readImages = document.getElementById("readImages").checked;
    var readType = readImages ? "IMG" : "FLIPKART";
    // chrome.runtime.sendMessage({
    //   msg: "readPageData",
    //   type: readType
    // },
    //   function (response) {

    //   });
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { msg: "readPageData", readType: readType }, function (response) {
        // send data

      });
    });

  }
})();
