let href = window.location.href;
let pathname = window.location.pathname;
let hostanme = window.location.hostname;
let protocol = window.location.protocol;

let html = `protocolo: <b> ${protocol}</b><br>`;
html += `hostanme: <b> ${hostanme}</b><br>`;
html += `Pathname: <b> ${pathname}</b><br>`;
html += `URL completa : <b> ${href}</b><br>`;

document.write(html);