document.addEventListener("DOMContentLoaded", function() {
    const marketData = {
        price: '$550',
        sentiment: 'Bullish',
        news: [
            'Market reaches new all-time highs.',
            'Investors react to major crypto developments.'
        ],
        buyers: 100
    };

    document.getElementById('latest-price').innerText = marketData.price;
    document.getElementById('sentiment').innerText = marketData.sentiment;

    const newsList = document.getElementById('news-list');
    marketData.news.forEach(news => {
        const listItem = document.createElement('li');
        listItem.textContent = news;
        newsList.appendChild(listItem);
    });

    document.getElementById('buyers-count').innerText = marketData.buyers;

    const ctx = document.getElementById('market-chart').getContext('2d');
    const marketChart = new Chart(ctx, {
        type: 'candlestick',
        data: {
            labels: ['Open', 'High', 'Low', 'Close'],
            datasets: [{
                label: 'Market Data',
                data: [
                    {x: '2025-01-04', o: 100, h: 110, l: 90, c: 105}
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {type: 'time'}
            }
        }
    });

    function openPopup(paymentMethod) {
        const email = prompt("Please enter your email address:");
        if (email) {
            const paymentProof = prompt("Please provide proof of payment:");
            const message = `Email: ${email}\nPayment Proof: ${paymentProof}`;
            window.open(`mailto:RichForever9@protonmail.com?subject=Market Makers Technique Purchase - ${paymentMethod}&body=${message}`);
        }
    }
});