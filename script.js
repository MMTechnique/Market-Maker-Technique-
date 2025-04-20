function openPaymentTab(currency, address) {
    const paymentPage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pay with ${currency}</title>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
            <style>
                :root {
                    --primary-color: #2563eb;
                    --secondary-color: #1e40af;
                    --background-color: #f8fafc;
                    --text-color: #1e293b;
                    --card-bg: #ffffff;
                }

                body {
                    font-family: 'Poppins', sans-serif;
                    background-color: var(--background-color);
                    color: var(--text-color);
                    margin: 0;
                    padding: 0;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .header {
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    color: white;
                    width: 100%;
                    padding: 2rem 0;
                    text-align: center;
                    position: relative;
                    margin-bottom: 2rem;
                }

                .header::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('data:image/svg+xml,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" fill="none"/><circle cx="3" cy="3" r="0.5" fill="rgba(255,255,255,0.2)"/></svg>') repeat;
                    opacity: 0.3;
                }

                .container {
                    max-width: 600px;
                    width: 90%;
                    margin: 0 auto;
                    padding: 2rem;
                    background: var(--card-bg);
                    border-radius: 12px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }

                .steps {
                    text-align: left;
                    margin: 2rem 0;
                    padding: 0;
                }

                .step {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                    padding: 1rem;
                    background: #f8fafc;
                    border-radius: 8px;
                }

                .step-number {
                    background: var(--primary-color);
                    color: white;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 1rem;
                    flex-shrink: 0;
                }

                .step-content {
                    flex: 1;
                }

                .crypto-address {
                    background: #f8fafc;
                    padding: 1rem;
                    border-radius: 8px;
                    font-family: monospace;
                    margin: 1rem 0;
                    position: relative;
                    word-break: break-all;
                }

                .copy-button {
                    position: absolute;
                    right: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    background: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.9rem;
                    transition: all 0.3s ease;
                }

                .copy-button:hover {
                    background: var(--secondary-color);
                }

                .email-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--primary-color);
                    color: white;
                    text-decoration: none;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    font-weight: 500;
                    margin-top: 1rem;
                    transition: all 0.3s ease;
                }

                .email-button:hover {
                    background: var(--secondary-color);
                    transform: translateY(-2px);
                }

                .currency-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: var(--primary-color);
                }

                .important-note {
                    margin-top: 2rem;
                    padding: 1rem;
                    background: #fef3c7;
                    border-left: 4px solid #d97706;
                    border-radius: 4px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h2>Pay with ${currency}</h2>
            </div>
            <div class="container">
                <i class="currency-icon ${getCurrencyIcon(currency)}"></i>
                
                <div class="steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h3>Send Payment</h3>
                            <p>Send <strong>$550 USD</strong> worth of ${currency} to this address:</p>
                            <div class="crypto-address">
                                <span>${address}</span>
                                <button class="copy-button" onclick="copyAddress('${address}')">
                                    <i class="far fa-copy"></i> Copy
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h3>Send Payment Proof</h3>
                            <p>After sending the payment, email your transaction proof to:</p>
                            <a href="mailto:RichForever9@protonmail.com" class="email-button">
                                <i class="far fa-envelope"></i>
                                RichForever9@protonmail.com
                            </a>
                        </div>
                    </div>

                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h3>Receive the Course</h3>
                            <p>Once your payment is verified, you'll receive the Market Makers Technique course directly via email.</p>
                        </div>
                    </div>
                </div>

                <div class="important-note">
                    <strong>Important:</strong> Make sure to include your transaction ID or screenshot in your email for faster verification.
                </div>
            </div>

            <script>
                function getCurrencyIcon(currency) {
                    const icons = {
                        'BTC': 'fab fa-bitcoin',
                        'ETH': 'fab fa-ethereum',
                        'LTC': 'fas fa-coins'
                    };
                    return icons[currency] || 'fas fa-coins';
                }

                function copyAddress(address) {
                    navigator.clipboard.writeText(address).then(() => {
                        const button = document.querySelector('.copy-button');
                        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                        setTimeout(() => {
                            button.innerHTML = '<i class="far fa-copy"></i> Copy';
                        }, 2000);
                    });
                }
            </script>
        </body>
        </html>
    `;
    const newTab = window.open("", "_blank");
    newTab.document.write(paymentPage);
    newTab.document.close();
}