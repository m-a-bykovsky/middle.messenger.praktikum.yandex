import Block, { BlockProps } from '../../services/Block';
import template from './avatar.pug';
import './avatar.css';

type AvatarProps = {
    alt: string;
    src?: string,
    size?: number;
} & BlockProps

export class Avatar extends Block {
    constructor({ ...props }: AvatarProps) {
        const name = `${props.alt.replace(/\s/g, '')}_avatar`;
        const defaultSize = (props.size) ? props.size : 50;
        const mockSrc = (typeof props.src === 'undefined')
            ? `https://loremflickr.com/${props.size}/${props.size}?random=10&hash=${Math.random() * 100}`
            : props.src;

        super({
            size: defaultSize,
            src: mockSrc,
            ...props,
            name,
        });
    }

    render() {
        return template;
    }
}
