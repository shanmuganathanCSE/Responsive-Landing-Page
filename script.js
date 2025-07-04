Script.js

function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSheet();
    sheet.appendRow([new Date(), e.parameter.name, e.parameter.email]);
    return ContentService.createTextOutput("Success");
  }