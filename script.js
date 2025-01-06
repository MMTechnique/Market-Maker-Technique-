// Open a new tab for the payment page
function openPaymentTab(currency, address) {
    // Create the HTML structure for the payment page
    const paymentPage = `
        <html>
        <head>
            <title>Pay with ${currency}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    text-align: center;
                }
                input[type="email"] {
                    padding: 10px;
                    margin: 10px 0;
                    width: 80%;
                }
                button {
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
                p {
                    font-size: 18px;
                }
            </style>
        </head>
        <body>
            <h2>Pay with ${currency}</h2>
            <p>Please send your payment to the following address:</p>
            <p><strong>${address}</strong></p>
            <p>After sending the payment, enter your email below for confirmation:</p>
            <form onsubmit="sendEmail(event, '${currency}', '${address}')">
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
                <button type="submit">Send Email Confirmation</button>
            </form>
            <script>
                function sendEmail(event, currency, address) {
                    event.preventDefault();
                    const email = document.getElementById('email').value;
                    if (email) {
                        alert('Thank you! An email confirmation will be sent shortly.');
                        // Simulate sending the email (replace with backend code)
                        console.log(\`Email sent to: \${email}\\nCurrency: \${currency}\\nAddress: \${address}\`);
                    }
                }
            </script>
        </body>
        </html>
    `;
    const newTab = window.open("", "_blank");
    newTab.document.write(paymentPage);
    newTab.document.close();
}