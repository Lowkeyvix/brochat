document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let messageInput = document.getElementById('message-input');
    if (messageInput.value.trim()) {
      let messageDiv = document.createElement('div');
      messageDiv.textContent = messageInput.value;
      document.getElementById('messages-container').appendChild(messageDiv);
      messageInput.value = '';
      messageInput.focus();
    }
  });
  