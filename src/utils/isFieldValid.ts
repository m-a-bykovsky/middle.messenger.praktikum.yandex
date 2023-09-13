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
    /** без regexp, только для проверки совпадения значений
     */
    password_repeat = 'password-repeat',
    tel = 'tel',
}
function isValueValid(validationType: ValidationTypes, value: string): ValidationResult {
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
            reg: /^[a-zа-яA-ZА-Я0-9_]{2,}$/,
            errMsg: 'От двух знаков без пробелов и спецсимволов',
        },
        password: {
            // eslint-disable-next-line no-useless-escape
            reg: /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/,
            errMsg: 'От 8 до 16 знаков, по одной цифре, спецсимволу,буквам в нижнем и в верхнем регистрах',
        },
        tel: {
            reg: /\+?[0-9]{10,15}/,
            errMsg: 'До 10 до 15 цифр без пробелов',
        }
    };

    const isValid = validationRules[validationType].reg.test(value);
    const errMsg = isValid ? undefined : validationRules[validationType].errMsg;

    return { isValid, errMsg };
}

export const isFieldValid = (e: Event, comp: BlockProps): boolean => {
    const inputElement: HTMLInputElement | null = document.querySelector(`input#${comp.props.name}[type="${comp.props.type}"]`);

    if (inputElement === null) throw new Error('Invalid input');

    const inputValue: string = inputElement.value.trim();

    let { isValid, errMsg } = isValueValid(comp.props.validationType!, inputValue);

    /* @ask доп. проверка совпадения значений паролей
     *      как сделать лучше?
     */

    if (comp.props.name === ValidationTypes.password_repeat
        && isValid
    ) {
        const passwordInput: HTMLInputElement | null = document.querySelector(`input#${ValidationTypes.password}[type="${ValidationTypes.password}"]`);
        if (passwordInput === null) throw new Error("Can't find main password` field");

        const passwordInputValue: string = passwordInput.value.trim();
        if (inputValue !== passwordInputValue) {
            errMsg = 'Не совпадает с паролем, введенным выше';
            isValid = false;
        }
    }

    comp.setProps({ errMsg });

    const inputElementUpdated: HTMLInputElement = document.querySelector(`input#${comp.props.name}[type="${comp.props.type}"]`)!;
    inputElementUpdated.value = inputValue;

    if (e.type === 'focus') inputElementUpdated.focus();
    console.log(comp.props.name, isValid);
    return isValid;
};
