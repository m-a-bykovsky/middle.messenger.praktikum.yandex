import Block, { BlockProps } from './Block';
import renderBlock from '../utils/Render';

export default class Route {
    private _pathname: string;

    private _blockClass: typeof Block;

    private _block: Block | null = null;

    private _props: BlockProps;

    constructor(
        pathname: string,
        view: typeof Block,
        props: BlockProps
    ) {
        this._pathname = pathname;
        this._blockClass = view;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block = null;
        }
    }

    match(pathname: string) {
        // @ask тут был isEqual, для чего?
        return pathname === this._pathname;
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass(this._props);
            renderBlock(this._props.rootQuery, this._block);
        }
    }
}
