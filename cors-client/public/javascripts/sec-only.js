window.addEventListener("load", () => {
    const geoBtn = document.querySelector("#geoBtn");
    const serviceBtn = document.querySelector("#serviceBtn");

    geoBtn.addEventListener("click", () => {
        navigator.geolocation.getCurrentPosition(postion => {
            alert(postion.coords.longitude);
        });
    });

    serviceBtn.addEventListener("click", () => {
        navigator.serviceWorker.register('/javascripts/sw.js').then(() => {
            alert("登録成功");
          }).catch(() => {
            alert("登録失敗");
          });
    });
});
