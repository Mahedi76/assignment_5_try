        
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCountEl = document.getElementById('heartCount');
const coinCountEl = document.getElementById('coinCount');
const copyCountEl = document.getElementById('copyCount');
const callHistoryEl = document.getElementById('callHistory');
const clearHistoryBtn = document.getElementById('clearHistory');

document.querySelectorAll('.heartBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        heartCount++;
        heartCountEl.innerHTML = heartCount + ' <span>❤️</span>';
    });
});

document.querySelectorAll('.copyBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const number = card.querySelector('.cardNumber').innerText;
        navigator.clipboard.writeText(number).then(() => {
            copyCount++;
            copyCountEl.innerText = copyCount + ' Copy';
            alert(number + ' copied to clipboard!');
        });
    });
});

document.querySelectorAll('.callBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const name = card.querySelector('.cardTitle').innerText;
        const number = card.querySelector('.cardNumber').innerText;
        if (coinCount < 20) {
            alert('Not enough coins to make a call!');
            return;
        }
        coinCount -= 20;
        coinCountEl.innerHTML = coinCount + ' <span><i class="fa-solid fa-star"></i></span>';
        alert('Calling ' + name + ' (' + number + ')');
        // Add to Call History
        const now = new Date();
        const time = now.toLocaleTimeString();
        const div = document.createElement('div');
        div.className = 'flex items-center justify-between bg-gray-50 rounded-lg p-[16px]';
        div.innerHTML = `<div>
            <p class="font-bold text-gray-800">${name}</p>
            <p class="text-sm text-gray-500">${number}</p>
        </div>
        <span class="text-xs text-gray-400">${time}</span>`;
        callHistoryEl.prepend(div);
    });
});

clearHistoryBtn.addEventListener('click', () => {
    callHistoryEl.innerHTML = '';
});