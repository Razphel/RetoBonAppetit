window.addEventListener("load", principal);

function principal() {
    document.querySelector("#entrar").addEventListener("click", iniciarSesion);

    function iniciarSesion() {
        //Esto es copiar y pegar todo el tiempo.
        let miXHR = new XMLHttpRequest();

        //Este metodo recibe el resultado de la consulta.
        miXHR.onreadystatechange = miXHRCambiaEstado();

        //Aqui va la ruta del archivo php donde se hace la consulta.
        //se agrega un numero aleatorio al final para que el cache no de errores.
        let miURL = "./php/controlUsuario.php?nocache=" + Math.random() + "&";

        //Aqui guardo los parametros desde el html en formato que pueda leer php.
        //Por ejemplo= Variable1=resultado1&Variable2=Resultado2&Variable3=Resultado3
        let parametros = cargarParametros();

        //Para usar el post se tiene que hacer un paso adicional, se usa el .send para enviar las variables.
        miXHR.open("POST", miURL);

        //Desde aqui tambien es copiar y pegar siempre.
        miXHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        miXHR.send(parametros);
    }

    function cargarParametros() {
        let parametros = "";
        if ((document.querySelector("#nombreUsuario").value !== "") && (document.querySelector("#contraseña").value !== "")) {
            parametros += "nombreUsuario=" + document.querySelector("#nombreUsuario").value + "&";
            parametros += "contraseña=" + document.querySelector("#contraseña").value;
        }
        return parametros;
    }
}

function miXHRCambiaEstado(e) {
    if ((this.readyState === 4) && (this.status === 200)) {
        let respuesta = JSON.parse(this.responseText);
        let salida = document.querySelector("#salida");

        console.log("Si");


        for (let i = 0; i < respuesta.length; i++) {
            salida.innerHTML += respuesta[i] + "<br>";
        }
    }
}