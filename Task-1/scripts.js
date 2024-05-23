document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            alert(`You clicked on ${member.querySelector('h3').innerText}`);
        });
    });
});
