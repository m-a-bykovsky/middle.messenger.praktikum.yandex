/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import Block, { BlockProps } from '../../services/Block';
import { isFieldValid } from '../../utils/isFieldValid';
import template from './input.pug';
import './input.css';

type InputTypes =
    'input' |
    'password' |
    'email' |
    'tel' |
    'file' |
    'search'
    ;

export enum InputTheme {
    standard = 'input-field_theme-standard',
    inline = 'input-field_theme-inline',
    primary = 'input-field_theme-primary'
}

type InputProps = {
    name: string,
    title: string,
    type?: InputTypes,
    value?: string,
    theme?: InputTheme,
    isNeedValidate?: boolean,
    isRequired?: boolean,
    isDisabled?: boolean,
    /**
     * @events названия событий для addEventListener
     */
    events?: Record<string, any>
} & BlockProps;

/**
 * defaults:
 * @type input
 * @theme standard
 * @isNeedValidate true
 */
export class Input extends Block {
    constructor({ ...props }: InputProps) {
        const eventsWithValidation = (): Record<string, () => void> => {
            if (props.isNeedValidate === false) return { ...props.events };

            const validations: InputProps['events'] = {
                blur: (e: Event) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const { isValid, errMsg } = isFieldValid(this.props.type!);
                    if (isValid) return;
                    this.setProps({ errMsg });
                },
            };

            return { ...props.events, ...validations };
        };

        super({
            type: 'input',
            theme: InputTheme.standard,
            ...props,
            events: eventsWithValidation(),
        });
    }

    render() {
        return template;
    }
}
