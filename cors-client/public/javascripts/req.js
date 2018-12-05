window.addEventListener("load", () => {

    document.querySelector("#reqBtn").addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:5000");
        xhr.responseType = "json";

        xhr.onload = () => {
            if (xhr.readyState === 4) {
                document.querySelector("#result").innerHTML = xhr.response.message;
            }
        };

        xhr.send();
    });
});
