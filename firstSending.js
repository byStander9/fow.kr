function httpGet(finalURL) {
    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === xmlHttp.DONE) {
            if (xmlHttp.status === 200 || xmlHttp.status === 201) {
                jsonfile = getUrlVars(xmlHttp.responseURL);
                // jsonfile = json.parse(xmlHttp.responseURL);
                for(key in jsonfile) {
                    console.log(jsonfile[0].summonerLevel);
                }
            } else {
                console.error(xmlHttp.responseURL);
            }
        }
    };
    xmlHttp.open("Get", finalURL, true);
    xmlHttp.send();
}



function setURL() {
    summonerName = document.forms["inputForm"]["inputName"].value;
    frontURL = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
    myApi = "?api_key=RGAPI-40f6fcc5-4f62-4c01-8f05-0ca0ece82e9b";
    finalURL = frontURL.concat(summonerName).concat(myApi);
    jsonFile = httpGet(finalURL);
}


function getUrlVars(url) {
    var hash;
    var myJson = {};
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        myJson[hash[0]] = hash[1];
    }
    return myJson;
}