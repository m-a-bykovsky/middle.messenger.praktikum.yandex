/* eslint-disable max-classes-per-file */
import Page, { PageTemplate } from '../../services/Page';

/* templates */
import template from './auth.pug';

/* required mixins */
import { SignInForm, SignUpForm } from '../../mixins/form';

/* styles */
import './auth.css';

type AuthFormProps = {
    title: string,
    authForm: string,
    submitButton: string,
    additionalLink: string,
    additionalLinkTitle: string,
}

export class SignInPage extends Page {
    constructor(props?: AuthFormProps) {
        super(
            'о, это ты, привет!',
            PageTemplate.tertiary,
            {
                ...props,
                title: 'Вход',
                authForm: new SignInForm(),
                additionalLink: '/',
                additionalLinkTitle: 'Нет аккаунта?',
            }
        );
    }

    render(): string {
        return template;
    }
}

export class SignUpPage extends Page {
    constructor(props?: AuthFormProps) {
        super(
            'у меня будет новый друг',
            PageTemplate.tertiary,
            {
                ...props,
                title: 'Регистрация',
                authForm: new SignUpForm(),
                additionalLink: '/',
                additionalLinkTitle: 'Войти'
            }
        );
    }

    render(): string {
        return template;
    }
}
