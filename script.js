/* ==================================================
   DARK MODE
================================================== */

const themeToggle =
    document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀";
}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

    themeToggle.textContent =
        isDark ? "☀" : "☾";
});


/* ==================================================
   CURRENT YEAR
================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    observer.observe(element);

});