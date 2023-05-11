import Block, { BlockProps } from '../../../services/Block';

/* templates */
import template from './header.pug';

/* required mixins */
import { Avatar } from '../../avatar';
import { Icon } from '../../icon';

/* styles */
import './header.css';

/* mock */
import { currentChat } from '../../../pages/chat/chat-mock';

export class Header extends Block {
    constructor(props?: BlockProps) {
        super({
            author: currentChat.author,
            avatar: new Avatar({
                alt: currentChat.author,
                src: currentChat.avatarSrc,
                size: 35
            }),
            moreIcon: new Icon({
                iconClass: 'mb-more mb-3x mb-pointer'
            }),
            ...props
        });
    }

    render(): string {
        return template;
    }
}
