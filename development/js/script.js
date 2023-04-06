let intervalId;

document.querySelectorAll('.dropdown-toggle').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open');
                }, 0);
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }, 0);
            }
        });
    });
});


window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('toc-active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('toc-active');
            }
        });
    });

    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});

function oneFunction() {
    var element = document.getElementById("top-radio");
    element.classList.add("radio-active");

    var element = document.getElementById("bottom-radio");
    element.classList.remove("radio-active");

    var element = document.getElementById("last-radio");
    element.classList.remove("radio-active");

    var element = document.getElementById("svg-top-color");
    element.classList.add("svg-orange");

    var element = document.getElementById("svg-bottom-color");
    element.classList.remove("svg-orange");

    var element = document.getElementById("svg-last-color");
    element.classList.remove("svg-orange");

}

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function twoFunction() {
    var element = document.getElementById("bottom-radio");
    element.classList.add("radio-active");

    var element = document.getElementById("last-radio");
    element.classList.remove("radio-active");

    var element = document.getElementById("top-radio");
    element.classList.remove("radio-active");

    var element = document.getElementById("svg-bottom-color");
    element.classList.add("svg-orange");

    var element = document.getElementById("svg-top-color");
    element.classList.remove("svg-orange");

    var element = document.getElementById("svg-last-color");
    element.classList.remove("svg-orange");
}

function threeFunction() {
    var element = document.getElementById("last-radio");
    element.classList.add("radio-active");

    var element = document.getElementById("top-radio");
    element.classList.remove("radio-active");

    var element = document.getElementById("bottom-radio");
    element.classList.remove("radio-active");

    var element = document.getElementById("svg-last-color");
    element.classList.add("svg-orange");

    var element = document.getElementById("svg-top-color");
    element.classList.remove("svg-orange");

    var element = document.getElementById("svg-bottom-color");
    element.classList.remove("svg-orange");
}

function fileFunction() {
    document.getElementById("file-btn").click();
}
