// 🔹 SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// 🔹 QUICK LINKS SCROLL (header buttons/spans)
document.querySelectorAll(".quick-links span").forEach(item => {
    item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-target");
        if (targetId) {
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// 🔹 INFO BOX SCROLL (about section boxes)
document.querySelectorAll(".info-box").forEach(box => {
    box.addEventListener("click", () => {
        const targetId = box.getAttribute("data-target");
        if (targetId) {
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// 🔹 JELLY EFFECT FUNCTION
function jellyEffect(el) {
    el.style.transition = "transform 0.15s ease";
    el.style.transform = "scale(0.97)";

    setTimeout(() => {
        el.style.transform = "scale(1.03)";
    }, 120);

    setTimeout(() => {
        el.style.transform = "scale(1)";
    }, 220);
}

// 🔹 APPLY JELLY TO SKILLS
document.querySelectorAll(".skill").forEach(el => {
    el.addEventListener("click", () => jellyEffect(el));
    el.addEventListener("touchstart", () => jellyEffect(el));
});

// 🔹 APPLY JELLY TO PROJECT CARDS
document.querySelectorAll(".project-card").forEach(el => {
    el.addEventListener("click", () => jellyEffect(el));
    el.addEventListener("touchstart", () => jellyEffect(el));
});

// 🔹 APPLY JELLY TO LANGUAGES
document.querySelectorAll(".languages span").forEach(el => {
    el.addEventListener("click", () => jellyEffect(el));
    el.addEventListener("touchstart", () => jellyEffect(el));
});

// 🔹 OPTIONAL: JELLY FOR SECTIONS (soft interaction)
document.querySelectorAll("section").forEach(section => {
    section.addEventListener("click", () => {
        section.style.transition = "transform 0.2s ease";
        section.style.transform = "scale(0.995)";

        setTimeout(() => {
            section.style.transform = "scale(1)";
        }, 180);
    });
});
