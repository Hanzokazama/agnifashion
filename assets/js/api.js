
var headers = new Headers();
headers.append("Content-Type", "application/json");

function post() {
    var baseURL = window.location.href.split("//")[1].split("/");
    if (baseURL[0] == "surfersway.in") {
        if (baseURL[1] == "testing") {
            return "https://surfersway.in/testing/bizlyft/api/get_service";
        } else if (baseURL[1] == "uat") {
            return "https://surfersway.in/uat/bizlyft/api/get_service";
        }
    }
    else if (baseURL[0] == "agnifashion.in") {
        return "https://bizlyft.in/api/get_service";
    }
    else { return "https://development.surfersway.in/bizlyft/api/get_service"; }

}
// api
function setProjectVisitCount() {
 return fetch(post(), {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            app: "bizlyft_api",
            input: "setProjectVisitCount",
            project: "agnifashion",
        }),
        redirect: "follow",
    })
        .then((response) => response.json())
        .then((data) => {
            setVisitors(data[0].tvcount)
            console.log(data[0].tvcount)
        })
        .catch((error) => console.log("error", error));
}

function setUEQTCC() {
    showloadingb()
fetch(post(), {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            app: "bizlyft_api",
            input: "setUEQTCC",
            project:"agnifashion",
            frommailid: getemail(),
            subject: getsub(),
            name:getname(),
            message: getmsg(),
        }),
        redirect: "follow",
    })
    .then((response) => response.json())
    .then((data) => {
        contactbtn();
        console.log(data[0].message)
        hideloadingb();
    })
    .catch((error) => console.log("error", error));
}



function setVisitors(count) {
    document.getElementById("visitors_count").innerHTML += "";
    for (var i = 0; i < count.length; i++) {
        document.getElementById("visitors_count").innerHTML +=
            `<li>` + count[i] + `</li>`;
    }
}


