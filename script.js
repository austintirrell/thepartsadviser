const toggleBtn = document.getElementById('toggleBtn')
const navLinks = document.getElementById('navLinks')

toggleBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active')
})