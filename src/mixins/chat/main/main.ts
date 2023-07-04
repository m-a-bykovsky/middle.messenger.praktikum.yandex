import Block, { BlockProps } from '../../../services/Block';

/* templates */
import template from './main.pug';

/* required mixins */
import { Message } from '../message';

/* styles */
import './main.css';

/* mock */
import { chatData } from '../../../pages/chat/chat-mock';

export class Main extends Block {
    constructor(props?: BlockProps) {
        super({
            feed: chatData.map((cur) => (new Message(
                {
                    author: cur.author,
                    text: cur.text,
                    attachSrc: cur.attachSrc,
                    status: cur.status,
                    time: cur.time,
                }
            ).getContent()?.outerHTML
            )),
            ...props
        });
    }

    render(): string {
        return template;
    }
}
