function openPopup(paymentMethod) {
    const email = prompt("Please enter your email address:");
    if (email && validateEmail(email)) {
        const paymentProof = prompt("Please provide proof of payment:");
        const message = `Email: ${email}\nPayment Proof: ${paymentProof}`;
        window.open(`mailto:RichForever9@protonmail.com?subject=Market Makers Technique Purchase - ${paymentMethod}&body=${encodeURIComponent(message)}`);
    } else {
        alert("Please enter a valid email address.");
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
