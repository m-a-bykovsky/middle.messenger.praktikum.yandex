import Page, { PageTemplate } from '../../services/Page';

/* templates */
import template from './errors.pug';

/* styles */
import './error.css';

export type ErrorPageProps = {
    code: string | number,
    message: string,
}

export class ErrorPage extends Page {
    constructor({ ...props }: ErrorPageProps) {
        super(
            'спецбригада уже в пути',
            PageTemplate.secondary,
            props
        );
    }

    render(): string {
        return template;
    }
}
