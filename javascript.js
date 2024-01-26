window.onload = function() {
    setTimeout(function() {
        document.querySelector(".loader-wrapper").classList.add("hidden").style.display = "none"

        document.getElementsByClassName("loader").style.display = "block"
    }, 1000)
}