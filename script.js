function openPaymentTab(currency, address) {
    const paymentPage = `
        <html>
        <head>
            <title>Pay with ${currency}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 20px;
                }
                input {
                    margin: 20px 0;
                    padding: 10px;
                    width: 80%;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                button {
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    border-radius: 5px;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <h2>Pay with ${currency}</h2>
            <p>Please send your payment to the following address:</p>
            <p><strong>${address}</strong></p>
            <p>After payment, submit your email for confirmation:</p>
            <form onsubmit="handleProof(event, '${currency}', '${address}')">
                <input type="email" id="email" placeholder="Enter your email" required>
                <button type="submit">Submit Proof</button>
            </form>
            <script>
                function handleProof(event, currency, address) {
                    event.preventDefault();
                    const email = document.getElementById('email').value;
                    alert(\`Thank you! Your payment will be confirmed manually.\\nEmail: \${email}\\nCurrency: \${currency}\\nAddress: \${address}\`);
                }
            </script>
        </body>
        </html>
    `;
    const newTab = window.open("", "_blank");
    newTab.document.write(paymentPage);
    newTab.document.close();
}