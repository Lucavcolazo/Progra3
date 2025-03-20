function mostrarTareas(tipo) {
    document.getElementById("personal").style.display = (tipo === 'personal') ? "block" : "none";
    document.getElementById("universidad").style.display = (tipo === 'universidad') ? "block" : "none";
}
function agregarTarea(tipo) {
    let inputId = tipo === 'personal' ? 'nuevaTareaPersonal' : 'nuevaTareaUniversidad';
    let listaId = tipo === 'personal' ? 'listaPersonal' : 'listaUniversidad';

    let input = document.getElementById(inputId);
    let lista = document.getElementById(listaId);

    if (input.value.trim() !== "") {
        let tarea = document.createElement("div");
        tarea.classList.add("task");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let label = document.createElement("label");
        label.textContent = input.value;

        tarea.appendChild(checkbox);
        tarea.appendChild(label);
        lista.appendChild(tarea);

        input.value = ""; // Limpiar el campo después de agregar
    }
}