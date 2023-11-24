export default function scripts() {
  const addMessage = document.getElementById('add-message');

  function sendMessage(event) {
    const inputMessage = document.getElementById('input-message');
    const inputName = document.getElementById('input-name');
    const messageText = inputMessage.value;
    const nameText = inputName.value;

    event.preventDefault();

    let data = {
      id: '111',
      name: nameText,
      time: Date.now(),
      text: messageText
    }
  }
  
  addMessage.addEventListener('click', sendMessage); 
}
