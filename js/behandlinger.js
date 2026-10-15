  // Mobilmenyen
        const menuButton = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");

        menuButton.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Lukk meny" : "Åpne meny"
            );
        });

        // For å lukke menyen når man velger en side
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Åpne meny");
            });
        });

        // Oppdater årstallet automatisk
        document.getElementById("year").textContent =
            new Date().getFullYear();