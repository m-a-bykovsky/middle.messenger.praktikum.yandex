import Block from '../../services/Block';

/* templates */
import template from './errors.pug';

/* styles */
import './error.css';
import '../../layouts/third-centered.css';

export type ErrorPageProps = {
    code: string | number,
    message: string,
}

export class ErrorPage extends Block {
    constructor({ ...props }: ErrorPageProps) {
        super(props);
    }

    render(): string {
        return template;
    }
}
