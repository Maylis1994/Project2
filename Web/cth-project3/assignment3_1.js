var url = "http://www.europeana.eu/api/v2/search.json?wskey=gCUBRCswU&query=kunst&start=1&rows=24&profile=standard";
//I choose this query because I thought 'kunst' would give me some nice images
var myRequest = new XMLHttpRequest();

myRequest.open("GET", url);
myRequest.send();
var imagearray = [];

myRequest.onreadystatechange = function () {
    if (myRequest.readyState === 4){
        var koe = 4;
        var data = myRequest.response;
        var dataParsed = JSON.parse(data);
        var items = dataParsed.items
        for (var item in items){
                imagearray.push(items[item].edmPreview[0])
            }
        }
    };
