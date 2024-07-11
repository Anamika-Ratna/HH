document.addEventListener('DOMContentLoaded', () => {
    const clearButton = document.getElementById('clear-button');
    const thoughtsdustbin = document.getElementById('thoughtsdustbin');
  
    clearButton.addEventListener('click', () => {
      thoughtsdustbin.value = ''; // Clear the content
    });
  });
