/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import Block from '../../services/Block';
import template from './button.pug';
import './button.css';

type ButtonTypes = 'button' | 'reset' | 'submit'

export enum ButtonTheme {
    standard = 'button_theme-standard',
    icon = 'button_theme-icon',
}

type ButtonProps = {
    text: string|Block;
    theme?: ButtonTheme;
    type?: ButtonTypes;
}

export class Button extends Block {
  constructor({ ...props }: ButtonProps) {
    super({
      theme: ButtonTheme.standard,
      type: 'button',
      ...props
    });
  }

  render() {
    return template;
  }
}
