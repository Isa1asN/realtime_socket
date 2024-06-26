const chatForm = document.getElementById('chat-form'); 
const chatMessages = document.querySelector('.chat-messages');

const socket = io();

socket.on('message', message => {
    outputMessage(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = e.target.elements.msg.value;
    socket.emit('chatMessage', msg);
    e.target.elements.msg.value = '';
});

function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<div class="message">
    <p class="meta">Mary <span>9:15pm</span></p>
    <p class="text">
        ${message}
    </p>
</div>`
    document.querySelector('.chat-messages').appendChild(div);
};