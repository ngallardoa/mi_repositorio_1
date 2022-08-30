function enviarFormulario() {
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        const preEnvío = new FormData(formulario);
        const envío = new URLSearchParams(preEnvío);
        console.log([...envío]);
        fetch("http://httpbin.org/post", {
            method: "POST",
            body: envío,
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
        formulario.reset();
    })
}

enviarFormulario();
