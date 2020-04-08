let url = 'http://192.168.0.103:8000/api/employeesListJustJSON/';

var responseObj = readJsonFromUrl(url);
var count = responseObj.query.count;

console.log(count)