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

const app = document.getElementById("app");

app.innerHTML = `<h1>Start Editing<pre><code> main.js</code></pre></h1>`;
