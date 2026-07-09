// Rok w stopce
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobilne
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Zamknij menu po kliknięciu w link
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Formularz kontaktowy — wysyłka AJAX-em (airform.io nie obsługuje
// własnego redirectu, więc po sukcesie przechodzimy na dziekujemy.html)
const form = document.querySelector(".contact-form");

if (form) {
  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector(".form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // honeypot: boty wypełniają ukryte pole — udajemy sukces bez wysyłki
    if (form.elements.firma && form.elements.firma.value) {
      window.location.href = "dziekujemy.html";
      return;
    }

    button.disabled = true;
    button.textContent = "Wysyłanie…";
    status.hidden = true;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      redirect: "manual",
    })
      .then((r) => {
        if (r.type === "opaqueredirect" || r.ok) {
          window.location.href = "dziekujemy.html";
        } else {
          throw new Error("HTTP " + r.status);
        }
      })
      .catch(() => {
        button.disabled = false;
        button.textContent = "Wyślij wiadomość";
        status.hidden = false;
        status.innerHTML =
          "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę " +
          'albo napisz bezpośrednio: <a href="mailto:zkrzeminska25@gmail.com">zkrzeminska25@gmail.com</a> ' +
          "lub przez Instagrama.";
      });
  });
}
