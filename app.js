document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    var toggleSkillsButton = document.getElementById('toggle_skills_button');
    var skillsSection = document.getElementById('skills_section');
    var isSkillsVisible = false; // Initially hidden
    function toggleSkillsSection() {
        if (isSkillsVisible) {
            skillsSection.style.display = 'none'; // Hide the section
            toggleSkillsButton.textContent = 'Show Skills'; // Change button text
        }
        else {
            skillsSection.style.display = 'block'; // Show the section
            toggleSkillsButton.textContent = 'Hide Skills'; // Change button text
        }
        isSkillsVisible = !isSkillsVisible; // Update the state
    }
    toggleSkillsButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent anchor behavior
        toggleSkillsSection();
    });
});
