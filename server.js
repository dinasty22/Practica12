// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Función para validar cédula módulo 10
function validarCedula(cedula) {
    if (!/^\d{11}$/.test(cedula)) return false;

    let multiplicadores = [1,2,1,2,1,2,1,2,1,2,1];
    let suma = 0;

    for (let i = 0; i < 11; i++) {
        let producto = cedula[i] * multiplicadores[i];
        if (producto > 9) producto = producto - 9;
        suma += producto;
    }
    return (suma % 10 === 0);
}

// Ruta del servicio web
app.get("/validar/:cedula", (req, res) => {
    const cedula = req.params.cedula;

    res.json({
        cedula,
        valida: validarCedula(cedula)
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log("API iniciada en puerto " + PORT);
});
