import Block, { BlockProps } from '../../services/Block';

/* templates */
import template from './profile.pug';

/* required mixins */
import { Avatar } from '../../mixins/avatar';
import { Icon } from '../../mixins/icon';
import { Button } from '../../mixins/button';
import { ProfileMainForm, ProfileSecurityForm } from '../../mixins/form';

/* styles */
import './profile.css';
import '../../layouts/half-centered.css';

/* mock */
const profileData = {
    displayName: 'mb',
    firstName: 'Михаил',
    secondName: 'Быковский',
    login: 'mb',
    email: 'm.a.bykovsky@yandex.ru',
    phone: '+7 912 345 67 89'
};

type ProfilePageProps = {
    mode: 'read' | 'write',
} & BlockProps;

export class ProfilePage extends Block {
    constructor(props: ProfilePageProps) {
        const wrapperElement = (props.isDisabled) ? 'form' : 'div';
        const isDisabled = (props.mode === 'read');
        super({
            wrapperElement,
            avatar: new Avatar({
                alt: 'my profile',
                size: 130,
                className: (!isDisabled) ? 'avatar_editable' : ''
            }),
            profileMain: new ProfileMainForm({
                isDisabled,
                mockData: profileData,
            }),
            profileSecurity: new ProfileSecurityForm(),
            submitButton: new Button({
                text: 'Сохранить',
            }),
            backlinkIcon: new Icon({
                iconClass: 'mb-arrow-left mb-pointer'
            }),
            profileData,
            ...props
        });
    }

    render(): string {
        return template;
    }
}
