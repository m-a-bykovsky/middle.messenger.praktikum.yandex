/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import Block, { BlockProps } from '../../services/Block';
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
    isRequired?: boolean,
    isDisabled?: boolean,
} & BlockProps;

export class Input extends Block {
    constructor({ ...props }: InputProps) {
        super({
            id: props.name,
            for: props.name,
            type: 'input',
            theme: InputTheme.standard,
            ...props
        });
    }

    render() {
        return template;
    }
}
