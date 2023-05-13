import Page, { PageTemplate } from '../../services/Page';

/* templates */
import template from './chat.pug';

/* required mixins */
import { Side } from '../../mixins/chat/side';
import { Header } from '../../mixins/chat/header';
import { Main } from '../../mixins/chat/main';
import { Footer } from '../../mixins/chat/footer';

/* styles */
import './chat.css';

/* mock */
import { chatData } from './chat-mock';

export class ChatPage extends Page {
    constructor(props?: Page) {
        const noChatData: boolean = chatData.length === 0;

        super(
            'поболтаем?',
            PageTemplate.main,
            {
                noChatData,
                side: new Side(),
                header: new Header(),
                main: new Main(),
                footer: new Footer(),
                ...props,
            }
        );
    }

    render(): string {
        return template;
    }
}
