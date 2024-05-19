document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("header a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
