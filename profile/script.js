
const profileDropdown = document.getElementById('profileDropdown');
// Get the dropdown content
const dropdownContent = profileDropdown.querySelector('.dropdown-content');
profileDropdown.addEventListener('mouseenter', function() {
    dropdownContent.style.display = 'block';
});

profileDropdown.addEventListener('mouseleave', function() {
 
    dropdownContent.style.display = 'none';
});

profileDropdown.addEventListener('click', function(event) {
    event.preventDefault(); 
});
