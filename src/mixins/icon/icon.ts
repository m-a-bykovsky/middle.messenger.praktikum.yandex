import Block from '../../services/Block';
import template from './icon.pug';
import './icon.css';

/**
 * Список классов для отображения иконок лежит в icon.css
 */
type IconProps = {
    iconClass?: string;
}

export class Icon extends Block {
    constructor({ ...props }: IconProps) {
        super(props);
    }

    render() {
        return template;
    }
}
