document.addEventListener("DOMContentLoaded", function () {
    // Check screen width
    if (window.innerWidth <= 432) {
        const navbar = document.querySelector("#navbar");
        const navbarHeight = navbar.offsetHeight;

        // Smooth scrolling with offset
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener("click", function (e) {
                const targetId = this.getAttribute("href").substring(1); // Remove "#" from the href
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    e.preventDefault(); // Prevent default anchor behavior
                    const offsetTop = targetSection.offsetTop - navbarHeight;

                    // Smooth scroll to the section
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth"
                    });

                    // Collapse the navbar on smaller screens
                    const navbarCollapse = document.querySelector(".navbar-collapse");
                    if (navbarCollapse.classList.contains("show")) {
                        navbarCollapse.classList.remove("show");
                    }
                }
            });
        });
    }
});
