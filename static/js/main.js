// *** Registers Service Worker ***
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}

/*
@ Switches the protocol to HTTPS
++ Comment when in development mode
-- Uncomment when in production mode
*/

/*
if (location.protocol !== "https:") {
  location.replace(
    `https:${location.href.substring(location.protocol.length)}`
  );
}
*/