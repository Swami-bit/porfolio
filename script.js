// Form submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  // In a real application, you would send this data to a server
  // For now, we'll just show an alert
  alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`)

  // Reset the form
  this.reset()
})

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: "smooth",
    })
  })
})

// Add active class to navigation items on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section")
  const navLinks = document.querySelectorAll("nav ul li a")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})
