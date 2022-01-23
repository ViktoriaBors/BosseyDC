var textoverimages = document.querySelectorAll(".hide");
var prevtextoverimages

for (var i = 0; i < textoverimages.length; i++) {
    textoverimages[i].onclick = function () {
        var classes = this.classList;
        if (classes.contains("show")) {
            classes.remove("show")
        }
        else {
            if (prevtextoverimages != null)
                prevtextoverimages.classList.remove("show");
            prevtextoverimages = this;
            classes.add("show");
        }
    }
}
