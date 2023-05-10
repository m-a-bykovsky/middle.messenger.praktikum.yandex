import Block, { BlockProps } from '../../../services/Block';

/* template */
import template from './preview.pug';

/* required mixins */
import { Avatar } from '../../avatar';

/* styles */
import './preview.css';

type PreviewProps = {
    avatarAlt: string,
    avatarSrc?: string,
    msgAuthor: string,
    msgLast: string,
    msgUpdateTime: string,
    msgNewCounter?: string | number,
    isSelf?: boolean,
} & BlockProps;

export class Preview extends Block {
  constructor(props: PreviewProps) {
    super({
      avatar: new Avatar({
        alt: props.avatarAlt,
        src: props.avatarSrc,
      }),
      ...props
    });
  }

  render() {
    return template;
  }
}
