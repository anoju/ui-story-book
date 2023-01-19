import { createButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Component/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['button', 'a']
    },
    line: { control: 'boolean' },
    round: { control: 'boolean' },
    btnColor: {
      control: { type: 'select' },
      options: ['defalut', 'primary', 'gray', 'gray2', 'gray3']
    },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'select' },
      options: ['defalut', 'h24', 'h32', 'h38', 'h52', 'h60']
    },
    disabled: { control: 'boolean' }
  }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Defalut = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Defalut.args = {
  btnColor: 'primary',
  size: 'defalut',
  line: false,
  round: false,
  disabled: false,
  tag: 'button',
  label: '기본 버튼'
};

export const line = Template.bind({});
line.args = {
  btnColor: 'defalut',
  size: 'defalut',
  line: true,
  round: false,
  disabled: false,
  tag: 'button',
  label: '라인 버튼'
};

export const round = Template.bind({});
round.args = {
  btnColor: 'defalut',
  size: 'defalut',
  line: true,
  round: true,
  disabled: false,
  tag: 'button',
  label: '라운드 버튼'
};
