const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('userInput');

function displayMessage(sender, content) {
    const messageElem = document.createElement('div');
    messageElem.classList.add('message', sender);
    messageElem.textContent = content;
    messagesDiv.appendChild(messageElem);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

async function sendMessage() {
    const message = userInput.value;
    if (!message) return;

    displayMessage('user', message);

    try {
        const response = await fetch('http://localhost:8080/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        displayMessage('ai', data.response);
    } catch (error) {
        displayMessage('ai', 'Failed to get response.');
        console.error('Error:', error);
    }

    userInput.value = '';
}
// 绑定回车键事件
userInput.form.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
userInput.form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendMessage();
});
