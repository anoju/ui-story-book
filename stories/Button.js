import './assets/css/front.min.css';

export const createButton = ({
  line,
  round,
  tag,
  btnColor,
  size,
  label,
  onClick,
}) => {
  let btn;
  if(tag === 'a'){
    btn = document.createElement('a');
    btn.href = '#';
    btn.role = 'button';
  }else{
    btn = document.createElement('button');
    btn.type = 'button';
  }
  btn.innerText = label;
  btn.addEventListener('click', function(e){
    if(tag === 'a') e.preventDefault();
    if(!!onClick) onClick();
  });

  const classAray= ['button'];
  if(btnColor && btnColor !== 'defalut') classAray.push(btnColor);
  if(size && size !== 'defalut') classAray.push(size);
  if(line) classAray.push('line');
  if(round) classAray.push('round');
  btn.className = classAray.join(' ');

  return btn;
};
