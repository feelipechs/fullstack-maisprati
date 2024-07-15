function getContent() {
    const xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            document.getElementById("content").innerHTML = xmlHttp.responseText;
        }
    };

    xmlHttp.open("GET", "index.json", true);
    xmlHttp.send();     
}