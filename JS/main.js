
/*=============== SHOW MENU ===============*/
const  navMenu = document.getElementById('nav__menu')
const navToggle = document.getElementById('nav__toggle')
const  navClose = document.getElementById('nav__close')  
 /*===============  MENU SHOW ===============*/ 
console.log(navMenu,navToggle)

if (navToggle) {
    navToggle.addEventListener('click', () =>{
        console.log("a")
        navMenu.classList.add('show-menu')
    })
}
/*=============== MENU HIDDEN ===============*/
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
    
}
/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader =() =>{
    const header =  document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the bg-header class to header tag 
    this.scrollY >=50 ? header.classList.add( "bg-header")
                      : header.classList.remove("bg-header")
}
window.addEventListener("scroll", scrollHeader)       

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')
console.log(section)
 const scrollActive = () =>{
    const scrollY = window.pageYOffset
    // console.log(scrollY)

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

        sectionClass.classList.add('active-link')

       } else {

        sectionClass.classList.remove('active-link')

       }
    })
 }
     window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup =() =>{
    const scrollup =  document.getElementById('scroll-up')
    // When the scroll is greater than 350 viewport height, add the show-scroll class to the a tag  with the scrollup
    this.scrollY >=350 ? scrollup.classList.add( "show-scroll")
                      :scrollup.classList.remove( "show-scroll")
}
window.addEventListener("scroll", scrollup)  

/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateform = document.getElementById('calculate-form')
const calculatecm = document.getElementById('calculate-cm')
const calculatekg = document.getElementById('calculate-kg')
const calculateMessage = document.getElementById('calculate__message')

const calculateBmi = (e) =>{
   e.preventDefault()

    // Check if the fields have a value
    if (calculatecm.value ==='' || calculatekg.value ==='') {

        // Add and remove color
         calculateMessage.classList.remove('color-green')
         calculateMessage.classList.add('color-red')

        //  show Message
        calculateMessage.textContent = 'Fill in the height and Weight 👨‍💻'

        // Remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent =''
        }, 3000);
        
    } else{
        // BMI Formula
        const cm = calculatecm.value/100
        const kg = calculatekg.value
        const bmi = Math.round(kg / (cm * cm))
        // show your health status
        if (bmi < 18.5) {
            // Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent =`Your Bmi is ${bmi} and you are skinny 😌`
        } else if(bmi<25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent =`Your Bmi is ${bmi} and you are healthy 😀`
        }

        //  To clear the input field
        calculatecm.value = ''
        caalculatekg.value = ''

        // Remove message from four second
       setTimeout(() => {
        calculateMessage.textContent = ''
       }, 4000);
    }
}
calculateform.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact__form')
const contactMessage = document.getElementById('contact__message')
const contactUser = document.getElementById('contact__user')

const sendEmail = (e) =>{
    e.preventDefault()

     // Check if the field has a value
     if (contactUser.value ==='') {

        // Add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        	// Show message
            contactMessage.textContent ='You must enter your email ☝'

            // Remove message three second
            setTimeout(() => {
               contactMessage.textContent = '' 
            }, 3000);

     } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_kzuqvlu','template_r7ab9ov','#contact__form','pgfaJLEZC_XrwafZo')
        .then(() => {
            // Show message and add color
            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'You registered successfully 💪' 

            // Remove message after three seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 3000);
        }, (error) =>{

            // Mail sending error
            alert('OOPS! SOMETHING HAS FAILED...',error)

        })

            // To clear the input field

            contactUser.value = ''

      
     }
}
contactForm.addEventListener('submit', sendEmail)

