
const botonTema = document.getElementById("cambio-tema");
const selectorIdioma = document.getElementById("selector-idioma");

// Funcion para cambiar el tema
function cambiarTema()
{
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro"))
    {
        localStorage.setItem("tema", "oscuro");
    }
    else
    {
        localStorage.setItem("tema", "claro");
    }

    actualizarTextoTema();
}

// Funcion para actualizar el texto del boton
function actualizarTextoTema()
{
    if (document.documentElement.lang == "en")
    {
        botonTema.textContent = document.body.classList.contains("oscuro")
            ? "Light mode"
            : "Dark mode";
    }
    else
    {
        botonTema.textContent = document.body.classList.contains("oscuro")
            ? "Modo claro"
            : "Modo oscuro";
    }
}

// Cargamos el tema guardado
if (localStorage.getItem("tema") == "oscuro")
{
    document.body.classList.add("oscuro");
}

botonTema.addEventListener("click", cambiarTema);

// Funcion para cambiar el idioma
function cambiarIdioma()
{
    document.documentElement.lang = selectorIdioma.value;
    localStorage.setItem("idioma", selectorIdioma.value);
    actualizarIdioma();
}

// Funcion para traducir los textos
function actualizarIdioma()
{
    const idioma = document.documentElement.lang;
    const elementos = document.querySelectorAll("[data-es][data-en]");

    elementos.forEach(function(elemento)
    {
        elemento.textContent = elemento.getAttribute("data-" + idioma);
    });

    actualizarTextoTema();
}

// Cargamos el idioma guardado
const idiomaGuardado = localStorage.getItem("idioma") || "es";

document.documentElement.lang = idiomaGuardado;
selectorIdioma.value = idiomaGuardado;

selectorIdioma.addEventListener("change", cambiarIdioma);

// Actualizamos los textos al abrir la pagina
actualizarIdioma();
