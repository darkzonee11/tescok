// Portfolio Website JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href").substring(1)
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        // Close mobile menu if open
        if (navMenu.classList.contains("active")) {
          hamburger.classList.remove("active")
          navMenu.classList.remove("active")
        }

        // Calculate proper offset for navbar
        const navbarHeight = document.querySelector(".navbar").offsetHeight
        const targetPosition = targetSection.offsetTop - navbarHeight - 20

        // Smooth scroll to target with proper offset
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Update active nav link
        updateActiveNavLink(this)
      }
    })
  })

  // Update active navigation link based on scroll position
  function updateActiveNavLink(activeLink = null) {
    navLinks.forEach((link) => link.classList.remove("active"))

    if (activeLink) {
      activeLink.classList.add("active")
    } else {
      // Find current section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      let currentSection = ""
      const navbarHeight = document.querySelector(".navbar").offsetHeight

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight - 50
        const sectionHeight = section.offsetHeight

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id")
        }
      })

      if (currentSection) {
        const activeNavLink = document.querySelector(`a[href="#${currentSection}"]`)
        if (activeNavLink) {
          activeNavLink.classList.add("active")
        }
      }
    }
  }

  // Update active nav link on scroll
  window.addEventListener("scroll", () => {
    updateActiveNavLink()

    // Add/remove navbar background on scroll
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(15, 23, 42, 0.98)"
    } else {
      navbar.style.background = "rgba(15, 23, 42, 0.95)"
    }
  })

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".timeline-item, .portfolio-item, .skills-category, .contact-item, .education-item",
  )

  animatedElements.forEach((el) => {
    observer.observe(el)
  })

  // Typing effect for hero title
  function typeWriter(element, text, speed = 100) {
    let i = 0
    element.innerHTML = ""

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(type, speed)
      }
    }

    type()
  }

  // Initialize typing effect for hero title
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 80)
    }, 500)
  }

  // Skill tags hover effect
  const skillTags = document.querySelectorAll(".skill-tag")
  skillTags.forEach((tag) => {
    tag.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.05)"
    })

    tag.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Portfolio items hover effect
  const portfolioItems = document.querySelectorAll(".portfolio-item")
  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".portfolio-icon")
      if (icon) {
        icon.style.transform = "scale(1.1) rotate(5deg)"
      }
    })

    item.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".portfolio-icon")
      if (icon) {
        icon.style.transform = "scale(1) rotate(0deg)"
      }
    })
  })

  // Contact items click to copy
  const contactItems = document.querySelectorAll(".contact-item")
  contactItems.forEach((item) => {
    const emailItem = item.querySelector("p")
    if (emailItem && (emailItem.textContent.includes("@") || emailItem.textContent.includes("+"))) {
      item.style.cursor = "pointer"
      item.title = "Click to copy"

      item.addEventListener("click", () => {
        const textToCopy = emailItem.textContent

        if (navigator.clipboard) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            showToast("Copied to clipboard!")
          })
        } else {
          // Fallback for older browsers
          const textArea = document.createElement("textarea")
          textArea.value = textToCopy
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand("copy")
          document.body.removeChild(textArea)
          showToast("Copied to clipboard!")
        }
      })
    }
  })

  // Simple toast notification
  function showToast(message) {
    const toast = document.createElement("div")
    toast.textContent = message
    toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            z-index: 10000;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            transform: translateY(100px);
            transition: transform 0.3s ease;
        `

    document.body.appendChild(toast)

    // Animate in
    setTimeout(() => {
      toast.style.transform = "translateY(0)"
    }, 100)

    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.transform = "translateY(100px)"
      setTimeout(() => {
        document.body.removeChild(toast)
      }, 300)
    }, 3000)
  }

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // Press 1-6 for quick navigation
    const keyMap = {
      1: "home",
      2: "about",
      3: "experience",
      4: "portfolio",
      5: "skills",
      6: "contact",
    }

    if (keyMap[e.key]) {
      e.preventDefault()
      const targetSection = document.getElementById(keyMap[e.key])
      if (targetSection) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight
        const targetPosition = targetSection.offsetTop - navbarHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    }
  })

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const hero = document.querySelector(".hero")

    if (hero && scrolled < hero.offsetHeight) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })

  // Initialize animations with stagger effect
  function initializeStaggeredAnimations() {
    const timelineItems = document.querySelectorAll(".timeline-item")
    const portfolioItems = document.querySelectorAll(".portfolio-item")
    const skillCategories = document.querySelectorAll(".skills-category")

    // Stagger timeline items
    timelineItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.2}s`
    })

    // Stagger portfolio items
    portfolioItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`
    })

    // Stagger skill categories
    skillCategories.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.15}s`
    })
  }

  // Initialize staggered animations
  initializeStaggeredAnimations()

  // Set initial active nav link
  updateActiveNavLink()

  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")
  })

  console.log("Portfolio website loaded successfully!")
})

// Add loading styles
const loadingCSS = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .portfolio-icon {
        transition: transform 0.3s ease;
    }
`

// Inject loading CSS
const style = document.createElement("style")
style.textContent = loadingCSS
document.head.appendChild(style)
