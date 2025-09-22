<h1 align="center"> Proyecto alura</h1>

<div align="center">
  
<img src="./banner-titulo.png" alt="Amigo Secreto - Banner" width="100%"/>

# Amigo Secreto 🎁

[![LinkedIn - Juan Pedro Montoya](https://img.shields.io/badge/LinkedIn-Juan%20Pedro%20Montoya%20Vélez-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/juan-pedro-montoya-velez)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=000)
![HTML5](https://img.shields.io/badge/HTML5-Sem%C3%A1ntico-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)
[![Curso](https://img.shields.io/badge/Alura%20Latam-HTML%20%7C%20CSS%20%7C%20JS-0077B6)](https://www.aluracursos.com/)
![Estado](https://img.shields.io/badge/Estado-EN%20PROGRESO-FF9800)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?logo=github)
![License](https://img.shields.io/badge/License-MIT-black)
![Café](https://img.shields.io/badge/☕-Hecho%20con%20caf%C3%A9-6F4E37)

</div>

## 🚀 ¿De qué va esto?
Proyecto **Amigo Secreto**: una app web ligera, hecha con **HTML, CSS y JavaScript puro**, para ingresar una lista de amigos y que **sortea automáticamente** a la persona afortunada usando `Math.random()` y un poco de magia (bueno, *lógica*).  
Nació como parte del **curso de Alura Latam (HTML | CSS | JS)**.

## 🧠 Aprendizajes clave (del curso y más allá)
- **Manipulación del DOM**: `document.getElementById`, `innerHTML`, eventos y actualización reactiva de la UI.
- **Control de errores/validaciones**: evitar vacíos, duplicados y espacios fantasma con `trim()`.
- **Lógica de sorteo**: índice aleatorio con `Math.floor(Math.random() * n)`.
- **Responsividad** con CSS puro (mobile-first, tipografías y espaciados que no te pelean la vista).
- **Estructura simple** y mantenible, ideal para principiantes y para enseñar.

## ✨ Features
- ➕ Agregar nombres a la lista.
- ✅ Validación rápida (sin permitir vacíos/espacios).
- 🎲 Sortear **1 ganador** de forma justa.

## 🗂️ Estructura sugerida
```
/
├─ index.html
├─ styles.css
└─ app.js

```

## 🛠️ Requisitos
- Navegador moderno (Chrome, Edge, Firefox…).
- (Opcional) Extensión **Live Server** o similar para auto-recargar en desarrollo.

## ▶️ Cómo correrlo
1. Clona o descarga el repo.
2. Abre `index.html` en tu navegador. Listo.

## 🧩 Cómo funciona el sorteo (en cristiano)
```js
// Asumiendo un arreglo `amigos` ya poblado
if (amigos.length === 0) {
  alert("Primero agrega al menos un nombre 🤓");
} else {
  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];
  document.getElementById("resultado").innerHTML = `🎉 Tu amigo secreto es: <b>${ganador}</b>`;
}
```

## 🛣️ Roadmap corto
- [ ] Opción para **evitar repetidos**.
- [ ] Historial de sorteos.
- [ ] Exportar la lista a `.txt`/`.csv`.
- [ ] Tema **oscuro/claro** desde UI.

## 🤝 Contribuciones
¿Ideas? ¿Bugs? ¿Memes? Los **PRs** y los **issues** son súper bienvenidos.  

## 👤 Autor
**Juan Pedro Montoya Vélez**  
[LinkedIn](https://www.linkedin.com/in/juan-pedro-montoya-velez) • (¡conecta y charlamos de JS!)

## 📜 Licencia
Este proyecto se publica bajo licencia **MIT**. Revisa el archivo `LICENSE` si deseas usarlo o adaptarlo.

---

> Si llegaste hasta aquí: ¡gracias! Ahora ve a sorprender a tus amigos con un sorteo ✨

