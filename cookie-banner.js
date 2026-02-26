(function () {
  if (localStorage.getItem("cookieAccepted")) return;

  var isEN = document.documentElement.lang === "en";

  var banner = document.createElement("div");
  banner.id = "cookie-banner";
  banner.innerHTML =
    "<p>" +
    (isEN
      ? 'This website uses cookies to improve your experience. <a href="datenschutz-en.html" style="color:#c9a99a;text-decoration:underline;">Learn more</a>'
      : 'Diese Website verwendet Cookies, um die Nutzererfahrung zu verbessern. <a href="datenschutz.html" style="color:#c9a99a;text-decoration:underline;">Mehr erfahren</a>') +
    "</p>" +
    '<button id="cookie-accept-btn">' + (isEN ? "Accept" : "Akzeptieren") + "</button>";

  banner.style.cssText =
    "position:fixed;bottom:0;left:0;right:0;background:#2a2a2a;color:#f0ebe8;" +
    "display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;" +
    "gap:12px;padding:16px 24px;z-index:9999;font-family:Montserrat,sans-serif;font-size:13px;";

  var btn = banner.querySelector("#cookie-accept-btn");
  btn.style.cssText =
    "background:#c9a99a;color:#fff;border:none;padding:10px 24px;" +
    "cursor:pointer;font-family:Montserrat,sans-serif;font-size:13px;" +
    "letter-spacing:1px;white-space:nowrap;flex-shrink:0;";

  document.body.appendChild(banner);

  btn.addEventListener("click", function () {
    localStorage.setItem("cookieAccepted", "true");
    banner.remove();
  });
})();
