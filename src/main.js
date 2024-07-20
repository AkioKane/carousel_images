function btnClick() {
  const btnActive = document.querySelector(".btn-start")

  btnActive.addEventListener("click", () => {
    if (btnActive.classList.contains("btn-start")) {
      btnActive.innerHTML = "<"

      btnActive.classList.remove("btn-start")
      btnActive.classList.add("btn-menu")
      imageShow("flex")
    } else if (btnActive.classList.contains("btn-menu")) {
      imageShow("none")
      btnActive.innerHTML = "Click"

      btnActive.classList.remove("btn-menu")
      btnActive.classList.add("btn-start")
    }
  })
}

function imageShow(block) {
  const images = document.querySelector(".images")
  const btnActive = document.querySelector(".btn-active")
  if (block === "none") {
    images.classList.add("close")
    btnActive.style.opacity = 0
    setTimeout(function() {
      images.style.display = block
      btnActive.style.opacity = 1
    }, 1000)
  } else {
    images.classList.remove("close")
    images.style.display = block
  }
}

module.exports = {
  btnClick
}