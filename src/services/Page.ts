/* eslint-disable no-shadow */
import Block, { BlockProps } from './Block';

export enum PageTemplate {
    main = 'main',
    secondary = 'secondary',
    tertiary = 'tertiary'
}

export default class Page extends Block {
    constructor(title: string, template: PageTemplate, props: BlockProps) {
        super(props);

        document.title = title;
        document.querySelector('.footer__title')!.textContent = `mb: ${title}`;
        document.getElementById('app')!.className = template;
    }
}
