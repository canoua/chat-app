export default function render() {
  const app = document.getElementById('app');

  const form = `
    <div class="wrapper">
      <div class="chat"></div>
      <form class="form" action="#">
        <input type="text" class="input" id="input-name" placeholder="Ваше имя"/>
        <input type="text" class="input" id="input-message" placeholder="Введите сообщение" />
        <button class="btn" id="add-message" type="submit">Отправить<button/>
      </form>
    </div>
  `

  app.innerHTML = form;
}

