import Block, { BlockProps } from '../../../services/Block';

/* templates */
import template from './message.pug';

/* required mixins */
import { MessageMeta, MessageStatusIcon } from '../message-meta';

/* styles */
import './message.css';

type MessageProps = {
    author: string,
    text?: string,
    attachSrc?: string,
    status?: string,
    time: string,
} & BlockProps

export class Message extends Block {
    constructor(props: MessageProps) {
        const isSelf = (props.author === 'self') ? 'true' : 'false';

        super({
            meta: new MessageMeta({
                isSelf,
                status: props.status as MessageStatusIcon,
                time: props.time,
            }),
            isSelf: isSelf as string,
            ...props
        });
    }

    render(): string {
        return template;
    }
}
