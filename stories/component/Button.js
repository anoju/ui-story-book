import '../assets/css/front.min.css';

export const createButton = ({
  line,
  round,
  tag,
  btnColor,
  size,
  label,
  disabled = false,
  onClick,
}) => {
  let btn;
  if(tag === 'a'){
    btn = document.createElement('a');
    btn.href = '#';
    btn.role = 'button';
    if(disabled) btn.ariaDisabled = true;
  }else{
    btn = document.createElement('button');
    btn.type = 'button';
    if(disabled) btn.disabled = true;
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
  if(disabled && tag === 'a') classAray.push('disabled');
  btn.className = classAray.join(' ');

  return btn;
};
