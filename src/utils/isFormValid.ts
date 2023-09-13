import { Input } from '../mixins/input';
import Block, { BlockProps } from '../services/Block';
import { isFieldValid } from './isFieldValid';

export const isFormValid = (form: Block, e: Event): boolean => {
    let isValid: boolean = true;

    Object.values(form.props).forEach((input: BlockProps) => {
        if (!(input instanceof Input)) return;
        if (!isFieldValid(e, input) && isValid) isValid = false;
    });

    return isValid;
};
