import { BlockProps } from '../../services/Block';
import Page, { PageTemplate } from '../../services/Page';

/* templates */
import template from './profile.pug';

/* required mixins */
import { Avatar } from '../../mixins/avatar';
import { Icon } from '../../mixins/icon';
import { ProfileForm } from '../../mixins/form';

/* styles */
import './profile.css';

/* mock */
const profileData = {
    displayName: 'mb',
    firstName: 'Михаил',
    secondName: 'Быковский',
    login: 'mb',
    email: 'm.a.bykovsky@yandex.ru',
    phone: '+79123456789'
};

export type ProfilePageProps = {
    mode: 'read' | 'write',
} & BlockProps;

export class ProfilePage extends Page {
    constructor(props: ProfilePageProps) {
        const wrapperElement = (props.isDisabled) ? 'div' : 'form';
        const isDisabled = (props.mode === 'read');
        super(
            (isDisabled)
                ? 'а тут все про тебя, ага'
                : 'давай все тут поменяем',
            PageTemplate.secondary,
            {
                wrapperElement,
                avatar: new Avatar({
                    alt: 'my profile',
                    size: 130,
                    className: (!isDisabled) ? 'avatar_editable' : ''
                }),
                profileMain: new ProfileForm({
                    mode: props.mode,
                    isDisabled,
                    mockData: profileData,
                }),
                backlinkIcon: new Icon({
                    iconClass: 'mb-arrow-left mb-pointer'
                }),
                profileData,
                ...props
            }
        );
    }

    render(): string {
        return template;
    }
}
