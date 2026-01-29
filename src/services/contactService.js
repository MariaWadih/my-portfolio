import emailjs from '@emailjs/browser';

/**
 * Service to handle contact form submissions using EmailJS
 * @param {HTMLFormElement} formElement - The form element to send
 * @returns {Promise} - The promise from emailjs.sendForm
 */
export const sendContactForm = (formElement) => {
    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    return emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formElement,
        PUBLIC_KEY
    );
};
