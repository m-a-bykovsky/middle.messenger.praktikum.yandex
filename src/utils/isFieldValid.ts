/* eslint-disable no-shadow */
enum ValidateFields {
    login = 'login',
    password = 'password',
    email = 'login',
}

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
            reg: /^[\w.-]+\w+@[\w.-]+[.]\w+[a-zA-Z]$/,
            errMsg: 'Некорректный email',
        },
        login: {
            reg: /^[a-zA-Z][a-zA-Z0-9_]{2,}$/,
            errMsg: 'От двух знаков без пробелов и спецсимволов',
        },
        password: {
            // eslint-disable-next-line no-useless-escape
            reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/,
            errMsg: 'От 8 до 16 знаков, по одной цифре, спецсимволу, буквам в нижнем и в верхнем регистрах',
        },
        tel: {
            reg: /\+?[0-9]{10,15}/,
            errMsg: 'До 10 до 15 знаков без пробелов',
        }
    };

    const isValid = validationRules[validationType].reg.test(value);
    const errMsg = isValid ? '' : validationRules[validationType].errMsg;

    return { isValid, errMsg };
}
