import { BlockProps } from '../services/Block';

/* eslint-disable no-shadow */
type ValidationResult = {
    isValid: boolean,
    errMsg?: string
}

export enum ValidationTypes {
    input = 'input',
    email = 'email',
    login = 'login',
    password = 'password',
    tel = 'tel',
}
export function isFieldValid(validationType: ValidationTypes, value: string): ValidationResult {
    const validationRules: Record<string, Record<string, any>> = {
        input: {
            reg: /^[\s\S]+/,
            errMsg: 'Поле не должно быть пустым или состоять из пробелов',
        },
        email: {
            // eslint-disable-next-line no-useless-escape
            reg: /^[\w.-]+\w+@[\w.-]+[.][a-zA-Z]+$/,
            errMsg: 'Некорректный email',
        },
        login: {
            reg: /^[a-zA-Z0-9_]{1,}$/,
            errMsg: 'От двух знаков без пробелов и спецсимволов',
        },
        password: {
            // eslint-disable-next-line no-useless-escape
            reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/,
            errMsg: 'От 8 до 16 знаков, по одной цифре, спецсимволу, буквам в нижнем и в верхнем регистрах',
        },
        tel: {
            reg: /\+?[0-9]{10,15}/,
            errMsg: 'До 10 до 15 цифр без пробелов',
        }
    };

    const isValid = validationRules[validationType].reg.test(value);
    const errMsg = isValid ? '' : validationRules[validationType].errMsg;

    return { isValid, errMsg };
}

export const handleInput = (e: Event, comp: BlockProps) => {
    e.preventDefault();
    e.stopPropagation();

    const inputElement: HTMLInputElement | null = document.querySelector(`input#${comp.props.name}[type="${comp.props.type}"]`);
    if (inputElement === null) return;
    const value: string = inputElement.value.trim();
    const { errMsg } = isFieldValid(comp.props.validationType!, value);

    comp.setProps({ errMsg });

    const inputElementUpdated: HTMLInputElement = document.querySelector(`input#${comp.props.name}[type="${comp.props.type}"]`)!;
    inputElementUpdated.value = value;
    if (e.type === 'focus') inputElementUpdated.focus();
};
