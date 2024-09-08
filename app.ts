document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const toggleSkillsButton = document.getElementById('toggle_skills_button') as HTMLAnchorElement;
    const skillsSection = document.getElementById('skills_section') as HTMLElement;

    let isSkillsVisible: boolean = false; // Initially hidden

    function toggleSkillsSection(): void {
        if (isSkillsVisible) {
            skillsSection.style.display = 'none'; // Hide the section
            toggleSkillsButton.textContent = 'Show Skills'; // Change button text
        } else {
            skillsSection.style.display = 'block'; // Show the section
            toggleSkillsButton.textContent = 'Hide Skills'; // Change button text
        }
        isSkillsVisible = !isSkillsVisible; // Update the state
    }

    toggleSkillsButton.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault(); // Prevent anchor behavior
        toggleSkillsSection();
    });
});
