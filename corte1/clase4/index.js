document.getElementById("adicionar").addEventListener("click", function() {
    
    document.getElementById("identificacion").disabled = false;
    document.getElementById("estado-civil").disabled = false;
    document.getElementById("nombres").disabled = false;
    document.getElementById("apellidos").disabled = false;
    document.getElementById("masculino").disabled = false;
    document.getElementById("femenino").disabled = false;
    document.getElementById("fecha").disabled = false;
    document.getElementById("peso").disabled = false;
    document.getElementById("altura").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("telefono").disabled = false;
    document.getElementById("foto").disabled = false;
    // Desactivar el botón "Adicionar" para evitar múltiples clics
    this.disabled = true;
    // Habilitar el botón "Guardar"
    document.getElementById("guardar").disabled = false;
    // Desactivar el botón "Imprimir" para evitar impresiones antes de llenar el formulario
    document.getElementById("imprimir").disabled = true;
});




document.getElementById("guardar").addEventListener("click", function() {
    // Verificar si todos los campos obligatorios están llenos
    var identificacion = document.getElementById("identificacion").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var estadoCivil = document.getElementById("estado-civil").value;
    var genero = document.querySelector('input[name="genero"]:checked');
    var fecha = document.getElementById("fecha").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;

    if (!identificacion || !nombres || !apellidos || !genero || !fecha || !peso || !altura || !email || !telefono) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    // Guardar los datos en Web Storage
    var formData = {
        identificacion: identificacion,
        nombres: nombres,
        apellidos: apellidos,
        genero: genero.id,
        fecha: fecha,
        estadoCivil: estadoCivil,
        peso: peso,
        altura: altura,
        email: email,
        telefono: telefono
    };
    localStorage.setItem("formData", JSON.stringify(formData));

    console.log(formData)

    var container = document.getElementById("container");
    var inputs = container.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.value = "";
    });

    // Desactivar los campos y el botón de guardar
    document.getElementById("identificacion").disabled = true;
    document.getElementById("nombres").disabled = true;
    document.getElementById("apellidos").disabled = true;
    document.getElementById("masculino").disabled = true;
    document.getElementById("femenino").disabled = true;
    document.getElementById("estado-civil").disabled = true;
    document.getElementById("fecha").disabled = true;
    document.getElementById("peso").disabled = true;
    document.getElementById("altura").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("telefono").disabled = true;
    document.getElementById("foto").disabled = true;
    document.getElementById("guardar").disabled = true;

    // Habilitar el botón de imprimir
    document.getElementById("imprimir").disabled = false;
    document.getElementById("adicionar").disabled = false;

    alert("Los datos se han guardado correctamente.");
});

document.getElementById("imprimir").addEventListener("click", function() {
    var formData = JSON.parse(localStorage.getItem("formData"));

    var fechaNacimiento = new Date(formData.fecha);
    var fechaActual = new Date();
    var edadMilisegundos = fechaActual - fechaNacimiento;

    // Calcular la edad en años, meses, semanas, días, horas, minutos y segundos
    var edad = {};
    edad.anios = Math.floor(edadMilisegundos / (365.25 * 24 * 60 * 60 * 1000));
    var resto = edadMilisegundos % (365.25 * 24 * 60 * 60 * 1000);
    edad.meses = Math.floor(resto / (30.4375 * 24 * 60 * 60 * 1000));
    resto = resto % (30.4375 * 24 * 60 * 60 * 1000);
    edad.semanas = Math.floor(resto / (7 * 24 * 60 * 60 * 1000));
    resto = resto % (7 * 24 * 60 * 60 * 1000);
    edad.dias = Math.floor(resto / (24 * 60 * 60 * 1000));
    resto = resto % (24 * 60 * 60 * 1000);
    edad.horas = Math.floor(resto / (60 * 60 * 1000));
    resto = resto % (60 * 60 * 1000);
    edad.minutos = Math.floor(resto / (60 * 1000));
    resto = resto % (60 * 1000);
    edad.segundos = Math.floor(resto / 1000);

    // Agregar la edad al objeto formData
    formData.edad 
    console.log(edad);

    var table = document.getElementById("tabla");
    var row = table.insertRow();
    row.insertCell().innerText = formData.identificacion;
    row.insertCell().innerText = formData.nombres;
    row.insertCell().innerText = formData.apellidos;
    row.insertCell().innerText = formData.genero;
    row.insertCell().innerText = formData.fecha;
    row.insertCell().innerText = formData.edad;
    row.insertCell().innerText = formData.estadoCivil;
    row.insertCell().innerText = formData.peso;
    row.insertCell().innerText = formData.altura;
    row.insertCell().innerText = formData.email;
    row.insertCell().innerText = formData.telefono;

    document.getElementById("tabla-container").style.display = "block";

    // Desactivar el botón de imprimir después de imprimir
    this.disabled = true;
    document.getElementById("adicionar").disabled = false;
});


