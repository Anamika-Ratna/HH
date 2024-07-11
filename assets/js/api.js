document.getElementById('analyzeButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file to analyze');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('YOUR_TEXT_ANALYSIS_API_ENDPOINT', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        displayResults(result);
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error analyzing the file. Please try again.');
    }
});

function displayResults(result) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h3>Analysis Results</h3>
        <pre>${JSON.stringify(result, null, 2)}</pre>
    `;
}
