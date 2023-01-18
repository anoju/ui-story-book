import './assets/css/front.min.css';

export const createButton = ({
  primary = false,
  size,
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  btn.className = ['button', size, mode].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
