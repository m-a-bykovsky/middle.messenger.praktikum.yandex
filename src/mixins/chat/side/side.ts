import Block from '../../../services/Block';

/* templates */
import template from './side.pug';

/* required mixins */
import { Input, InputTheme } from '../../input';
import { Preview } from '../preview';

/* styles */
import './side.css';

/* mock */
import { currentChat, chatlistData } from '../../../pages/chat/chat-mock';

export class Side extends Block {
    constructor(props?: Block) {
        super({
            searchInput: new Input({
                name: 'chatListSearch',
                title: 'Поиск',
                type: 'search',
                theme: InputTheme.primary
            }),
            current: new Preview({
                avatarAlt: currentChat.author,
                avatarSrc: currentChat.avatarSrc,
                msgAuthor: currentChat.author,
                msgLast: currentChat.lastMsg,
                msgUpdateTime: currentChat.updateTime,
                isSelf: currentChat.isSelf,
                className: 'current',
            }),
            others: chatlistData.reduce((prev, cur) => (prev
                + new Preview({
                    avatarAlt: cur.author,
                    avatarSrc: cur.avatarSrc,
                    msgAuthor: cur.author,
                    msgLast: cur.lastMsg,
                    msgUpdateTime: cur.updateTime,
                    isSelf: cur.isSelf,
                    msgNewCounter: cur.newMsgCounter,
                }).getCompiledElement()
            ), ''),
            ...props,
        });
    }

    render(): string {
        return template;
    }
}
