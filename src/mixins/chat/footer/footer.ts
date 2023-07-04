import Block, { BlockProps } from '../../../services/Block';

/* templates */
import template from './footer.pug';

/* required mixins */
import { Input, InputTheme } from '../../input';
import { Icon } from '../../icon';
import { Button, ButtonTheme } from '../../button';

/* styles */
import './footer.css';

export class Footer extends Block {
    constructor(props?: BlockProps) {
        super({
            attachIcon: new Icon({
                iconClass: 'mb-attach mb-3x mb-pointer'
            }),
            newMessageInput: new Input({
                name: 'newMsg',
                title: 'Сообщение',
                theme: InputTheme.primary,
                isNeedValidate: false,
            }),
            sendMessageButton: new Button({
                text: new Icon({
                    iconClass: 'mb-arrow-right mb-pointer'
                }),
                theme: ButtonTheme.icon
            }),
            ...props,
        });
    }

    render(): string {
        return template;
    }
}
