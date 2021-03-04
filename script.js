function activateLi() {
    let links = document.querySelectorAll(".nav-link")
    for (const link of links) {
        let liAll = document.querySelectorAll("li")
        link.onclick = function () {
            deactivateOthers(liAll);
            link.querySelector("li").classList.add("active");
        }
    }
}

function deactivateOthers(list) {
    for (i = 0; i < list.length; i++) {
        if (list[i].classList.contains("active")) {
            list[i].classList.remove("active")
        }
    }
}

activateLi();