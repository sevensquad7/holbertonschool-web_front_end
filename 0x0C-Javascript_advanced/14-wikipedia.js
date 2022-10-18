const createElement = (data) => {
    const p = document.createElement("p");
    const node = document.createTextNode(data);
    p.appendChild(node);
    document.body.appendChild(p);
};

const queryWikipedia = (callback) => {
    const req = new XMLHttpRequest();
    const url =
        "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    req.onload = () => {
        if (req.status == 200) {
            const res = JSON.parse(req.responseText);
            const text = res.query.pages[21721040].extract;
            callback(text);
        }
    };

    req.open("GET", url);
    req.send();
};

queryWikipedia(createElement);
