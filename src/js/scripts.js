export default function scripts() {
  const addMessage = document.getElementById('add-message');

  function sendMessage(event) {
    const input = document.getElementById('message-text');
    const messageText = input.value;

    event.preventDefault();

    let data = {
      id: '111',
      time: Date.now(),
      text: messageText
    }

    alert(messageText)
  }
  
  addMessage.addEventListener('click', sendMessage); 
}
