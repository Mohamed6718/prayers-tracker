const prayerButtons = document.querySelectorAll('.complete');
const historyList = document.getElementById('history-list');
const prayerList = document.getElementById('prayer-list');

// Load saved prayers from localStorage
const prayers = JSON.parse(localStorage.getItem('prayers')) || {
    Fajr: false,
    Dhuhr: false,
    Asr: false,
    Maghrib: false,
    Isha: false
};

// Function to update the UI based on saved prayers
function updateUI() {
    for (const prayer in prayers) {
        const prayerItem = Array.from(prayerList.children).find(li => li.firstChild.textContent === prayer);
        if (prayerItem) {
            const span = prayerItem.querySelector('span');
            if (prayers[prayer]) {
                span.classList.add('completed');
            } else {
                span.classList.remove('completed');
            }
        }
    }
}

// Function to save prayers to localStorage
function savePrayers() {
    localStorage.setItem('prayers', JSON.stringify(prayers));
}

// Initialize the UI
updateUI();

prayerButtons.forEach(button => {
    button.addEventListener('click', function() {
        const prayerName = this.previousElementSibling.textContent;

        // Toggle completion status
        prayers[prayerName] = !prayers[prayerName];
        this.previousElementSibling.classList.toggle('completed');

        // Add to history
        const historyItem = document.createElement('li');
        historyItem.textContent = `${prayerName} - ${prayers[prayerName] ? 'Completed' : 'Not Completed'}`;
        historyList.appendChild(historyItem);

        // Save updated prayers to localStorage
        savePrayers();
    });
});