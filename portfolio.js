// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.right');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.right a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Project Filters
// document.addEventListener('DOMContentLoaded', () => {
//     const filterButtons = document.querySelectorAll('.filter-btn');
//     const projectCards = document.querySelectorAll('.project-card');

//     filterButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             // Remove active class from all buttons
//             filterButtons.forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');

//             const filterValue = button.dataset.filter;

//             projectCards.forEach(card => {
//                 if (filterValue === 'all' || card.dataset.category === filterValue) {
//                     card.classList.remove('hidden');
//                     card.style.opacity = '1';
//                     card.style.transform = 'scale(1)';
//                 } else {
//                     card.style.opacity = '0';
//                     card.style.transform = 'scale(0.8)';
//                     setTimeout(() => card.classList.add('hidden'), 300);
//                 }
//             });
//         });
//     });
// });

// Email Form Handler
// function sendEmail(e) {
//     e.preventDefault();

//     // Get form data
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Initialize EmailJS with your user ID
//     emailjs.init("YOUR_USER_ID"); // Replace with your actual Email.js user ID

//     // Prepare template parameters
//     const templateParams = {
//         from_name: name,
//         from_email: email,
//         message: message
//     };

//     // Send email using EmailJS
//     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
//         .then(function (response) {
//             console.log('SUCCESS!', response.status, response.text);
//             alert('Message sent successfully!');
//             // Clear form
//             document.getElementById('contact-form').reset();
//         }, function (error) {
//             console.log('FAILED', error);
//             alert('Failed to send message. Please try again.');
//         });
// }

function validateMessage(message) {
    if (!message.trim()) {
        showError('Please write a message first!');
        return false;
    }
    if (message.length > 1000) { // Example character limit
        showError('Message is too long. Please keep it under 1000 characters.');
        return false;
    }
    return true;
}

function showError(message) {
    // You can replace alert with a better UI notification
    alert(message);
}

function sendWhatsAppMessage() {
    const messageElement = document.getElementById('whatsapp-message');
    const message = messageElement.value;

    if (!validateMessage(message)) {
        return;
    }

    try {
        const phoneNumber = '918271310911'; // Replace with your number
        const encodedMessage = encodeURIComponent(message.trim());
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
        messageElement.value = '';
    } catch (error) {
        showError('Failed to open WhatsApp. Please try again.');
    }
}

function sendInstagramMessage() {
    const message = document.getElementById('whatsapp-message').value;
    if (!message) {
        alert('Please write a message first!');
        return;
    }

    // Replace with your actual Instagram username
    const instagramUsername = 'nexora_edge';

    // Create Instagram DM URL
    const instagramURL = `https://www.instagram.com/direct/new/?text=${encodeURIComponent(message)}`;

    // Open Instagram DM in new tab
    window.open(instagramURL, '_blank');

    // As fallback, if direct message doesn't work, open profile
    setTimeout(() => {
        window.open(`https://www.instagram.com/${instagramUsername}`, '_blank');
    }, 500);

    // Clear the textarea after sending
    document.getElementById('whatsapp-message').value = '';
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });

    // Filter projects
    projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        if (category === 'all' || projectCategory === category) {
            project.style.display = 'block';
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'scale(1)';
            }, 100);
        } else {
            project.style.opacity = '0';
            project.style.transform = 'scale(0.8)';
            setTimeout(() => {
                project.style.display = 'none';
            }, 300);
        }
    });
}
