/* eslint-disable max-classes-per-file */
import Block, { BlockProps } from '../../services/Block';

/* templates */
import { template as signInTpl } from './template/signin.pug';
import { template as signUpTpl } from './template/signup.pug';
import { template as profileMainTpl } from './template/profile-main.pug';
import { template as profileSecurityTpl } from './template/profile-security.pug';

/* required mixins */
import { Input, InputTheme } from '../../mixins/input';

export class SignInForm extends Block {
  constructor() {
    super({
      login: new Input({
        name: 'login',
        title: 'Логин'
      }),
      password: new Input({
        name: 'password',
        title: 'Пароль',
        type: 'password'
      }),
    });
  }

  render() {
    return signInTpl;
  }
}

export class SignUpForm extends Block {
  constructor() {
    super({
      email: new Input({
        name: 'email',
        title: 'Почта',
        type: 'email'
      }),
      login: new Input({
        name: 'login',
        title: 'Логин'
      }),
      firstName: new Input({
        name: 'first_name',
        title: 'Имя'
      }),
      secondName: new Input({
        name: 'second_name',
        title: 'Фамилия'
      }),
      phone: new Input({
        name: 'phone',
        title: 'Телефон',
        type: 'tel'
      }),
      password: new Input({
        name: 'password',
        title: 'Пароль',
        type: 'password'
      }),
      passwordRepeate: new Input({
        name: 'password-repeat',
        title: 'Пароль (еще разок)',
        type: 'password'
      }),
    });
  }

  render() {
    return signUpTpl;
  }
}

type ProfileMainFormProps = {
    isDisabled?: boolean,
    mockData? : Record<string, string>
} & BlockProps

export class ProfileMainForm extends Block {
  constructor(props: ProfileMainFormProps) {
    super({
      email: new Input({
        name: 'email',
        title: 'Почта',
        type: 'email',
        value: props.mockData!.email,
        theme: InputTheme.inline,
        isDisabled: props.isDisabled
      }),
      login: new Input({
        name: 'login',
        title: 'Логин',
        value: props.mockData!.login,
        theme: InputTheme.inline,
        isDisabled: props.isDisabled
      }),
      firstName: new Input({
        name: 'first_name',
        title: 'Имя',
        value: props.mockData!.firstName,
        theme: InputTheme.inline,
        isDisabled: props.isDisabled
      }),
      secondName: new Input({
        name: 'second_name',
        title: 'Фамилия',
        value: props.mockData!.secondName,
        theme: InputTheme.inline,
        isDisabled: props.isDisabled
      }),
      displayName: new Input({
        name: 'display_name',
        title: 'Имя в чате',
        value: props.mockData!.displayName,
        theme: InputTheme.inline,
        isDisabled: props.isDisabled
      }),
      phone: new Input({
        name: 'phone',
        title: 'Телефон',
        type: 'tel',
        value: props.mockData!.phone,
        theme: InputTheme.inline,
        isDisabled: props.isDisabled
      })
    });
  }

  render() {
    return profileMainTpl;
  }
}

export class ProfileSecurityForm extends Block {
  constructor() {
    super({
      oldPassword: new Input({
        name: 'oldPassword',
        title: 'Старый пароль',
        value: '•••••••••',
        type: 'password',
        theme: InputTheme.inline
      }),
      newPassword: new Input({
        name: 'newPassword',
        title: 'Новый пароль',
        type: 'password',
        theme: InputTheme.inline
      }),
      repeatNewPassword: new Input({
        name: 'repeatNewPassword',
        title: 'Повторите новый пароль',
        type: 'password',
        theme: InputTheme.inline
      }),
    });
  }

  render() {
    return profileSecurityTpl;
  }
}
