/* eslint-disable max-classes-per-file */
import Block from '../../services/Block';

/* templates */
import template from './auth.pug';

/* required mixins */
import { Button } from '../../mixins/button';
import { SignInForm, SignUpForm } from '../../mixins/form';

/* styles */
import './auth.css';
import '../../layouts/modal.css';
import '../../layouts/third-centered.css';

type AuthFormProps = {
    title: string,
    authForm: string,
    submitButton: string,
    additionalLink: string,
    additionalLinkTitle: string,
}

export class SignInPage extends Block {
  constructor(props?: AuthFormProps) {
    super({
      ...props,
      title: 'Вход',
      authForm: new SignInForm(),
      submitButton: new Button({
        text: 'Авторизоваться',
        type: 'submit'
      }),
      additionalLink: '/',
      additionalLinkTitle: 'Нет аккаунта?'
    });
  }

  render(): string {
    return template;
  }
}

export class SignUpPage extends Block {
  constructor(props?: AuthFormProps) {
    super({
      ...props,
      title: 'Регистрация',
      authForm: new SignUpForm(),
      submitButton: new Button({
        text: 'Зарегистрироваться',
        type: 'submit'
      }),
      additionalLink: '/',
      additionalLinkTitle: 'Войти'
    });
  }

  render(): string {
    return template;
  }
}
