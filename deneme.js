// script.js
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const links = document.querySelectorAll(".fade-link");

    // Sayfa yüklendiğinde fade-in sınıfını ekle
    body.classList.add("fade-in");

    // Linklere tıklandığında fade-out efekti uygula
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");

            // Fade-out efekti
            body.classList.remove("fade-in");
            body.style.opacity = 0;

            // Yeni sayfaya yönlendirme
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    // Sayfa yeniden yüklendiğinde fade-out efekti uygula
    window.addEventListener("beforeunload", () => {
        body.classList.remove("fade-in");
        body.style.opacity = 0;
    });
});