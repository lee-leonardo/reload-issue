navigator.serviceWorker.addEventListener("controllerchange", () => {
  console.log("controller change");
  window.location.reload();
})

navigator.serviceWorker.register("./pwabuilder-sw.js").then(() => {
  console.log("registered the service worker");
})