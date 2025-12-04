document.getElementById("btnValidar").addEventListener("click", async () => {
    let cedula = document.getElementById("cedula").value.trim();

    if (cedula === "") {
        return alert("Debe ingresar una cédula");
    }

    const API = "https://practica12-w7tp.onrender.com";

    let res = await fetch(`${API}/validar/${cedula}`);
    let data = await res.json();

    let texto = data.valida
        ? "✔ Cédula válida"
        : "❌ Cédula NO válida";

    document.getElementById("resultado").textContent = texto;
});

