import Block, { BlockProps } from '../../../services/Block';

/* templates */
import template from './message-meta.pug';

/* required mixins */
import { Icon } from '../../icon';

/* styles */
import './message-meta.css';

// eslint-disable-next-line no-shadow
export enum MessageStatusIcon {
    'read' = 'mb-read-message',
    'delivered' = 'mb-delivered-message',
}

type MessageMetaProps = {
    isSelf: string,
    status: MessageStatusIcon,
    time: string,
} & BlockProps

export class MessageMeta extends Block {
    constructor(props: MessageMetaProps) {
        super({
            statusIcon: new Icon({
                // @ts-ignore
                iconClass: MessageStatusIcon[props.status]
            }),
            ...props,
        });
    }

    render(): string {
        return template;
    }
}
