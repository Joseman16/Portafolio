
function getprofile(){
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById(".github-profile-picture").src = data.avatar_url;
        document.querySelector(".github-profile-name").array.forEach(element => {
            document.getElementById("about-me-username").textContent = data.login;
            document.getElementById("about-me-bio").textContent = data.bio;    
        });
    });
}


//utilitario
/*async function mostrarTexto() {
    let proyecto = await obtenerProyecto();
    const componente = document.getElementById("contenedorProyecto");
    if (componente && proyecto) {
        componente.innerHTML = proyecto.id;
        componente.innerText = proyecto.name; // O usa innerText si es un div/span
        componente.innerText = proyecto.full_name;
    }
}*/

async function obtenerTodosProyectos() {
    const url = "https://api.github.com/users/Joseman16/repos";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`Error HTTP ${response.status}`);
        }
        const data = await response.json();
        return data; // Devuelve el array de proyectos
    } catch (error) {
        console.error("Error al obtener proyectos:", error);
        return [];
    }
}

async function mostrarTodosProyectos() {
    const proyectos = await obtenerTodosProyectos();
    const lista = document.getElementById("contenedorProyecto");
    if (lista) {
        lista.innerHTML = ""; // Limpia la lista
        proyectos.forEach(proyecto => {
            const item = document.createElement("div");
            item.textContent = proyecto.name;
            lista.appendChild(item);
        });
    }
}

// ...existing code...
window.addEventListener("DOMContentLoaded", async () => {
    await obtenerTodosProyectos();
    await mostrarTodosProyectos();
});
// ...existing code...