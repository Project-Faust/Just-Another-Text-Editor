const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.visibility = "visible";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', (event) => {
    if (deferredPrompt) {
        console.log('Installation initialized');
        deferredPrompt.prompt();
        deferredPrompt = null;
        butInstall.setAttribute("disabled", true);
        butInstall.textContent = "Installed";
    }
}, true);

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('appinstalled', event)
});