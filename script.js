const { query } = require("express")

function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle("light")

  // pegar a tag img
  const image = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se tiver light-mode, adicionar a imagem light
    image.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light-mode, manter a imagem padrão
    image.setAttribute("src", "./assets/avatar.png")
  }
}
