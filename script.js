document.getElementById('tweetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const tweet = document.getElementById('tweetInput').value;
    const resultDiv = document.getElementById('result');

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tweet: tweet })
    })
    .then(response => response.json())
    .then(data => {
        resultDiv.textContent = `Predicted Sentiment: ${data.predicted_sentiment}`;
    })
    .catch(error => {
        resultDiv.textContent = 'Error: Could not get sentiment prediction.';
        console.error('Error:', error);
    });
});
