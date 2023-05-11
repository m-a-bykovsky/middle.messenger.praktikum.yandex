import Block, { BlockProps } from '../../services/Block';

/* templates */
import template from './chat.pug';

/* required mixins */
import { Side } from '../../mixins/chat/side';
import { Header } from '../../mixins/chat/header';
import { Main } from '../../mixins/chat/main';
import { Footer } from '../../mixins/chat/footer';

/* styles */
import './chat.css';
import '../../layouts/quarter-left.css';

/* mock */
import { chatData } from './chat-mock';

export class ChatPage extends Block {
    constructor(props?: BlockProps) {
        const noChatData:boolean = chatData.length === 0;

        super({
            noChatData,
            side: new Side(),
            header: new Header(),
            main: new Main(),
            footer: new Footer(),
            ...props,
        });
    }

    render(): string {
        return template;
    }
}
