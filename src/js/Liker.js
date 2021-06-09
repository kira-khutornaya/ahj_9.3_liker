export default class Liker {
  constructor(container) {
    this.container = container;
  }

  bindToDOM() {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'Like';

    this.container.appendChild(btn);

    btn.addEventListener('click', this.onClick.bind(this));
  }

  createLike() {
    const like = document.createElement('div');
    like.classList.add('heart');

    const variant = Math.floor(Math.random() * 4) + 1;
    like.style.animation = `like-${variant} 500ms ease-out`;

    this.container.appendChild(like);
    like.addEventListener('animationend', () => like.remove());
  }

  onClick() {
    this.createLike();
  }
}
