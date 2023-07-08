/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import Block, { BlockProps } from '../../services/Block';
import { handleInput, ValidationTypes } from '../../utils/isFieldValid';
import template from './input.pug';
import './input.css';

export enum InputType {
    input = 'input',
    password = 'password',
    tel = 'tel',
    file = 'file',
    search = 'search',
    email = 'email',
}

export enum InputTheme {
    standard = 'input-field_theme-standard',
    inline = 'input-field_theme-inline',
    primary = 'input-field_theme-primary'
}

type InputProps = {
    name: string,
    title: string,
    type?: InputType,
    value?: string,
    theme?: InputTheme,
    isNeedValidate?: boolean,
    validationType?: ValidationTypes,
    isRequired?: boolean,
    isDisabled?: boolean,
    /**
     * @events названия событий для addEventListener
     */
    events?: Record<string, () => void>
} & BlockProps;

type ValidationsType = Record<string, (e: Event) => void>;

/**
 * defaults:
 * @type input
 * @theme standard
 * @isNeedValidate true
 * @validationType input
*/
export class Input extends Block {
    constructor({ ...props }: InputProps) {
        const eventsWithValidation = (): InputProps['events'] | ValidationsType => {
            if (props.isNeedValidate === false) return { ...props.events };

            const validations: ValidationsType = {
                focus: (e) => handleInput(e, this),
                blur: (e) => handleInput(e, this),
            };

            return { ...props.events, ...validations };
        };

        super({
            type: 'input',
            theme: InputTheme.standard,
            isNeedValidate: true,
            validationType: props.validationType ? props.validationType : 'input',
            ...props,
            events: eventsWithValidation(),
        });
    }

    render() {
        return template;
    }
}
