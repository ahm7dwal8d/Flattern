let Header = document.querySelector(".header")
let Topbar = document.querySelector(".topbar")

window.onscroll = function () {
    // Hedear Fixed
    if (window.scrollY >= 800) {
        Header.classList.add("fixed")
        Topbar.classList.add("hide")
    } else {
        Header.classList.remove("fixed")
        Topbar.classList.remove("hide")
    }
}

// Change landingSection Background

let landingSection = document.querySelector(".landing")

let landingArrey = ["slide-1.jpg" , "slide-2.jpg" , "slide-3.jpg"]

let landingRandomNumber = Math.floor(Math.random() * landingArrey.length)

setInterval(function() {
    let landingRandomNumber = Math.floor(Math.random() * landingArrey.length)
    landingSection.style.backgroundImage = "url(images/slide/"+ landingArrey[landingRandomNumber] +")"
} , 10000)


// Filtter Portfolio Section 

let PortfolioButton = document.querySelectorAll(".portfolio .container .portfolio-link span")
let PortfolioBoxs = document.querySelectorAll(".portfolio .container .portfolio-content .box")

// Remove Class Active From Element And Add To Click Element 

PortfolioButton.forEach((li)=> {
    li.addEventListener("click" , RemoveActiveClass)
    li.addEventListener("click" , MangeBoxs)
})

function RemoveActiveClass() {
    PortfolioButton.forEach((li)=> {
        li.classList.remove("active")
        this.classList.add("active")
    })
}

function MangeBoxs() {
    PortfolioBoxs.forEach((box)=> {
        box.style.display = "none"
    })
    document.querySelectorAll(this.dataset.class).forEach((span)=> {
        span.style.display = "block"
    })
}

let FeatureBoxs = document.querySelectorAll(".feature .container .feature-content .box")
let FeatureImage = document.querySelectorAll(".feature .container .feature-content .img") 

FeatureBoxs.forEach((box) => {
    box.addEventListener("click" , RemoveActiveImage)
})

function RemoveActiveImage() {
    FeatureImage.forEach((box)=> {
        box.style.display = "none"
    })
    document.querySelectorAll(this.dataset.show).forEach((img)=> {
        img.style.display = "block"
    })
}