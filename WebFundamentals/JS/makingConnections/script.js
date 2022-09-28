function increaseConnections() {
    document.querySelector("#connectionsTotal").innerText++;
}

function subtractRequests() {
    var connectionRequestsTitle = document.querySelector("#topright")
    var connectionRequests = document.querySelector("#connectionRequests")
    connectionRequests.innerText--;

    if (connectionRequests.innerText == 0) {
        connectionRequestsTitle.remove();
    }
}

function showElem() {
    var changeNameBar = document.querySelector("#changeName")
    var profileName = document.querySelector("#profileName")
    var newName = profileName.innerText;
    profileName.innerText = newName;
    changeNameBar.value = newName;

    if (changeNameBar.style.display == "none") {
        changeNameBar.style.display = "block";
    } else {
        newName = changeNameBar.value;
        changeNameBar.value = "";
        profileName.innerText = newName;
        changeNameBar.style.display = "none";
    }
}

function changeName() {
    var profileName = document.querySelector("#profileName")
    var changeNameBar = document.querySelector("#changeName")
    profileName.innerText = changeNameBar.value
}

function replyRequest(elem, reply = "accept") {
    if (reply == "accept") {
        increaseConnections();
        subtractRequests();
    } else {
        subtractRequests();
    }
    document.querySelector(elem).remove();
}



















// function subtractRequests() {
//     var connectionRequestsTitle = document.querySelector("#topright")
//     var connectionRequests = document.querySelector("#connectionRequests")
//     connectionRequests.innerText--;

//     if (connectionRequests.innerText == 0) {
//         connectionRequestsTitle.remove();
//     }

//     var requests1 = document.querySelector('#two')
//     var requests = parseInt(requests1.innerText)
//     console.log(typeof (requests))
//     requests1.innerHTML = requests - 1;
// }









// function increaseConnections() {
//     document.querySelector("#connectionsTotal").innerText++;

//     var connections1 = document.querySelector("#connectionsTotal")
//     var connections = connections1.innerText
//     var connections = parseInt(connections1.innerText)
//     console.log(typeof (connections))
// }
