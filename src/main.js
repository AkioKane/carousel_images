function btnClick() {
  const btnActive = document.querySelector(".btn-start")
  const btnSwipe = document.querySelector(".btn-swipe")

  btnActive.addEventListener("click", () => {
    if (btnActive.classList.contains("btn-start")) {
      btnActive.innerHTML = "close"
      btnSwipe.style.display = "flex"

      btnActive.classList.remove("btn-start")
      btnActive.classList.add("btn-menu")
      imageShow("flex")
    } else if (btnActive.classList.contains("btn-menu")) {
      btnActive.innerHTML = "Click"
      btnSwipe.style.display = "none"

      btnActive.classList.remove("btn-menu")
      btnActive.classList.add("btn-start")
      imageShow("none")
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