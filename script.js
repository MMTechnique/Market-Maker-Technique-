function openPopup(paymentMethod) {
    var email = prompt("Please enter your email address:");
    if (email) {
        var paymentProof = prompt("Please provide proof of payment:");
        var message = "Email: " + email + "\nPayment Proof: " + paymentProof;
        window.open("mailto:RichForever9@protonmail.com?subject=Market Makers Technique Purchase - " + paymentMethod + "&body=" + message);
    }
}