/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')


const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_23jhmek','template_1b6ybwq','#contact-form','1jzIhgcXqnSZA0eve')

    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear form
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

if (contactForm) {
    contactForm.addEventListener('submit', sendEmail)
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if (sectionsClass) {
			if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
				sectionsClass.classList.add('active-link')
			}else{
				sectionsClass.classList.remove('active-link')
			}                                                    
		}
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark'
const getCurrentIcon = () => {
    if (themeButton) {
        return themeButton.classList.contains(iconTheme) ? 'ri-sun-line' : 'ri-moon-line'
    }
}

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme)
  
  if (themeButton) {
      if (selectedIcon === 'ri-sun-line') {
          themeButton.classList.add('ri-sun-line')
          themeButton.classList.remove('ri-moon-line')
      } else {
          themeButton.classList.add('ri-moon-line')
          themeButton.classList.remove('ri-sun-line')
      }
  }
}

// Activate / deactivate the theme manually with the button
if (themeButton) {
    themeButton.addEventListener('click', () => {
        // Add or remove the light / icon theme
        document.body.classList.toggle(lightTheme)
        themeButton.classList.toggle('ri-moon-line')
        themeButton.classList.toggle('ri-sun-line')
        
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
}

/*=============== SHOW MORE PROJECTS ===============*/
