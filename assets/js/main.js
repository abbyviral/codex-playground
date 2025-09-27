const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const yearSpan = document.getElementById('year');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

const leadForm = document.getElementById('lead-form');
if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = leadForm.querySelector('#lead-name').value.trim();
    const email = leadForm.querySelector('#lead-email').value.trim();
    const success = leadForm.querySelector('.form-success');

    if (!name || !email) {
      leadForm.reportValidity();
      return;
    }

    const message = encodeURIComponent(
      `Hi Mentor Sir! I am ${name}. I just downloaded the AI study guide. Please keep me posted on upcoming trainings.`
    );

    window.open(`https://wa.me/919179730210?text=${message}`, '_blank');

    if (success) {
      success.hidden = false;
    }

    const downloadLink = document.createElement('a');
    downloadLink.href = 'assets/lead-magnet.pdf';
    downloadLink.download = 'Mentor-Sir-AI-Study-Guide.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    leadForm.reset();
  });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const entries = Object.fromEntries(formData.entries());
    const requiredFields = ['name', 'email', 'phone', 'enquiry'];

    const hasMissing = requiredFields.some((field) => !entries[field] || !entries[field].trim());
    if (hasMissing) {
      contactForm.reportValidity();
      return;
    }

    const enquiryDetails = `\nOrganisation: ${entries.organisation || 'Not provided'}\nEnquiry Type: ${entries.enquiry}\nMessage: ${entries.message || 'Not shared'}`;
    const message = encodeURIComponent(
      `Hello Mentor Sir, this is ${entries.name}. I would like to discuss a ${entries.enquiry}.\nEmail: ${entries.email}\nPhone: ${entries.phone}${enquiryDetails}`
    );

    window.open(`https://wa.me/919179730210?text=${message}`, '_blank');

    const success = contactForm.querySelector('.form-success');
    if (success) {
      success.hidden = false;
    }
    contactForm.reset();
  });
}

const header = document.querySelector('.site-header');
let lastScroll = 0;
if (header) {
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 150) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScroll = current;
  });
}
