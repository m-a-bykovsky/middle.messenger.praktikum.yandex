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

export function isFieldValid(fieldType: string): ValidationResult {
    const isValid = false;
    const errMsg = 'axaxa';

    const validationResult: ValidationResult = (isValid)
        ? { isValid }
        : { isValid, errMsg };

    return validationResult;
}
