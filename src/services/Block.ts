import * as pug from 'pug';
import EventBus from './EventBus';

export type BlockProps = Record<string, any>

export default class Block {
  static EVENTS: Record<string, string> = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update'
  };

  private _element: HTMLTemplateElement | null = null;

  props: BlockProps;

  eventBus: () => EventBus;

  constructor(props: BlockProps) {
    const eventBus = new EventBus();

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  init() {
    this._element = document.createElement('template');
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(oldProps: BlockProps) {
    this.componentDidMount(oldProps);
  }

  componentDidMount(oldProp?: BlockProps) { }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: BlockProps, newProps: BlockProps) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: BlockProps, newProps: BlockProps) {
    return oldProps !== newProps;
  }

  setProps = (nextProps: BlockProps) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const renderHTML: ({ ...props }) => string = pug.compile(this.render().trim());
    const htmlText: string = renderHTML({ ...this.props });
        this._element!.innerHTML = htmlText;
  }

  render(): string {
    return 'span Never give up. And never forget to declare mixin template';
  }

  getContent(): DocumentFragment {
    return this.element!.content;
  }

  getCompiledElement(): string {
    const fragmentChildren = Array.from(this.getContent().children);
    return fragmentChildren.reduce((prev, cur) => (prev + cur.outerHTML), '');
  }

  private _makePropsProxy(props: BlockProps) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        // eslint-disable-next-line no-nested-ternary
        return typeof value === 'function' ? value.bind(target)
          : (value instanceof Block) ? value.getCompiledElement() : value;
      },

      set(target, prop: string, value) {
        const curValue = target[prop];
        // eslint-disable-next-line no-param-reassign
        target[prop as keyof BlockProps] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, curValue, value);
        return true;
      },

      deleteProperty() {
        throw new Error('Нет доступа');
      }
    });
  }
}
