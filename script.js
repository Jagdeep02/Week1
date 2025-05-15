const buttons = document.querySelectorAll('button[data-target]');
const boxes = document.querySelectorAll('.box');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const targetBox = document.getElementById(targetId);

    boxes.forEach(box => {
      if (box !== targetBox) {
        box.classList.remove('open');
      }
    });

    targetBox.classList.toggle('open');
  });
});

document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        contactMethod: document.querySelector('input[name="contact"]:checked')?.value,
        interests: Array.from(document.querySelectorAll('input[name="interests"]:checked'))
            .map(cb => cb.value)
    };

    // Retrieve existing inquiries or initialize as empty array
    const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    // Add new inquiry
    inquiries.push(formData);
    // Store back to localStorage
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
    
    console.log('Form submitted:', formData);
    
  
    this.reset();
    
    alert('Thank you for your inquiry! We will get back to you soon.');
});
