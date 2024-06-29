// const apiKey = 'sk-KFAYcOqq5iPTOB5yF77b363b97C54c34BaC4045a113559Fc'; // Replace with your actual API key
const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('userInput');

async function sendMessage() {
    const message = userInput.value;
    if (!message) return;

    try {
        const response = await fetch('https://localhost:8080/chat/prompt='+message, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const aiMessage = data.choices[0].message.content;

        // Display the user message
        const userMessageElem = document.createElement('div');
        userMessageElem.classList.add('message', 'user');
        userMessageElem.textContent = `User: ${message}`;
        messagesDiv.appendChild(userMessageElem);

        // Display the AI message
        const aiMessageElem = document.createElement('div');
        aiMessageElem.classList.add('message', 'ai');
        aiMessageElem.textContent = `AI: ${aiMessage}`;
        messagesDiv.appendChild(aiMessageElem);

        // Scroll to the bottom of the chat
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        userInput.value = '';
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    }
}
