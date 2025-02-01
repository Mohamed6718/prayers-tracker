const prayerButtons = document.querySelectorAll('.complete');
const historyList = document.getElementById('history-list');

prayerButtons.forEach(button => {
    button.addEventListener('click', function() {
        const prayerName = this.previousElementSibling.textContent;
        
        // Mark prayer as completed
        this.previousElementSibling.classList.toggle('completed');
        
        // Add to history
        const historyItem = document.createElement('li');
        historyItem.textContent = `${prayerName} - ${this.previousElementSibling.classList.contains('completed') ? 'Completed' : 'Not Completed'}`;
        historyList.appendChild(historyItem);
    });
});