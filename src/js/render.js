export default function render() {
  const app = document.getElementById('app');


  const form = `
    <form class="form" action="#">
      <input type="text" id="message-text"/>
      <button id="add-message" type="submit">Отправить<button/>
    </form>
  `

  app.innerHTML = form;
}

