// Product Category Filter
const tabBtns = document.querySelectorAll('.tab-btn');
const productCards = document.querySelectorAll('.product-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        
        productCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


// Product Enquiry Modal
const enquiryModal = document.getElementById('enquiryModal');
const enquiryForm = document.getElementById('enquiryForm');
const closeModal = document.querySelector('.close');

// Open modal when "Enquire Now" button is clicked
document.querySelectorAll('.product-card .btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productCard = btn.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        document.getElementById('productName').value = productName;
        enquiryModal.style.display = 'block';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    enquiryModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === enquiryModal) {
        enquiryModal.style.display = 'none';
    }
});

// Handle enquiry form submission
enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(enquiryForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    alert('Thank you for your enquiry! We will contact you soon.');
    
    // Reset form and close modal
    enquiryForm.reset();
    enquiryModal.style.display = 'none';
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        alert('Thank you for contacting us! We will get back to you within 24 hours.');
        
        // Reset form
        contactForm.reset();
    });
}

