function btnClick() {
  const btnActive = document.querySelector(".btn-start")
  const btnSwipe = document.querySelector(".btn-swipe")
  const images1 = document.querySelector(".images")
  const images2 = document.querySelector(".images-2")

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

  btnSwipe.addEventListener("click", () => {
    if (images1.classList.contains("active")) {
      btnActive.style.display = "none"
      setTimeout(() => {
        btnActive.style.display = "flex"
      }, 0)

      images1.classList.remove("active")
      images2.classList.add("active")
      images1.style.display = "none"
      imageShow("flex")

      btnSwipe.style.display = "none"
      setTimeout(() => {
        btnSwipe.style.display = "flex"
      }, 0)
    } else if (images2.classList.contains("active")) {
      btnActive.style.display = "none"
      setTimeout(() => {
        btnActive.style.display = "flex"
      }, 0)

      images2.classList.remove("active")
      images1.classList.add("active")
      images2.style.display = "none"
      imageShow("flex")

      btnSwipe.style.display = "none"
      setTimeout(() => {
        btnSwipe.style.display = "flex"
      }, 0)
    }
  })
}

function imageShow(block) {
  const images = document.querySelector(".active")
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