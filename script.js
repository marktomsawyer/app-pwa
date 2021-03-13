
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

function calc() {


    let n1 = document.getElementById('n1');
    let n2 = document.getElementById('n2');
    let resultado = document.getElementById('resultado');

    console.log(n1.value);
    console.log(n2.value);


    resultado.value = Number(n1.value) + Number(n2.value);

    document.getElementById.value = resultado.value;
    console.log(resultado.value);

}