const toggleBtn = document.getElementById('navToggleBtn')
const navLinks = document.getElementById('navLinks')

toggleBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active')
})